"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhotoLightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0 cursor-zoom-in"
        aria-label="View photo"
      >
        <Image
          src="/photo-thumb.jpg"
          alt="Shantanu Bal"
          width={72}
          height={72}
          className="rounded-full object-cover"
          priority
          suppressHydrationWarning
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/photo-large.jpg"
            alt="Shantanu Bal"
            width={600}
            height={600}
            className="rounded-2xl object-cover shadow-2xl max-w-[90vw] max-h-[90vh]"
          />
        </div>
      )}
    </>
  );
}
