/** Typographic BADR wordmark — used in the header, hero and footer. */
export function Wordmark({
  size = "md",
  estd = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  estd?: boolean;
  className?: string;
}) {
  const s = size === "sm" ? "text-base" : size === "lg" ? "text-3xl" : "text-xl";
  return (
    <span className={`inline-block text-center leading-none ${className}`}>
      <span className={`font-display ${s}`} style={{ letterSpacing: "0.3em" }}>
        BADR
      </span>
      {estd && (
        <span className="mt-2 block text-[9px] uppercase tracking-[0.34em] opacity-60">
          Estd 1448 AH
        </span>
      )}
    </span>
  );
}
