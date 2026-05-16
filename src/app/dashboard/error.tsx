"use client";

export default function DashError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6">
      <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-8 max-w-md w-full text-center">
        <p className="text-[10px] tracking-[2px] uppercase text-[#e06b6b] font-semibold mb-3">Erro no servidor</p>
        <h2 className="text-lg font-semibold text-[#efefef] mb-2">Não foi possível carregar o painel</h2>
        <p className="text-[12px] text-[#e06b6b] bg-[#1c0d0d] border border-[#3a1515] rounded-xl p-3 mb-5 font-mono text-left break-all">
          {error.message || "Erro desconhecido"}
          {error.digest && <><br /><span className="text-[#555]">digest: {error.digest}</span></>}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg bg-[#C9A84C] text-[#080808] text-[12px] font-bold cursor-pointer"
          >
            Tentar novamente
          </button>
          <a
            href="/login"
            className="px-4 py-2 rounded-lg border border-[#282828] text-[#555] text-[12px] hover:text-[#C9A84C] transition-colors"
          >
            Voltar ao login
          </a>
        </div>
      </div>
    </div>
  );
}
