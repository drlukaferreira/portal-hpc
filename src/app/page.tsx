import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/NavBar";

const WA = "https://wa.me/5592985162534";

const servicos = [
  {
    icon: "◎",
    titulo: "Emagrecimento Inteligente",
    desc: "Protocolos personalizados com base em sua genética, hormônios e rotina. Resultados reais, sem atalhos.",
  },
  {
    icon: "⚡",
    titulo: "Performance Hormonal",
    desc: "Avaliação completa e otimização hormonal para homens e mulheres. Mais energia, foco e capacidade.",
  },
  {
    icon: "◈",
    titulo: "Reposição Hormonal",
    desc: "Protocolos de TRT, reposição feminina e nutrologia avançada. Medicina baseada em evidências.",
  },
  {
    icon: "▲",
    titulo: "Hipertrofia & Força",
    desc: "Periodização integrada com medicina do esporte, nutrição e acompanhamento contínuo da equipe.",
  },
];

const equipe = [
  {
    nome: "Italo Melquiades",
    cargo: "Nutricionista",
    desc: "Nutrição funcional e esportiva integrada ao protocolo médico.",
    foto: null,
  },
  {
    nome: "Bruno Araujo",
    cargo: "Personal Online",
    desc: "Treinamento de força e performance, adaptado à sua realidade.",
    foto: null,
  },
  {
    nome: "Juan da Costa",
    cargo: "Terapeuta Comportamental",
    desc: "Reprogramação de hábitos e saúde mental aplicada à performance.",
    foto: null,
  },
  {
    nome: "Mario Abrahao",
    cargo: "Farmacêutico",
    desc: "Acompanhamento farmacêutico domiciliar e orientação de protocolos.",
    foto: null,
  },
];

const credenciais = [
  "Médico Militar · 15 anos de carreira",
  "Forças Especiais",
  "Paraquedismo Militar",
  "Salto Livre Militar",
  "Guerra na Selva",
  "DQBRN",
  "Ortopedista & Médico do Esporte",
];

export default function HomePage() {
  return (
    <div className="bg-[#080808] min-h-screen text-[#efefef]">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0d0d0d 0%, #080808 50%, #0a0800 100%)",
        }}
      >
        {/* Gold orb */}
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 pt-32 pb-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] font-semibold">
                Health Performance Clinic
              </span>
            </div>

            <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black tracking-tight leading-[0.95] uppercase mb-8">
              A Unidade<br />
              <span className="text-[#C9A84C]">de Elite</span>
            </h1>

            <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#666] leading-relaxed max-w-xl mb-10 font-light">
              Medicina de performance com a disciplina de quem serviu.
              Protocolos de elite para quem recusa o padrão mediano.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C9A84C] text-[#080808] font-bold text-[13px] tracking-[2px] uppercase rounded-xl hover:bg-[#e0bb5a] transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Consulta
              </a>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[#2a2a2a] text-[#666] font-medium text-[13px] tracking-[1.5px] uppercase rounded-xl hover:border-[#C9A84C50] hover:text-[#C9A84C] transition-all"
              >
                Área de Membros
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-[#141414]">
              {["Presencial · Manaus/AM", "Atendimento Online", "Equipe Multidisciplinar"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                  <span className="text-[11px] tracking-[1px] uppercase text-[#444]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="text-[9px] tracking-[3px] uppercase text-[#C9A84C]">Scroll</div>
          <div className="w-px h-8 bg-[#C9A84C]" />
        </div>
      </section>

      {/* ── SERVIÇOS ─────────────────────────────────────────────────────── */}
      <section id="servicos" className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold">Protocolos</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight uppercase mb-4">
            Nossos Serviços
          </h2>
          <p className="text-[#555] text-[14px] max-w-lg mb-16 leading-relaxed">
            Cada protocolo é construído com precisão cirúrgica. Sem suplementos genéricos, sem dietas da moda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicos.map((s) => (
              <div
                key={s.titulo}
                className="group bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#C9A84C30] transition-all hover:-translate-y-1"
              >
                <div className="text-[#C9A84C] text-[1.5rem] mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                  {s.icon}
                </div>
                <h3 className="text-[15px] font-bold tracking-tight mb-3 leading-snug">{s.titulo}</h3>
                <p className="text-[12px] text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAL ──────────────────────────────────────────────────── */}
      <section id="diferencial" className="py-28 px-5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold">Diferencial</span>
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight uppercase mb-6 leading-tight">
                A disciplina que<br />
                <span className="text-[#C9A84C]">prescrevemos,<br />nós vivemos.</span>
              </h2>
              <p className="text-[#666] text-[15px] leading-relaxed mb-8">
                Somos médicos militares de carreira. Não aprendemos disciplina em livros —
                a praticamos há mais de uma década nas condições mais exigentes do mundo.
                Essa é a diferença que o paciente sente desde a primeira consulta.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-[12px] tracking-[1.5px] uppercase font-semibold hover:opacity-70 transition-opacity"
              >
                Conheça nossa missão
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-6">
                <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold mb-3">
                  Dr. Luka Ferreira · Médico Militar
                </div>
                <div className="flex flex-wrap gap-2">
                  {credenciais.map((c) => (
                    <span key={c} className="text-[10px] tracking-[0.5px] text-[#555] bg-[#141414] border border-[#1e1e1e] rounded-full px-3 py-1">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-6">
                <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold mb-3">
                  Dra. Suellen França · Médica Militar
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Médica Militar · 14 anos", "Ginecologista", "Nutróloga", "Saúde Hormonal Feminina", "Estética Íntima", "Atividadade Física Militar"].map((c) => (
                    <span key={c} className="text-[10px] tracking-[0.5px] text-[#555] bg-[#141414] border border-[#1e1e1e] rounded-full px-3 py-1">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#C9A84C0a] border border-[#C9A84C20] rounded-2xl p-5">
                <p className="text-[13px] text-[#C9A84C] font-medium leading-relaxed italic">
                  "Batizamos a HPC de A Unidade de Elite não por acaso —
                  mas porque é exatamente o que somos e o que entregamos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPE ───────────────────────────────────────────────────────── */}
      <section id="equipe" className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold">Comando</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight uppercase mb-16">
            Nossa Equipe
          </h2>

          {/* Médicos */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Dr. Luka */}
            <div className="group bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl overflow-hidden hover:border-[#C9A84C30] transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-[#111]">
                <Image
                  src="/dr-luka.jpg"
                  alt="Dr. Luka Ferreira"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] tracking-[2.5px] uppercase text-[#C9A84C] font-semibold mb-1">Médico Fundador</div>
                <h3 className="text-[1.2rem] font-bold tracking-tight mb-1">Dr. Luka Ferreira</h3>
                <p className="text-[12px] text-[#555] mb-3">CRM · Ortopedista · Médico do Esporte · Medicina de Performance</p>
                <p className="text-[13px] text-[#666] leading-relaxed">
                  15 anos de Exército Brasileiro, serviu nas Forças Especiais por quase 7 anos.
                  Especializado em emagrecimento, performance hormonal, hipertrofia e qualidade de vida.
                </p>
              </div>
            </div>

            {/* Dra. Suellen */}
            <div className="group bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl overflow-hidden hover:border-[#C9A84C30] transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-[#111]">
                <Image
                  src="/dra-suellen.jpg"
                  alt="Dra. Suellen França"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] tracking-[2.5px] uppercase text-[#C9A84C] font-semibold mb-1">Médica Co-Fundadora</div>
                <h3 className="text-[1.2rem] font-bold tracking-tight mb-1">Dra. Suellen França</h3>
                <p className="text-[12px] text-[#555] mb-3">CRM · Ginecologista · Nutróloga · Saúde Hormonal Feminina</p>
                <p className="text-[13px] text-[#666] leading-relaxed">
                  17 anos de formada, 14 anos de carreira militar. Especialista em saúde hormonal feminina,
                  nutrologia e estética íntima.
                </p>
              </div>
            </div>
          </div>

          {/* Equipe de apoio */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {equipe.map((m) => (
              <div key={m.nome} className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-5 hover:border-[#C9A84C20] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222] flex items-center justify-center text-[#C9A84C] font-bold text-[14px] mb-4">
                  {m.nome[0]}
                </div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] font-semibold mb-1">{m.cargo}</div>
                <div className="text-[13px] font-semibold mb-2 leading-snug">{m.nome}</div>
                <p className="text-[11px] text-[#444] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        id="contato"
        className="py-28 px-5"
        style={{ background: "linear-gradient(135deg, #0e0e0e 0%, #0a0800 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-semibold">Missão</span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight uppercase mb-6 leading-tight">
            Pronto para<br />
            <span className="text-[#C9A84C]">sua missão?</span>
          </h2>
          <p className="text-[#555] text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
            Atendimento presencial em Manaus/AM e online para todo o Brasil.
            A sua performance começa com uma decisão.
          </p>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] text-[#080808] font-black text-[13px] tracking-[2.5px] uppercase rounded-xl hover:bg-[#e0bb5a] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(201,168,76,0.2)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#141414] py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo_hpc.png" alt="HPC" width={28} height={28} className="object-contain opacity-60" />
            <div>
              <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#C9A84C]">HPC · Unidade de Elite</div>
              <div className="text-[10px] text-[#333]">Health Performance Clinic · Manaus/AM</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[10px] tracking-[1px] uppercase text-[#333]">
            <a href="#servicos" className="hover:text-[#C9A84C] transition-colors">Serviços</a>
            <a href="#equipe" className="hover:text-[#C9A84C] transition-colors">Equipe</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">WhatsApp</a>
            <Link href="/login" className="hover:text-[#C9A84C] transition-colors">Portal</Link>
          </div>

          <div className="text-[10px] text-[#2a2a2a] text-center">
            © {new Date().getFullYear()} HPC · Todos os direitos reservados<br />
            <span className="text-[#222]">Dados protegidos conforme LGPD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
