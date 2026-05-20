import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Ambulanța Bucovina Med",
  description:
    "Politica de confidențialitate a Ambulanței Bucovina Med: ce date personale colectăm, în ce scop, temeiul legal (GDPR), durata de păstrare și drepturile dumneavoastră ca persoană vizată.",
  keywords: [
    "politica confidentialitate",
    "GDPR Bucovina Med",
    "protectia datelor",
    "date personale",
    "drepturi GDPR",
  ],
  alternates: {
    canonical: "https://bucovina-med.ro/politica-confidentialitate",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro/politica-confidentialitate",
    siteName: "Bucovina Med - Ambulanță Privată",
    title: "Politica de Confidențialitate | Ambulanța Bucovina Med",
    description:
      "Cum prelucrăm datele dumneavoastră personale conform Regulamentului General privind Protecția Datelor (GDPR).",
    images: [
      {
        url: "https://bucovina-med.ro/logo.png",
        width: 1200,
        height: 630,
        alt: "Bucovina Med",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function PoliticaConfidentialitatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bucovina-med.ro/politica-confidentialitate#webpage",
    url: "https://bucovina-med.ro/politica-confidentialitate",
    name: "Politica de Confidențialitate - Ambulanța Bucovina Med",
    description:
      "Politica de confidențialitate și prelucrare a datelor personale, conform GDPR.",
    inLanguage: "ro-RO",
    isPartOf: { "@id": "https://bucovina-med.ro/#website" },
    about: { "@id": "https://bucovina-med.ro/#organization" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <section className="bg-primary/5 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Politica de Confidențialitate
                </h1>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Această politică explică ce date personale colectăm, cum le folosim și care sunt drepturile
                  dumneavoastră, conform Regulamentului UE 2016/679 (GDPR) și legislației române aplicabile.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-foreground">
                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Operatorul datelor</h2>
                  <p className="text-muted-foreground">
                    Operatorul datelor personale este <strong className="text-foreground">Bucovina Med SRL</strong>,
                    cu sediul în Bulevardul Bucovina nr. 35, Gura-Humorului, județul Suceava, România. Pentru orice
                    întrebare legată de prelucrarea datelor, ne puteți contacta la{" "}
                    <a href="mailto:bucovinamed@gmail.com" className="font-medium text-primary hover:underline">
                      bucovinamed@gmail.com
                    </a>{" "}
                    sau la telefon{" "}
                    <a href="tel:+40771010112" className="font-medium text-primary hover:underline">
                      +40 771 010 112
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Categorii de date prelucrate</h2>
                  <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Date de contact</strong> — nume, telefon, email, adresă —
                      furnizate voluntar prin telefon sau email pentru solicitarea serviciilor.
                    </li>
                    <li>
                      <strong className="text-foreground">Date privind serviciul medical</strong> — informații
                      relevante pentru transportul sau intervenția medicală (vârstă, simptome, condiții medicale).
                    </li>
                    <li>
                      <strong className="text-foreground">Date tehnice de utilizare</strong> — adresă IP (anonimizată),
                      tip browser, pagini vizitate, sursă trafic — prelucrate doar dacă acordați consimțământ pentru
                      cookie-urile de analiză.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Scopurile prelucrării și temeiul legal</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Furnizarea serviciilor medicale</strong> — temei: executarea
                      unui contract (art. 6 alin. 1 lit. b GDPR) și interes vital (art. 6 alin. 1 lit. d GDPR pentru
                      urgențe).
                    </li>
                    <li>
                      <strong className="text-foreground">Obligații legale</strong> — facturare, raportări medicale —
                      temei: obligație legală (art. 6 alin. 1 lit. c GDPR).
                    </li>
                    <li>
                      <strong className="text-foreground">Analiză și îmbunătățirea site-ului</strong> — temei:
                      consimțământ (art. 6 alin. 1 lit. a GDPR), pe care îl puteți retrage oricând din{" "}
                      <Link href="/politica-cookies" className="font-medium text-primary hover:underline">
                        setările de cookies
                      </Link>
                      .
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Destinatari și transferuri</h2>
                  <p className="text-muted-foreground">
                    Datele pot fi comunicate către: unități medicale partenere (când este necesar pentru transportul
                    pacientului), autorități publice (la solicitare legală), furnizori de servicii IT (Google Ireland
                    Limited pentru Analytics/Tag Manager — date pseudonimizate, doar cu consimțământ). Nu vindem
                    niciodată date personale către terți.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Durata de păstrare</h2>
                  <p className="text-muted-foreground">
                    Datele medicale și de facturare sunt păstrate conform termenelor legale (de regulă 10 ani pentru
                    documente contabile, conform legislației medicale aplicabile pentru fișa pacientului). Datele
                    tehnice/analitice sunt păstrate până la 14 luni (setarea implicită Google Analytics).
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Drepturile dumneavoastră</h2>
                  <p className="mb-2 text-muted-foreground">
                    Conform GDPR aveți dreptul de:
                  </p>
                  <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                    <li>Acces la datele dumneavoastră (art. 15)</li>
                    <li>Rectificare (art. 16)</li>
                    <li>Ștergere („dreptul de a fi uitat”, art. 17)</li>
                    <li>Restricționarea prelucrării (art. 18)</li>
                    <li>Portabilitatea datelor (art. 20)</li>
                    <li>Opoziție (art. 21)</li>
                    <li>Retragerea consimțământului în orice moment (art. 7 alin. 3)</li>
                    <li>
                      Depunerea unei plângeri la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
                      Caracter Personal (
                      <a
                        href="https://www.dataprotection.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        dataprotection.ro
                      </a>
                      )
                    </li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Pentru exercitarea drepturilor, ne contactați la{" "}
                    <a href="mailto:bucovinamed@gmail.com" className="font-medium text-primary hover:underline">
                      bucovinamed@gmail.com
                    </a>
                    . Răspundem în termen de maximum 30 de zile.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Securitatea datelor</h2>
                  <p className="text-muted-foreground">
                    Aplicăm măsuri tehnice și organizatorice adecvate pentru a proteja datele împotriva accesului
                    neautorizat, pierderii sau alterării: conexiune HTTPS, acces restricționat la sistemele interne,
                    instruirea personalului, contracte de prelucrare cu toți procesatorii.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Modificări ale acestei politici</h2>
                  <p className="text-muted-foreground">
                    Această politică poate fi actualizată periodic. Versiunea curentă este afișată mereu pe această
                    pagină. Vă recomandăm să o consultați la fiecare vizită.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
