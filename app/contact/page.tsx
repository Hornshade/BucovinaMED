import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Ambulanță Bucovina Med Suceava | Urgențe +40 771 010 112 | Disponibil 24/7",
  description:
    "Contactați Ambulanța Bucovina Med pentru servicii medicale de urgență 24/7 în Suceava, Gura Humorului și România. Telefon urgențe: +40 771 010 112. Email: bucovinamed@gmail.com. Adresă: Bulevardul Bucovina nr. 35, Gura-Humorului. Răspuns rapid la urgențe medicale.",
  keywords: [
    "contact ambulanta Suceava",
    "urgente medicale Gura Humorului",
    "apel urgenta Suceava",
    "telefon ambulanta Bucovina",
    "ambulanta Gura Humorului contact",
    "servicii medicale urgenta Suceava",
    "contact bucovina med",
    "telefon urgente +40771010112",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro/contact",
    title: "Contact Ambulanță Bucovina Med Suceava | Urgențe +40 771 010 112",
    description:
      "Contactați Ambulanța Bucovina Med pentru urgențe medicale 24/7 în Suceava. Telefon: +40 771 010 112. Răspuns rapid și profesionist.",
    siteName: "Bucovina Med - Ambulanță Privată",
    images: [
      {
        url: "https://bucovina-med.ro/ambulance_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Ambulanța Bucovina Med Suceava",
      },
    ],
  },
  alternates: {
    canonical: "https://bucovina-med.ro/contact",
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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://bucovina-med.ro/contact#webpage",
    url: "https://bucovina-med.ro/contact",
    name: "Contact Ambulanța Bucovina Med",
    description: "Pagina de contact pentru Ambulanța Bucovina Med - servicii medicale de urgență 24/7",
    mainEntity: {
      "@type": "MedicalOrganization",
      "@id": "https://bucovina-med.ro/#organization",
      name: "Ambulanța Bucovina Med",
      telephone: "+40771010112",
      email: "bucovinamed@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bulevardul Bucovina, nr. 35",
        addressLocality: "Gura-Humorului",
        addressRegion: "Suceava",
        postalCode: "725300",
        addressCountry: "RO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "47.5529",
        longitude: "25.8973",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+40771010112",
        contactType: "Emergency",
        availableLanguage: ["Romanian", "English"],
        areaServed: "RO",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      sameAs: [
        "https://www.facebook.com/bucovina.med",
        "https://www.google.com/search?q=Bucovina+Med&stick=H4sIAAAAAAAA_-NgU1I1qDBKTbU0MTZINTNKTUlMtDS2MqgwNbFMsTRPsbAwSTI3SDI2W8TK41SanF-WmZeo4JuaAgDk2nt1OAAAAA&hl=ro",
      ],
      hasMap: "https://www.google.com/maps?q=47.5529,25.8973",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1">
          <section className="bg-primary/5 py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Contactați Ambulanța Bucovina Med - Disponibili 24/7 Pentru Urgențe
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Pentru urgențe medicale, apelați imediat linia noastră directă de urgență disponibilă non-stop. Pentru
                  întrebări generale, programări transport medical sau informații despre serviciile noastre, ne puteți
                  contacta prin oricare dintre canalele de comunicare de mai jos. Personalul nostru medical este
                  pregătit să răspundă rapid și profesionist la toate solicitările dumneavoastră medicale.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 rounded-lg bg-destructive/10 p-8 text-center">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Linie Directă de Urgență - Apelați Acum</h2>
                  <a
                    href="tel:+40771010112"
                    className="mb-4 block text-3xl font-bold text-destructive hover:underline cursor-pointer md:text-4xl"
                  >
                    +40 771 010 112
                  </a>
                  <p className="text-pretty text-lg text-muted-foreground">
                    Disponibil 24 de ore din 24, 7 zile pe săptămână pentru răspuns imediat la urgențe medicale.
                    Operatori medicali pregătiți să primească apelul dumneavoastră și să coordoneze intervenția rapidă.
                  </p>
                </div>

                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                  Modalități de Contact și Informații
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <Phone className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">Contact Telefonic</h3>
                    <a
                      href="tel:+40771010112"
                      className="mb-2 block text-lg text-muted-foreground hover:text-primary cursor-pointer"
                    >
                      Urgențe și Informații: +40 771 010 112
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Linie telefonică activă non-stop pentru urgențe medicale, programări transport și informații
                      despre serviciile noastre
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <Mail className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">Email</h3>
                    <a
                      href="mailto:bucovinamed@gmail.com"
                      className="mb-2 block text-lg text-muted-foreground hover:text-primary cursor-pointer"
                    >
                      bucovinamed@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Pentru întrebări non-urgente, solicitări de oferte, facturare sau orice alte informații despre
                      serviciile noastre medicale
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <MapPin className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">Adresa Sediului</h3>
                    <a
                      href="https://www.google.com/maps?q=47.5529,25.8973"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 block text-lg text-muted-foreground hover:text-primary cursor-pointer underline decoration-transparent hover:decoration-current transition-colors"
                    >
                      Bulevardul Bucovina, nr. 35
                      <br />
                      Gura-Humorului, județul Suceava
                      <br />
                      România
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Click pentru a deschide Google Maps și a obține indicații de direcție către sediul nostru
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <Clock className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">Program și Disponibilitate</h3>
                    <p className="mb-2 text-lg font-semibold text-muted-foreground">Servicii de Urgență: 24/7/365</p>
                    <p className="text-sm text-muted-foreground">
                      Disponibili permanent, inclusiv în weekend și sărbători legale, pentru orice urgență medicală sau
                      nevoie de transport medical specializat
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <svg className="mb-4 h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">Rețele Sociale - Facebook</h3>
                    <a
                      href="https://www.facebook.com/profile.php?id=61583619271429&locale=ro_RO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 block text-lg text-muted-foreground hover:text-primary cursor-pointer"
                    >
                      Vizitează-ne pe Facebook
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Urmăriți-ne pe Facebook pentru actualizări, informații utile despre sănătate și anunțuri
                      importante
                    </p>
                  </div>
                </div>

                <div className="mt-12 rounded-lg bg-primary/5 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">
                    Informații Importante Pentru Apeluri de Urgență
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Când sunați la numărul nostru de urgență <strong>+40 771 010 112</strong>, vă rugăm să aveți la
                      îndemână următoarele informații pentru a permite echipei noastre să vă asiste cât mai eficient:
                      adresa exactă a locației unde se află pacientul, natura urgență medicale (simptome, circumstanțe),
                      vârsta aproximativă a pacientului și orice informații medicale relevante cunoscute (alergii,
                      medicație curentă, condiții medicale preexistente).
                    </p>
                    <p className="leading-relaxed">
                      Operatorii noștri medicali sunt instruiți să evalueze rapid severitatea situației și să coordoneze
                      trimiterea celei mai apropiate ambulanțe disponibile. În timp ce ambulanța este în drum spre
                      dumneavoastră, operatorul poate oferi instrucțiuni pentru acordarea primului ajutor dacă este
                      cazul, ghidându-vă pas cu pas până la sosirea echipajului medical.
                    </p>
                    <p className="leading-relaxed">
                      Pentru programări de transport medical non-urgent, puteți suna la același număr sau ne puteți
                      scrie la adresa de email. Oferim flexibilitate în programare și ne adaptăm nevoilor dumneavoastră
                      pentru transporturi planificate către consultații medicale, investigații, tratamente sau
                      transferuri între spitale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
