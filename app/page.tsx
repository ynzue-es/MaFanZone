import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { Logo } from "./components/Logo";
import { Reveal, Stagger, StaggerItem } from "./components/Motion";
import { getGalerieImages } from "./lib/galerie";

const CONTACT_EMAIL = "yannis.nzuepro@gmail.com";
const ZONE = "Ain · Rhône · Jura · Bugey";

/* Petit intitulé tricolore au-dessus des titres */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rouge">
      <span className="h-px w-7 bg-rouge" aria-hidden="true" />
      {children}
    </span>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rouge text-white shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default async function Home() {
  const images = await getGalerieImages();

  return (
    <>
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" aria-label="MaFanZone — accueil">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#concept" className="transition hover:text-marine">Le concept</a>
            <a href="#etapes" className="transition hover:text-marine">Comment ça marche</a>
            <a href="#realisations" className="transition hover:text-marine">Réalisations</a>
          </nav>

          <a
            href="#devis"
            className="rounded-full bg-rouge px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-rouge-dark"
          >
            Demander un devis
          </a>
        </div>
      </header>

      <main id="top">
        {/* ===== Hero ===== */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
          {/* Vidéo de fond locale, muette et en boucle — aucune commande de lecture visible */}
          <div className="absolute inset-0 overflow-hidden bg-marine">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Voiles pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-marine-dark/85 via-marine/65 to-marine/80" aria-hidden="true" />
          {/* Fondu vers le blanc de la section suivante — courbe adoucie multi-paliers */}
          <div
            className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,#ffffff_0%,rgba(255,255,255,0.92)_18%,rgba(255,255,255,0.7)_38%,rgba(255,255,255,0.4)_58%,rgba(255,255,255,0.16)_78%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />

          <Stagger className="relative mx-auto max-w-3xl px-5 py-28 text-center text-white" gap={0.14}>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                Écrans géants LED · Clé en main
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Faites vivre les grands matchs à vos supporters
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
                Nous installons un écran géant chez vous pour que votre
                association, votre club ou votre village vibre ensemble devant
                les plus belles rencontres.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#devis"
                  className="inline-flex items-center justify-center rounded-full bg-rouge px-8 py-4 text-base font-bold text-white shadow-lg shadow-rouge/30 transition hover:bg-rouge-dark"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#concept"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Découvrir
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-sm text-white/70">
                Gratuit, sans engagement — réponse rapide · {ZONE}
              </p>
            </StaggerItem>
          </Stagger>
        </section>

        {/* ===== Le constat ===== */}
        <section id="concept" className="bg-white px-5 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Kicker>Le constat</Kicker>
              <h2 className="mt-5 text-3xl font-bold text-marine sm:text-4xl">
                Et si vous les réunissiez&nbsp;?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Aujourd’hui, vos adhérents regardent les grands matchs chacun
                chez soi, devant leur écran. Pourtant, le sport, c’est d’abord
                une émotion qui se partage&nbsp;: les cris, les chants, la joie
                d’une victoire vécue côte à côte.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Une fan zone, c’est l’occasion de rassembler votre communauté,
                d’animer votre village et de faire vivre votre club autrement.
                C’est exactement ce que nous rendons simple.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-4 border-rouge/80" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5 sm:aspect-[5/4]">
                  <Image
                    src="/img/foule.jpeg"
                    alt="Foule de supporters réunis pour vivre un match ensemble"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== Comment ça marche ===== */}
        <section id="etapes" className="bg-creme px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <Kicker>Comment ça marche</Kicker>
              </div>
              <h2 className="mt-5 text-3xl font-bold text-marine sm:text-4xl">
                Trois étapes, et c’est tout
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Vous choisissez le match, on s’occupe de l’intégralité du reste.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-7 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Vous nous dites quel match",
                  text: "Indiquez-nous la rencontre, la date et le lieu de votre fan zone. On vérifie ensemble la faisabilité.",
                  icon: (
                    <>
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </>
                  ),
                },
                {
                  n: "02",
                  title: "On installe tout",
                  text: "Écran géant LED, sonorisation, montage et réglages : notre équipe s’occupe de l’installation de A à Z.",
                  icon: (
                    <>
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </>
                  ),
                },
                {
                  n: "03",
                  title: "Vous profitez",
                  text: "Vos supporters vibrent ensemble devant le match. On démonte tout une fois la fête terminée.",
                  icon: (
                    <>
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </>
                  ),
                },
              ].map((step) => (
                <StaggerItem key={step.n}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-marine text-white transition group-hover:bg-marine-light">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          {step.icon}
                        </svg>
                      </span>
                      <span className="font-display text-4xl font-extrabold text-slate-200">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-marine">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ===== Ce qu'on fournit ===== */}
        <section className="bg-white px-5 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-marine/10" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                  <Image
                    src="/img/ecran.jpeg"
                    alt="Écran géant LED installé pour un événement en plein air"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Kicker>Une prestation clé en main</Kicker>
                <h2 className="mt-5 text-3xl font-bold text-marine sm:text-4xl">
                  Vous n’avez rien à prévoir de technique
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  On apporte tout, on installe tout, on reste sur place. Vous
                  profitez du match.
                </p>
              </Reveal>

              <Stagger className="mt-8 space-y-5">
                {[
                  {
                    t: "Écran géant LED haute luminosité",
                    d: "Une image nette et éclatante, parfaitement visible même en plein jour.",
                  },
                  {
                    t: "Installation et démontage inclus",
                    d: "Montage, câblage, réglages puis démontage : tout est compris.",
                  },
                  {
                    t: "Sonorisation adaptée",
                    d: "Un son clair et puissant pour faire monter l’ambiance avec le public.",
                  },
                  {
                    t: "Un technicien sur place",
                    d: "Un professionnel présent pendant l’événement pour que tout se passe sans accroc.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.t}>
                    <div className="flex gap-4">
                      <Check />
                      <div>
                        <h3 className="font-bold text-marine">{item.t}</h3>
                        <p className="mt-1 text-slate-600">{item.d}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* ===== Galerie / Réalisations ===== */}
        {/* <section id="realisations" className="bg-marine px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <Kicker>Nos fan zones</Kicker>
              </div>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Des soirées qui rassemblent
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Des installations soignées, des supporters au rendez-vous.
              </p>
            </Reveal>

            {images.length > 0 ? (
              <Stagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3" gap={0.1}>
                {images.map((src, i) => (
                  <StaggerItem
                    key={src}
                    className={
                      i % 5 === 0
                        ? "col-span-2 md:col-span-2 md:row-span-2"
                        : ""
                    }
                  >
                    <div className="group relative h-full min-h-[10rem] overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <div className={i % 5 === 0 ? "relative aspect-[16/10] h-full w-full" : "relative aspect-[4/3] h-full w-full"}>
                        <Image
                          src={src}
                          alt={`Fan zone MaFanZone — réalisation ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-marine-dark/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            ) : (
              <p className="mt-12 text-center text-white/60">
                Les photos de nos événements arrivent très bientôt.
              </p>
            )}
          </div>
        </section> */}

        {/* ===== Options / Plus loin ===== */}
        <section className="bg-creme px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <Kicker>Aller plus loin</Kicker>
              </div>
              <h2 className="mt-5 text-3xl font-bold text-marine sm:text-4xl">
                Faites-en un vrai rendez-vous
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Au-delà de l’écran, on peut vous aider à remplir les gradins.
              </p>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Un site web dédié à votre event",
                  text: "Une page claire pour annoncer la fan zone, les horaires et les infos pratiques — et donner envie de venir.",
                  icon: (
                    <>
                      <rect width="18" height="14" x="3" y="4" rx="2" />
                      <path d="M3 9h18" />
                    </>
                  ),
                },
                {
                  title: "Affiches & communication",
                  text: "Création d’affiches et de supports de communication pour faire parler de votre événement dans tout le village.",
                  icon: (
                    <>
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </>
                  ),
                },
              ].map((opt) => (
                <StaggerItem key={opt.title}>
                  <div className="flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rouge/10 text-rouge">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {opt.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-marine">{opt.title}</h3>
                      <p className="mt-2 text-slate-600">{opt.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ===== Formulaire de contact ===== */}
        <section id="devis" className="relative overflow-hidden bg-marine-dark px-5 py-20 sm:py-28">
          <Image
            src="/img/together.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-marine-dark/80" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl">
            <Reveal className="text-center text-white">
              <div className="flex justify-center">
                <Kicker>Devis gratuit</Kicker>
              </div>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Parlons de votre fan zone
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Dites-nous tout sur votre projet. On revient vers vous
                rapidement avec une proposition claire et sans engagement.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-marine-dark px-5 pb-10 pt-14 text-white/75">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Location d’écrans géants LED pour fan zones, clubs de sport et
              comités des fêtes. Devis gratuit.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm underline underline-offset-4 transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm">Zone d’intervention&nbsp;: {ZONE}</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              Informations
            </p>
            <p className="mt-3 text-sm">Devis gratuit et sans engagement.</p>
            <a
              href="#devis"
              className="mt-3 inline-flex rounded-full bg-rouge px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rouge-dark"
            >
              Demander un devis
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-white/15 pt-6 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} MaFanZone — Tous droits réservés.
            Entreprise de location de matériel événementiel. Mentions légales et
            conditions disponibles sur demande.
          </p>
        </div>
      </footer>
    </>
  );
}
