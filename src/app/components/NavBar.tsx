"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo_hpc.png" alt="HPC" width={36} height={36} className="object-contain" />
          <div>
            <div className="text-[13px] font-bold tracking-[3px] uppercase text-[#C9A84C]">HPC</div>
            <div className="text-[9px] tracking-[1.5px] uppercase text-[#444] hidden sm:block">Unidade de Elite</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-[1.5px] uppercase text-[#888] hover:text-[#C9A84C] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5592985162534"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#C9A84C] text-[#080808] text-[11px] font-bold tracking-[1.5px] uppercase rounded-lg hover:bg-[#e0bb5a] transition-colors"
          >
            Agendar
          </a>
          <Link
            href="/login"
            className="px-4 py-2 border border-[#2a2a2a] text-[11px] tracking-[1px] uppercase text-[#555] hover:text-[#C9A84C] hover:border-[#C9A84C40] rounded-lg transition-all"
          >
            Área de Membros
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#888] transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#888] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#888] transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[13px] tracking-[1px] uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href="https://wa.me/5592985162534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 bg-[#C9A84C] text-[#080808] text-[11px] font-bold tracking-[1px] uppercase rounded-lg"
            >
              Agendar
            </a>
            <Link
              href="/login"
              className="flex-1 text-center py-2.5 border border-[#2a2a2a] text-[11px] tracking-[1px] uppercase text-[#555] rounded-lg"
            >
              Área de Membros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
