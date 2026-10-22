import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export interface AppointmentPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  message?: string;
  lang: "it" | "en";
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  kind: "property" | "valuation" | "rent" | "sell" | "general";
  property_slug?: string;
  property_address?: string;
  lang: "it" | "en";
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  lang: "it" | "en";
}

export async function postAppointment(payload: AppointmentPayload) {
  const res = await axios.post(`${API}/appointments`, payload);
  return res.data as { ok: boolean; id: string };
}

export async function postEnquiry(payload: EnquiryPayload) {
  const res = await axios.post(`${API}/enquiries`, payload);
  return res.data as { ok: boolean; id: string };
}

export async function postContact(payload: ContactPayload) {
  const res = await axios.post(`${API}/contact`, payload);
  return res.data as { ok: boolean; id: string };
}
