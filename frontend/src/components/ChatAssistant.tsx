import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getChatReply } from "../lib/chatEngine";
import { ASSETS } from "../data/site";
import { EASE } from "./motion/Reveal";

interface Msg {
  from: "user" | "assistant";
  text: string;
  link?: { label: string; href: string };
}

const QUICK = ["buy", "sell", "rent", "appointment", "contact"] as const;

export default function ChatAssistant() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "assistant", text: t("chat.greeting") }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, thinking]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setThinking(true);
    const reply = await getChatReply(trimmed, lang);
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "assistant", text: reply.text, link: reply.link }]);
      setThinking(false);
    }, 550);
  };

  return (
    <>
      <motion.button
        data-testid="chat-toggle-button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("chat.title")}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[150] flex h-12 w-12 items-center justify-center bg-ink text-ivory shadow-xl transition-colors duration-300 hover:bg-accent sm:bottom-7 sm:right-7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5, ease: EASE }}
      >
        {open ? <X size={19} strokeWidth={1.5} /> : <MessageCircle size={19} strokeWidth={1.5} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed bottom-[76px] right-5 z-[150] flex h-[520px] max-h-[72vh] w-[min(92vw,380px)] flex-col border border-line bg-ivory shadow-2xl sm:bottom-[92px] sm:right-7"
            role="dialog"
            aria-label={t("chat.title")}
          >
            <div className="flex items-center gap-3 border-b border-line bg-ink px-4 py-3 text-ivory">
              <img src={ASSETS.logo} alt="" className="h-8 w-8 bg-white object-cover" />
              <div className="flex-1">
                <p className="flex items-center gap-2 text-sm font-medium">
                  {t("chat.title")}
                  <span className="border border-ivory/30 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em] text-ivory/70">
                    {t("chat.demo")}
                  </span>
                </p>
                <p className="text-[10px] text-ivory/50">{t("chat.subtitle")}</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      m.from === "user" ? "bg-ink text-ivory" : "bg-sand text-body"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.link && (
                      <Link
                        to={m.link.href}
                        onClick={() => setOpen(false)}
                        data-testid={`chat-link-${i}`}
                        className="mt-2 inline-block border-b border-accent text-[11px] uppercase tracking-[0.14em] text-accent"
                      >
                        {m.link.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="flex justify-start">
                  <div className="flex gap-1 bg-sand px-3.5 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.18 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  data-testid={`chat-quick-${q}`}
                  onClick={() => send(t(`chat.qa.${q}`))}
                  className="border border-line px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-stone2 transition-colors duration-300 hover:border-ink hover:text-ink"
                >
                  {t(`chat.qa.${q}`)}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2 border-t border-line px-4 py-3"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                data-testid="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.placeholder")}
                aria-label={t("chat.placeholder")}
                className="flex-1 bg-transparent text-[13px] text-body placeholder:text-muted2 focus:outline-none"
              />
              <button
                type="submit"
                data-testid="chat-send-button"
                aria-label={t("common.send")}
                className="text-stone2 transition-colors duration-300 hover:text-accent"
              >
                <Send size={17} strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
