import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { type ReactNode } from "react";
import { EASE } from "./motion/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-stone2"
      >
        {label}
        {optional && (
          <span className="ml-2 normal-case tracking-normal text-muted2">
            ({t("common.optional")})
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
  testId,
}: {
  loading: boolean;
  children: ReactNode;
  testId: string;
}) {
  const { t } = useLanguage();
  return (
    <button
      type="submit"
      data-testid={testId}
      disabled={loading}
      className="group relative inline-flex items-center justify-center bg-ink px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-accent disabled:cursor-wait disabled:opacity-60"
    >
      {loading ? t("common.sending") : children}
    </button>
  );
}

export function FormSuccess({
  title,
  text,
  onReset,
  resetLabel,
  testId,
}: {
  title: string;
  text: string;
  onReset?: () => void;
  resetLabel?: string;
  testId: string;
}) {
  return (
    <motion.div
      data-testid={testId}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="border border-line bg-sand p-8 text-center sm:p-12"
      role="status"
    >
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
        <Check size={20} strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 font-serif text-2xl text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone2">
        {text}
      </p>
      {onReset && resetLabel && (
        <button
          onClick={onReset}
          data-testid={`${testId}-reset`}
          className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone2 underline-offset-4 transition-colors duration-300 hover:text-accent"
        >
          {resetLabel}
        </button>
      )}
    </motion.div>
  );
}
