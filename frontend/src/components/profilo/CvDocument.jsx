import { CANDIDATE } from "@/data/mockReport";

const Bar = ({ w = "100%", h = 5, tone = "bg-black/10", className = "" }) => (
  <div className={`rounded-full ${tone} ${className}`} style={{ width: w, height: h }} />
);

const T = ({ skeleton, children, w = "100%", className = "" }) =>
  skeleton ? <Bar w={w} className={className} /> : <span className={className}>{children}</span>;

const ACCENT = {
  paris: "#7053cd",
  london: "#7053cd",
  tokyo: "#1A1A1A",
  stockholm: "#06b6d4",
  berlin: "#1A1A1A",
  milan: "#a16207",
};

const SectionTitle = ({ children, accent, skeleton }) => (
  <div className="mb-2 flex items-center gap-2">
    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
    {skeleton ? (
      <Bar w="70px" h={7} />
    ) : (
      <h3 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
        {children}
      </h3>
    )}
  </div>
);

const Experience = ({ exp, skeleton, compact }) => (
  <div>
    <div className="flex items-baseline justify-between gap-2">
      <T skeleton={skeleton} w="45%" className="text-[12px] font-semibold text-brand-ink">
        {exp.title} · {exp.org}
      </T>
      <T skeleton={skeleton} w="52px" className="font-mono text-[9px] text-brand-mute">
        {exp.period}
      </T>
    </div>
    {!compact && (
      <ul className="mt-1 space-y-1">
        {exp.points.map((p, i) => (
          <li key={i} className="flex items-start gap-1.5">
            {skeleton ? (
              <Bar w={`${88 - i * 9}%`} h={4} className="mt-0.5" />
            ) : (
              <>
                <span className="mt-[5px] h-0.5 w-0.5 shrink-0 rounded-full bg-brand-mute/50" />
                <span className="text-[10.5px] leading-snug text-brand-mute">{p}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Skills = ({ skeleton, accent }) => (
  <div className="flex flex-wrap gap-1">
    {CANDIDATE.skills.map((s) =>
      skeleton ? (
        <Bar key={s} w="46px" h={10} tone="bg-black/8" />
      ) : (
        <span
          key={s}
          className="rounded-full border px-1.5 py-0.5 text-[8.5px] font-medium"
          style={{ borderColor: `${accent}33`, color: accent, backgroundColor: `${accent}0d` }}
        >
          {s}
        </span>
      ),
    )}
  </div>
);

const Contact = ({ skeleton, light }) => (
  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
    {CANDIDATE.contact.map((c) => (
      <T key={c} skeleton={skeleton} w="64px" className={`text-[8.5px] ${light ? "text-white/75" : "text-brand-mute"}`}>
        {c}
      </T>
    ))}
  </div>
);

const HeaderName = ({ skeleton, light, center }) => (
  <div className={center ? "text-center" : ""}>
    <T
      skeleton={skeleton}
      w="180px"
      className={`font-heading text-[22px] font-bold leading-tight tracking-tight ${light ? "text-white" : "text-brand-ink"}`}
    >
      {CANDIDATE.name}
    </T>
    <div className={center ? "mt-0.5" : "mt-0.5"}>
      <T skeleton={skeleton} w="120px" className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-brand-mute"}`}>
        {CANDIDATE.role}
      </T>
    </div>
  </div>
);

export const CvDocument = ({ template = "paris", skeleton = false, className = "" }) => {
  const accent = ACCENT[template] || ACCENT.paris;
  const c = CANDIDATE;

  const body = (
    <>
      <section>
        <SectionTitle accent={accent} skeleton={skeleton}>Profil</SectionTitle>
        {skeleton ? (
          <div className="space-y-1.5"><Bar w="100%" h={4} /><Bar w="96%" h={4} /><Bar w="72%" h={4} /></div>
        ) : (
          <p className="text-[10.5px] leading-relaxed text-brand-mute">{c.summary}</p>
        )}
      </section>
      <section>
        <SectionTitle accent={accent} skeleton={skeleton}>Expérience</SectionTitle>
        <div className="space-y-3">
          {c.experiences.map((e) => <Experience key={e.title} exp={e} skeleton={skeleton} />)}
        </div>
      </section>
      <section>
        <SectionTitle accent={accent} skeleton={skeleton}>Compétences</SectionTitle>
        <Skills skeleton={skeleton} accent={accent} />
      </section>
      <section>
        <SectionTitle accent={accent} skeleton={skeleton}>Formation</SectionTitle>
        {c.education.map((e) => <Experience key={e.title} exp={{ ...e, points: [] }} skeleton={skeleton} compact />)}
      </section>
    </>
  );

  const sheet = "cv-sheet relative aspect-[210/297] w-[680px] overflow-hidden bg-white text-left";

  if (template === "london") {
    return (
      <div className={`${sheet} flex ${className}`}>
        <aside className="flex w-[32%] flex-col gap-4 bg-brand-sand p-6">
          <HeaderName skeleton={skeleton} />
          <Contact skeleton={skeleton} />
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Compétences</SectionTitle>
            <Skills skeleton={skeleton} accent={accent} />
          </section>
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Formation</SectionTitle>
            {c.education.map((e) => <Experience key={e.title} exp={{ ...e, points: [] }} skeleton={skeleton} compact />)}
          </section>
        </aside>
        <main className="flex flex-1 flex-col gap-5 p-6">
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Profil</SectionTitle>
            {skeleton ? (
              <div className="space-y-1.5"><Bar h={4} /><Bar w="94%" h={4} /><Bar w="70%" h={4} /></div>
            ) : (
              <p className="text-[10.5px] leading-relaxed text-brand-mute">{c.summary}</p>
            )}
          </section>
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Expérience</SectionTitle>
            <div className="space-y-3">
              {c.experiences.map((e) => <Experience key={e.title} exp={e} skeleton={skeleton} />)}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (template === "paris") {
    return (
      <div className={`${sheet} ${className}`}>
        <header className="bg-brand-violet p-6 pb-5">
          <HeaderName skeleton={skeleton} light />
          <div className="mt-2"><Contact skeleton={skeleton} light /></div>
        </header>
        <main className="flex flex-col gap-5 p-6">{body}</main>
      </div>
    );
  }

  if (template === "tokyo") {
    return (
      <div className={`${sheet} p-8 ${className}`}>
        <header className="border-b border-black/10 pb-5">
          <HeaderName skeleton={skeleton} center />
          <div className="mt-3 flex justify-center"><Contact skeleton={skeleton} /></div>
        </header>
        <main className="mt-6 flex flex-col gap-6">{body}</main>
      </div>
    );
  }

  if (template === "stockholm") {
    return (
      <div className={`${sheet} p-6 ${className}`}>
        <header className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: accent }}>
          <HeaderName skeleton={skeleton} />
          <div className="max-w-[45%] text-right"><Contact skeleton={skeleton} /></div>
        </header>
        <main className="mt-5 grid flex-1 grid-cols-[1fr_0.55fr] gap-6">
          <div className="flex flex-col gap-5">
            <section>
              <SectionTitle accent={accent} skeleton={skeleton}>Expérience</SectionTitle>
              <div className="space-y-3">
                {c.experiences.map((e) => <Experience key={e.title} exp={e} skeleton={skeleton} />)}
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-5 border-l border-black/8 pl-5">
            <section>
              <SectionTitle accent={accent} skeleton={skeleton}>Profil</SectionTitle>
              {skeleton ? (
                <div className="space-y-1.5"><Bar h={4} /><Bar w="90%" h={4} /><Bar w="64%" h={4} /></div>
              ) : (
                <p className="text-[9.5px] leading-relaxed text-brand-mute">{c.summary}</p>
              )}
            </section>
            <section>
              <SectionTitle accent={accent} skeleton={skeleton}>Compétences</SectionTitle>
              <Skills skeleton={skeleton} accent={accent} />
            </section>
            <section>
              <SectionTitle accent={accent} skeleton={skeleton}>Formation</SectionTitle>
              {c.education.map((e) => <Experience key={e.title} exp={{ ...e, points: [] }} skeleton={skeleton} compact />)}
            </section>
          </div>
        </main>
      </div>
    );
  }

  if (template === "berlin") {
    return (
      <div className={`${sheet} ${className}`}>
        <header className="flex items-center justify-between bg-brand-ink p-6">
          <HeaderName skeleton={skeleton} light />
          <div className="max-w-[42%] text-right"><Contact skeleton={skeleton} light /></div>
        </header>
        <div className="h-1 bg-brand-cyan" />
        <main className="flex flex-col gap-5 p-6">{body}</main>
      </div>
    );
  }

  return (
    <div className={`${sheet} p-7 ${className}`}>
      <header className="flex items-start justify-between">
        <HeaderName skeleton={skeleton} />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-amber">CV — 2026</span>
      </header>
      <div className="mt-3 border-t border-brand-amber/40 pt-3"><Contact skeleton={skeleton} /></div>
      <main className="mt-6 grid flex-1 grid-cols-[0.55fr_1fr] gap-6">
        <div className="flex flex-col gap-5 border-r border-brand-amber/25 pr-5">
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Compétences</SectionTitle>
            <Skills skeleton={skeleton} accent={accent} />
          </section>
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Formation</SectionTitle>
            {c.education.map((e) => <Experience key={e.title} exp={{ ...e, points: [] }} skeleton={skeleton} compact />)}
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Profil</SectionTitle>
            {skeleton ? (
              <div className="space-y-1.5"><Bar h={4} /><Bar w="92%" h={4} /><Bar w="66%" h={4} /></div>
            ) : (
              <p className="text-[10px] leading-relaxed text-brand-mute">{c.summary}</p>
            )}
          </section>
          <section>
            <SectionTitle accent={accent} skeleton={skeleton}>Expérience</SectionTitle>
            <div className="space-y-3">
              {c.experiences.map((e) => <Experience key={e.title} exp={e} skeleton={skeleton} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
