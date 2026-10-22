from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional, Literal
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class AppointmentRequest(BaseModel):
    name: str
    email: str
    phone: str
    date: str
    time: str
    reason: str
    message: Optional[str] = ""
    lang: Literal["it", "en"] = "it"


class EnquiryRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    kind: Literal["property", "valuation", "rent", "sell", "general"] = "general"
    property_slug: Optional[str] = None
    property_address: Optional[str] = None
    lang: Literal["it", "en"] = "it"


class ContactRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    subject: Optional[str] = ""
    message: str
    lang: Literal["it", "en"] = "it"


async def store(collection: str, payload: dict) -> dict:
    doc = {
        "id": str(uuid.uuid4()),
        **payload,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db[collection].insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.get("/")
async def root():
    return {"message": "AR Immobiliare API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/appointments")
async def create_appointment(input: AppointmentRequest):
    doc = await store("appointments", input.model_dump())
    return {"ok": True, "id": doc["id"]}


@api_router.post("/enquiries")
async def create_enquiry(input: EnquiryRequest):
    doc = await store("enquiries", input.model_dump())
    return {"ok": True, "id": doc["id"]}


@api_router.post("/contact")
async def create_contact(input: ContactRequest):
    doc = await store("contact_messages", input.model_dump())
    return {"ok": True, "id": doc["id"]}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
