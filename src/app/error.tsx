"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6">
      <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-8 max-w-lg w-full text-center">
        <p className="text-[10px] tracking-[2px] uppercase text-[#e06b6b] font-semibold mb-3">Erro</p>
        <h2 className="text-lg font-semibold text-[#efefef] mb-3">Algo deu errado</h2>
        <p className="text-[12px] text-[#e06b6b] bg-[#1c0d0d] border border-[#3a1515] rounded-xl p-3 mb-4 font-mono text-left break-all">
          {error.message || "Erro desconhecido"}
          {error.digest && <><br /><span className="text-[#555]">digest: {error.digest}</span></>}
        </p>
        <a href="/login" className="text-[12px] text-[#C9A84C] underline">Voltar ao login</a>
      </div>
    </div>
  );
}
