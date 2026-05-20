import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieSettingsLink } from "@/components/cookie-consent/cookie-settings-link"

export const metadata: Metadata = {
  title: "Politica de Cookies | Ambulanța Bucovina Med",
  description:
    "Politica de cookies a Ambulanței Bucovina Med: ce sunt cookie-urile, ce categorii folosim (necesare, analiză, marketing, funcționale), durata de păstrare și cum vă puteți gestiona preferințele.",
  keywords: [
    "politica cookies",
    "cookies Bucovina Med",
    "GDPR cookies",
    "consimțământ cookies",
    "setări cookies",
  ],
  alternates: {
    canonical: "https://bucovina-med.ro/politica-cookies",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro/politica-cookies",
    siteName: "Bucovina Med - Ambulanță Privată",
    title: "Politica de Cookies | Ambulanța Bucovina Med",
    description:
      "Informații despre cookie-urile folosite pe bucovina-med.ro și cum vă puteți gestiona preferințele.",
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

export default function PoliticaCookiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bucovina-med.ro/politica-cookies#webpage",
    url: "https://bucovina-med.ro/politica-cookies",
    name: "Politica de Cookies - Ambulanța Bucovina Med",
    description:
      "Politica de cookies a site-ului bucovina-med.ro, conform GDPR și ePrivacy.",
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
                  Politica de Cookies
                </h1>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Această pagină explică ce sunt cookie-urile, ce categorii folosim pe site-ul bucovina-med.ro și cum
                  vă puteți gestiona preferințele în orice moment.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <article className="prose-bm mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-foreground">
                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Ce sunt cookie-urile</h2>
                  <p className="text-muted-foreground">
                    Cookie-urile sunt fișiere mici de text stocate de browser pe dispozitivul dumneavoastră atunci când
                    vizitați un site web. Ele permit site-ului să rețină informații despre vizita dumneavoastră (cum ar
                    fi preferințele) pentru a îmbunătăți experiența și pentru a colecta statistici de utilizare.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Categoriile de cookie-uri folosite</h2>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Strict necesare</strong> — esențiale pentru funcționarea
                      site-ului (navigare, securitate). Nu pot fi dezactivate și nu necesită consimțământ.
                    </li>
                    <li>
                      <strong className="text-foreground">Analiză și statistici</strong> — folosim Google Analytics 4
                      prin Google Tag Manager pentru a înțelege cum este utilizat site-ul (pagini vizitate, surse de
                      trafic, timp petrecut). Aceste cookie-uri sunt activate doar cu consimțământul dumneavoastră.
                    </li>
                    <li>
                      <strong className="text-foreground">Marketing</strong> — folosite pentru a măsura eficiența
                      campaniilor publicitare și pentru afișarea de conținut relevant. Activate doar cu consimțământ.
                    </li>
                    <li>
                      <strong className="text-foreground">Funcționale</strong> — permit integrarea cu servicii externe
                      (Google Maps, rețele sociale) și salvarea preferințelor. Activate doar cu consimțământ.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Servicii terțe care pot seta cookie-uri</h2>
                  <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                    <li>Google Tag Manager (Google Ireland Limited)</li>
                    <li>Google Analytics 4 (Google Ireland Limited)</li>
                    <li>Google Maps (Google Ireland Limited) — la afișarea hărții</li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Toate aceste servicii sunt blocate implicit până când oferiți consimțământ explicit prin bannerul de
                    cookies. Folosim Google Consent Mode v2 pentru a respecta alegerile dumneavoastră.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Durata de păstrare</h2>
                  <p className="text-muted-foreground">
                    Preferința dumneavoastră de consimțământ este salvată în memoria locală a browser-ului
                    (localStorage) pe termen nelimitat, până când o modificați sau curățați datele browser-ului.
                    Cookie-urile Google Analytics au o durată de păstrare configurată conform setărilor implicite ale
                    Google (până la 14 luni).
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Cum vă gestionați preferințele</h2>
                  <p className="text-muted-foreground">
                    Vă puteți modifica oricând preferințele de cookie-uri folosind butonul de mai jos sau linkul
                    „Setări cookies” din subsolul site-ului. De asemenea, puteți șterge cookie-urile direct din
                    setările browser-ului.
                  </p>
                  <div className="mt-4">
                    <CookieSettingsLink className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      Deschide setările de cookies
                    </CookieSettingsLink>
                  </div>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">Mai multe informații</h2>
                  <p className="text-muted-foreground">
                    Pentru detalii despre modul în care prelucrăm datele dumneavoastră personale, consultați{" "}
                    <Link href="/politica-confidentialitate" className="font-medium text-primary hover:underline">
                      Politica de confidențialitate
                    </Link>
                    . Pentru întrebări ne puteți contacta la{" "}
                    <a href="mailto:bucovinamed@gmail.com" className="font-medium text-primary hover:underline">
                      bucovinamed@gmail.com
                    </a>
                    .
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
