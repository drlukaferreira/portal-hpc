import { loginAction } from "./actions";

const ERROS: Record<string, string> = {
  credenciais: "E-mail ou senha incorretos. Tente novamente.",
  nao_encontrado: "Paciente não encontrado. Entre em contato com a clínica.",
  conexao: "Erro de conexão. Tente novamente.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const params = await searchParams;
  const erroMsg = params.erro ? ERROS[params.erro] ?? "Erro desconhecido." : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(201,168,76,0.07) 0%, transparent 65%), #080808",
      }}
    >
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/logo_hpc.png"
            alt="Health Performance Clinic"
            style={{ height: 52, objectFit: "contain" }}
            onError={undefined}
          />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl px-8 py-9 border border-[#1e1e1e]"
          style={{
            background: "#0e0e0e",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.025) inset",
          }}
        >
          <div className="text-center mb-8">
            <p className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold mb-2">
              Portal Exclusivo
            </p>
            <h1 className="text-xl font-semibold text-[#efefef] tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-[13px] text-[#555] mt-2">
              Acompanhe sua evolução e histórico clínico
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent mb-7" />

          {erroMsg && (
            <div className="flex items-center gap-3 bg-[#1c0d0d] border border-[#3a1a1a] rounded-xl px-4 py-3 mb-5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e06b6b20] border border-[#e06b6b30] flex items-center justify-center text-[#e06b6b] text-[10px] font-bold">
                !
              </span>
              <span className="text-[#e08080] text-[13px]">{erroMsg}</span>
            </div>
          )}

          <form action={loginAction} className="space-y-4">
            <div>
              <label className="block text-[10px] font-medium tracking-[1px] uppercase text-[#555] mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoFocus
                required
                className="w-full bg-[#0c0c0c] border border-[#282828] rounded-xl px-4 py-3.5 text-[14px] text-[#efefef] placeholder-[#333] outline-none transition-all focus:border-[#C9A84C80] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[1px] uppercase text-[#555] mb-2">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                placeholder="••••••••"
                required
                className="w-full bg-[#0c0c0c] border border-[#282828] rounded-xl px-4 py-3.5 text-[14px] text-[#efefef] placeholder-[#333] outline-none transition-all focus:border-[#C9A84C80] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl font-bold text-[13px] tracking-[0.8px] uppercase text-[#080808] cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #C9A84C 0%, #b8963e 50%, #a8893c 100%)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.2)",
              }}
            >
              Acessar Portal
            </button>
          </form>

          <div className="text-center mt-5">
            <a
              href="/esqueci-senha"
              className="text-[12px] text-[#444] hover:text-[#C9A84C] transition-colors"
            >
              Esqueci minha senha
            </a>
          </div>
        </div>

        <p className="text-center text-[10px] text-[#2a2a2a] tracking-[1.5px] uppercase mt-7">
          Health Performance Clinic &nbsp;·&nbsp; Acesso Seguro
        </p>
      </div>
    </div>
  );
}
