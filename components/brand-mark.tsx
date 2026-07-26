import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="#top" aria-label="Atelier North, back to top">
      <span className="brand-monogram" aria-hidden="true">
        A<span>N</span>
      </span>
      {!compact && <span className="brand-name">Atelier North</span>}
    </Link>
  );
}
