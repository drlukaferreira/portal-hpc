import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { DynamicBioChart } from "./DynamicBioChart";

type DashData = {
  nome: string;
  pacote: string | null;
  dias_restantes: number | null;
  data_vencimento: string | null;
  proxima_consulta: { titulo: string; data: string; hora: string } | null;
  cotas: Record<string, number>;
  cons_medico: number;
  cons_suellen: number;
  cons_nutri: number;
  cons_personal: number;
  cons_terapeuta: number;
  bioimpedancias: number;
  app_info: Record<string, string> | null;
  bio_chart: Array<{ data: string; peso: string; gordura: string; muscular: string }>;
  consultas_hist: Array<Record<string, string>>;
  atend_hist: Array<Record<string, string>>;
};

async function fetchDashData(pid: string): Promise<DashData> {
  const apiUrl = process.env.FLASK_API_URL!;
  const apiKey = process.env.PORTAL_API_KEY!;

  const resp = await fetch(`${apiUrl}/api/paciente/dados?pid=${pid}`, {
    headers: { "X-API-Key": apiKey },
    cache: "no-store",
  });

  if (!resp.ok) throw new Error("Falha ao carregar dados");
  return resp.json();
}

function StatBox({
  value,
  quota,
  label,
}: {
  value: number;
  quota?: number;
  label: string;
}) {
  const pct = quota ? Math.min(100, Math.round((value / quota) * 100)) : null;
  return (
    <div className="rounded-xl border border-[#1e1e1e] bg-[#080808] p-4 text-center transition-colors hover:border-[#C9A84C30]">
      <div className="text-2xl font-bold text-[#C9A84C] leading-none tracking-tight">
        {value}
        {quota != null && (
          <span className="text-sm font-normal text-[#333]">/{quota}</span>
        )}
      </div>
      <div className="text-[10px] uppercase tracking-[1px] text-[#555] mt-1.5 font-medium">
        {label}
      </div>
      {pct != null && (
        <div className="mt-2.5 h-[2px] rounded-full bg-[#1e1e1e] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#C9A84C] transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <span className="text-[10px] uppercase tracking-[2px] text-[#C9A84C] font-semibold whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-5 mb-3.5 ${className}`}>
      {children}
    </div>
  );
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const pid = cookieStore.get("hpc_pid")?.value;
  if (!pid) redirect("/login");

  // Note: redirect() cannot be called inside try/catch in Next.js
  let data: DashData | null = null;
  try {
    data = await fetchDashData(pid!);
  } catch (e) {
    console.error("fetchDashData error:", e);
  }

  if (!data) redirect("/login");

  const {
    nome,
    pacote,
    dias_restantes,
    data_vencimento,
    proxima_consulta,
    cotas,
    cons_medico,
    cons_suellen,
    cons_nutri,
    cons_personal,
    cons_terapeuta,
    bioimpedancias,
    app_info,
    bio_chart,
    consultas_hist,
    atend_hist,
  } = data!;

  const primeiroNome = nome.split(" ")[0];

  // Plan badge
  let badgeColor = "";
  let badgeText = "";
  if (dias_restantes === null) {
    badgeText = "";
  } else if (dias_restantes < 0) {
    badgeColor = "bg-[#333] text-[#888] border-[#2a2a2a]";
    badgeText = "Concluído";
  } else if (dias_restantes <= 15) {
    badgeColor = "bg-[#1c0d0d] text-[#e06b6b] border-[#3a1515]";
    badgeText = `${dias_restantes}d restantes`;
  } else if (dias_restantes <= 30) {
    badgeColor = "bg-[#1a1500] text-[#e8c45a] border-[#35290a]";
    badgeText = `${dias_restantes}d restantes`;
  } else {
    badgeColor = "bg-[#0a1a10] text-[#4ecb7f] border-[#153020]";
    badgeText = "Ativo";
  }

  const expiryPct =
    dias_restantes != null && dias_restantes >= 0
      ? Math.min(100, Math.round((dias_restantes / 90) * 100))
      : null;

  const expiryColor =
    dias_restantes != null
      ? dias_restantes <= 15
        ? "#e06b6b"
        : dias_restantes <= 30
        ? "#e8c45a"
        : "#C9A84C"
      : "#C9A84C";

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-5 h-[60px] border-b border-[#1a1a1a]"
        style={{
          background: "rgba(8,8,8,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-[110px] h-[34px]">
            <Image
              src="/logo_hpc.png"
              alt="HPC"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
              priority
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                document.getElementById("nb-fb")!.style.display = "flex";
              }}
            />
            <div id="nb-fb" className="hidden flex-col" style={{ display: "none" }}>
              <span className="text-[#C9A84C] text-[11px] font-bold tracking-[1.5px] uppercase leading-tight">HPC</span>
              <span className="text-[#444] text-[9px] tracking-[2px] uppercase">Portal</span>
            </div>
          </div>
        </div>
        <form action="/logout" method="GET">
          <button
            type="submit"
            className="flex items-center gap-1.5 border border-[#282828] rounded-lg px-3.5 py-1.5 text-[12px] text-[#555] hover:text-[#C9A84C] hover:border-[#C9A84C40] transition-all font-medium cursor-pointer bg-transparent"
          >
            <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Sair
          </button>
        </form>
      </nav>

      {/* Page content */}
      <div className="max-w-[700px] mx-auto px-4 py-8 pb-20">

        {/* Hero */}
        <div
          className="relative overflow-hidden rounded-2xl border border-[#1e1e1e] px-7 py-7 mb-4"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0e0e0e 100%)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
          />
          <div className="text-[10px] tracking-[2.5px] uppercase text-[#C9A84C] font-semibold mb-2">Olá,</div>
          <h1 className="text-[1.75rem] font-bold tracking-tight text-[#efefef] leading-none">{primeiroNome}</h1>
          <p className="text-[13px] text-[#444] mt-2">Acompanhe sua evolução · Health Performance Clinic</p>
        </div>

        {/* Plan */}
        {pacote && (
          <Card>
            <SectionLabel>Seu Plano</SectionLabel>
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="text-[1.05rem] font-semibold text-[#efefef] tracking-tight">{pacote}</div>
                {dias_restantes !== null && (
                  <div className="text-[12px] text-[#555] mt-1">
                    {dias_restantes < 0
                      ? `Concluído em ${data_vencimento}`
                      : dias_restantes === 0
                      ? `Encerra hoje · ${data_vencimento}`
                      : `Encerra em ${data_vencimento}`}
                  </div>
                )}
              </div>
              {badgeText && (
                <span className={`text-[11px] font-semibold tracking-[0.3px] px-3 py-1.5 rounded-full border ${badgeColor}`}>
                  {badgeText}
                </span>
              )}
            </div>
            {expiryPct !== null && (
              <div className="mt-4 h-[3px] rounded-full bg-[#1a1a1a] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${expiryPct}%`, background: expiryColor }}
                />
              </div>
            )}
          </Card>
        )}

        {/* Next appointment */}
        {proxima_consulta && (
          <div className="flex items-center gap-4 bg-[#0e0e0e] border border-[#1e1e1e] border-l-[3px] border-l-[#C9A84C] rounded-2xl px-5 py-4 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C0d] border border-[#C9A84C20] flex items-center justify-center text-lg flex-shrink-0">
              📅
            </div>
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#C9A84C] font-semibold mb-1">
                Próxima Consulta
              </div>
              <div className="text-[14px] font-semibold text-[#efefef]">{proxima_consulta.titulo}</div>
              <div className="text-[12px] text-[#555] mt-0.5">{proxima_consulta.data} às {proxima_consulta.hora}</div>
            </div>
          </div>
        )}

        {/* Consultations */}
        <Card>
          <SectionLabel>Consultas Realizadas</SectionLabel>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3">
            <StatBox value={cons_medico} quota={cotas.medico || undefined} label="Dr. Luka" />
            {cotas.suellen > 0 && (
              <StatBox value={cons_suellen} quota={cotas.suellen} label="Dra. Suellen" />
            )}
            {cotas.nutri > 0 && (
              <StatBox value={cons_nutri} quota={cotas.nutri} label="Nutricionista" />
            )}
            {cotas.personal > 0 && (
              <StatBox value={cons_personal} quota={cotas.personal} label="Personal" />
            )}
            {cons_terapeuta > 0 && (
              <StatBox value={cons_terapeuta} label="Terapeuta" />
            )}
            {cotas.bioimpedancia > 0 && (
              <StatBox value={bioimpedancias} quota={cotas.bioimpedancia} label="Bioimpedância" />
            )}
          </div>
        </Card>

        {/* Applications */}
        {app_info && (app_info["Realizadas"] || app_info["Aplicações Pendentes"]) && (
          <Card>
            <SectionLabel>Aplicações · {app_info["Medicação Contratada"] || ""}</SectionLabel>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-[#1e1e1e] bg-[#080808] p-4 text-center">
                <div className="text-2xl font-bold text-[#4ecb7f] tracking-tight leading-none">
                  {app_info["Realizadas"] || 0}
                </div>
                <div className="text-[10px] uppercase tracking-[1px] text-[#555] mt-1.5">Realizadas</div>
              </div>
              <div className="rounded-xl border border-[#1e1e1e] bg-[#080808] p-4 text-center">
                <div className={`text-2xl font-bold tracking-tight leading-none ${parseInt(app_info["Aplicações Pendentes"] || "0") > 0 ? "text-[#e06b6b]" : "text-[#C9A84C]"}`}>
                  {app_info["Aplicações Pendentes"] || 0}
                </div>
                <div className="text-[10px] uppercase tracking-[1px] text-[#555] mt-1.5">Pendentes</div>
              </div>
            </div>
          </Card>
        )}

        {/* Bio chart */}
        {bio_chart.length >= 2 && (
          <Card>
            <SectionLabel>Evolução Corporal</SectionLabel>
            <div className="h-[200px]">
              <DynamicBioChart data={bio_chart} />
            </div>
          </Card>
        )}

        {bio_chart.length === 1 && (
          <Card>
            <SectionLabel>Evolução Corporal</SectionLabel>
            <div className="bg-[#080808] border border-[#1e1e1e] rounded-xl p-4 space-y-2.5">
              {[
                { label: "Peso", value: `${bio_chart[0].peso} kg` },
                { label: "Body Fat", value: `${bio_chart[0].gordura}%` },
                { label: "Massa Muscular", value: `${bio_chart[0].muscular}%` },
              ].map((m) => (
                <div key={m.label} className="flex justify-between items-center">
                  <span className="text-[11px] uppercase tracking-[0.5px] text-[#555]">{m.label}</span>
                  <span className="text-[14px] font-semibold text-[#efefef]">{m.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#2e2e2e] text-center mt-3">
              Registre mais medições para ver a evolução no gráfico
            </p>
          </Card>
        )}

        {/* Consultation history */}
        {consultas_hist.length > 0 && (
          <Card>
            <SectionLabel>Histórico de Consultas</SectionLabel>
            <div className="divide-y divide-[#141414]">
              {consultas_hist.map((c, i) => (
                <div key={i} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C60] flex-shrink-0" />
                    <span className="text-[13px] text-[#b0b0b0] font-medium">
                      {c["Médico"] || c["Medico"] || "—"}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] text-[#555]">{c["Data"] || ""}</div>
                    {c["Tipo"] && <div className="text-[11px] text-[#3a3a3a] mt-0.5">{c["Tipo"]}</div>}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Team history */}
        {atend_hist.length > 0 && (
          <Card>
            <SectionLabel>Histórico de Atendimentos</SectionLabel>
            <div className="divide-y divide-[#141414]">
              {atend_hist.map((a, i) => (
                <div key={i} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C60] flex-shrink-0" />
                    <span className="text-[13px] text-[#b0b0b0] font-medium">
                      {a["Profissional"] || "—"}
                    </span>
                  </div>
                  <div className="text-[12px] text-[#555]">{a["Data"] || ""}</div>
                </div>
              ))}
            </div>
          </Card>
        )}

      </div>
    </div>
  );
}
