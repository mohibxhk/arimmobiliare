import { useState } from "react";
import { KeyRound } from "lucide-react";

interface ReplaceableImageProps {
  src?: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
}

export default function ReplaceableImage({
  src,
  alt,
  className,
  placeholderLabel = "Immagine in arrivo",
}: ReplaceableImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`relative flex items-center justify-center bg-sand ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #E5E0D8 0 1px, transparent 1px 14px)",
          }}
        />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <KeyRound size={26} strokeWidth={1.2} className="text-muted2" />
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted2">
            {placeholderLabel}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
