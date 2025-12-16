import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Ambulance, Car, Building2, Users, Activity, FileText, LogIn, LogOut } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicii Transport Medical Suceava | Ambulanță Privată Bucovina Med | +40 771 010 112",
  description:
    "Servicii complete de transport medical în Suceava și România: transport asistat și neasistat, transport între spitale, CT+RMN, analize medicale, internări și externări. Disponibil 24/7 în Gura Humorului, Suceava. Apelați +40 771 010 112",
  keywords: [
    "transport medical Suceava",
    "ambulanta privata Gura Humorului",
    "transport pacienti Suceava",
    "transport asistat Romania",
    "transport spital Suceava",
    "transport international",
    "transport CT Suceava",
    "transport RMN",
    "transport analize medicale",
    "internari externari Suceava",
    "servicii medicale Bucovina",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro/servicii",
    title: "Servicii Transport Medical Suceava | Ambulanță Privată Bucovina Med",
    description:
      "Servicii complete de transport medical în Suceava și România. Transport asistat și neasistat, transport între spitale. Disponibil 24/7. Apelați +40 771 010 112",
    siteName: "Bucovina Med - Ambulanță Privată",
    images: [
      {
        url: "https://bucovina-med.ro/ambulance_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Servicii transport medical Bucovina Med Suceava",
      },
    ],
  },
  alternates: {
    canonical: "https://bucovina-med.ro/servicii",
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

export default function ServicesPage() {
  const services = [
    {
      icon: Ambulance,
      title: "Transport asistat intern și internațional",
      description:
        "Oferim servicii profesionale de transport medical asistat pentru pacienți în România și peste hotare, cu personal medical specializat format din medici, paramedici certificați, asistenți și ambulanțier disponibili 24 de ore din 24, 7 zile pe săptămână. Ambulanțele noastre sunt echipate cu aparatură medicală de ultimă generație pentru monitorizarea constantă a stării pacientului pe tot parcursul transportului. Personalul nostru medical certificat asigură intervenție rapidă și îngrijire specializată adaptată nevoilor fiecărui pacient.",
    },
    {
      icon: Car,
      title: "Transport neasistat intern și internațional",
      description:
        "Servicii de transport confortabil și sigur pentru pacienți cu afecțiuni stabile care nu necesită supraveghere medicală intensivă, atât pe teritoriul României cât și internațional. Oferim condiții optime de călătorie, cu vehicule moderne și climatizate, șoferi experimentați și respect total pentru dignitatea și confortul pacientului. Transportul neasistat este ideal pentru pacienți care necesită deplasare între locații medicale sau spre domiciliu după externare.",
    },
    {
      icon: Building2,
      title: "Transport între spitale",
      description:
        "Asigurăm transfer rapid, sigur și eficient al pacienților între unități medicale, cu monitorizare medicală continuă și echipament performant. Coordonăm în detaliu cu ambele instituții medicale pentru o tranziție fără probleme, asigurând continuitatea îngrijirii medicale. Dispunem de protocoale stricte de transfer care garantează siguranța pacientului și transmiterea corectă a informațiilor medicale între spitale.",
    },
    {
      icon: Users,
      title: "Transport cămine bătrâni",
      description:
        "Servicii specializate de transport pentru rezidenții căminelor de bătrâni, cu atenție deosebită acordată nevoilor specifice ale vârstnicilor și grijă personalizată pe tot parcursul deplasării. Înțelegem importanța unui tratament delicat și respectuos pentru persoanele în vârstă. Personalul nostru este instruit special pentru a oferi confort maxim și asistență adaptată limitărilor de mobilitate ale pasagerilor vârstnici.",
    },
    {
      icon: Activity,
      title: "Transport CT+RMN",
      description:
        "Transport dedicat și specializat pentru pacienți care necesită investigații CT sau RMN, asigurând confort maxim, siguranță deplină și respectarea protocoalelor medicale pe tot parcursul deplasării către și de la unitatea medicală. Coordonăm programările cu centrele de imagistică medicală și ne asigurăm că pacientul ajunge la timp pentru investigații. Oferim asistență pentru mobilizare și pregătire conform cerințelor specifice fiecărei investigații.",
    },
    {
      icon: FileText,
      title: "Transport analize medicale",
      description:
        "Servicii rapide și profesionale de transport pentru probe biologice și analize medicale, respectând cele mai stricte standarde de siguranță, condiții optime de temperatură și lanț de custodie pentru a garanta integritatea probelor. Dispunem de containere specializate pentru transportul probelor sensibile și urmăm protocoale riguroase pentru livrarea în timp util. Acreditările noastre asigură conformitatea cu reglementările în domeniu.",
    },
    {
      icon: LogIn,
      title: "Internări",
      description:
        "Asistență completă și personalizată pentru internarea pacienților în unități medicale, inclusiv coordonare detaliată cu spitalul pentru verificarea disponibilității paturi, pregătirea documentației necesare și transport adaptat nevoilor specifice ale fiecărui pacient. Personalul nostru facilitează tot procesul de internare, comunicând eficient cu personalul medical și familia pacientului. Oferim suport logistic complet pentru a reduce stresul asociat internării.",
    },
    {
      icon: LogOut,
      title: "Externări",
      description:
        "Servicii profesionale de transport medical la externare din spital sau alte unități medicale, cu îngrijire specializată și siguranță maximă pe tot parcursul călătoriei, asigurând confortul deplin al pacientului până la ajungerea în siguranță la destinația finală. Coordonăm cu echipa medicală pentru transfer sigur și continuarea îngrijirii la domiciliu dacă este necesar. Oferim instrucțiuni clare familiei și asistență pentru instalarea pacientului în condiții optime.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://bucovina-med.ro/#organization",
    name: "Ambulanța Bucovina Med",
    url: "https://bucovina-med.ro/servicii",
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
    areaServed: [
      { "@type": "City", name: "Suceava" },
      { "@type": "City", name: "Gura Humorului" },
      { "@type": "City", name: "Șcheia" },
      { "@type": "City", name: "Mereni" },
      { "@type": "City", name: "Salcea" },
      { "@type": "City", name: "Huțani" },
      { "@type": "City", name: "Plopeni" },
      { "@type": "City", name: "Fetești" },
      { "@type": "City", name: "Uncești" },
      { "@type": "City", name: "Adâncata" },
      { "@type": "City", name: "Tișăuți" },
      { "@type": "City", name: "Pătrăuți" },
      { "@type": "City", name: "Trei Movile" },
      { "@type": "City", name: "Părhăuți" },
      { "@type": "City", name: "Luncușoara" },
      { "@type": "City", name: "Sfântu Ilie" },
      { "@type": "City", name: "Dărmănești" },
      { "@type": "AdministrativeArea", name: "Județul Suceava" },
      { "@type": "Country", name: "România" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii Transport Medical și Ambulanță",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@id": "https://bucovina-med.ro/#organization",
          },
          areaServed: { "@type": "Country", name: "România" },
          availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: {
              "@type": "ContactPoint",
              telephone: "+40771010112",
              contactType: "Emergency",
              availableLanguage: ["Romanian", "English"],
            },
          },
        },
        availability: "https://schema.org/InStock",
        position: index + 1,
      })),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/bucovina.med",
      "https://www.google.com/search?q=Bucovina+Med&stick=H4sIAAAAAAAA_-NgU1I1qDBKTbU0MTZINTNKTUlMtDS2MqgwNbFMsTRPsbAwSTI3SDI2W8TK41SanF-WmZeo4JuaAgDk2nt1OAAAAA&hl=ro",
    ],
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
                  Servicii Complete de Transport Medical și Ambulanță Privată
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Bucovina Med oferă servicii medicale profesionale de transport și ambulanță privată, concepute pentru
                  a oferi cel mai înalt nivel de îngrijire și siguranță când aveți cea mai mare nevoie. Cu o echipă
                  medicală specializată și ambulanțe moderne dotate cu echipament de ultimă generație, asigurăm
                  intervenție rapidă și transport sigur pentru orice situație medicală. Suntem disponibili 24 de ore din
                  24, 7 zile pe săptămână, pentru a răspunde urgent nevoilor dumneavoastră de transport medical în
                  România și internațional.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                Gama Completă de Servicii Medicale
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {service.icon && <service.icon className="mb-4 h-12 w-12 flex-shrink-0 text-primary" />}
                    <h3 className="mb-3 text-balance text-xl font-semibold text-card-foreground">{service.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-16 max-w-4xl">
                <div className="rounded-lg bg-primary/5 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">De Ce Să Alegeți Serviciile Bucovina Med?</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Ambulanța privată Bucovina Med se distinge prin profesionalism, rapiditate și dedicare față de
                      pacienți. Oferim servicii de transport medical adaptate fiecărei situații, de la urgențe medicale
                      acute până la transporturi programate pentru investigații sau tratamente. Personalul nostru
                      medical format din medici, paramedici certificați, asistenți și ambulanțier are experiență vastă
                      în medicina de urgență și transport medical specializat.
                    </p>
                    <p className="leading-relaxed">
                      Toate ambulanțele noastre sunt echipate conform standardelor europene, cu aparatură medicală
                      performantă pentru monitorizare continuă, dispozitive de resuscitare și medicamente esențiale
                      pentru orice tip de intervenție. Menținem flota de vehicule în stare impecabilă și efectuăm
                      verificări tehnice regulate pentru a garanta siguranța maximă a pacienților pe durata
                      transportului.
                    </p>
                    <p className="leading-relaxed">
                      Înțelegem că fiecare situație medicală este unică și necesită o abordare personalizată. De aceea,
                      echipa noastră evaluează cu atenție nevoile fiecărui pacient și adaptează serviciile pentru a
                      oferi cea mai bună îngrijire posibilă. Comunicăm constant cu familiile pacienților și cu
                      personalul medical din spitale pentru a asigura continuitatea tratamentului și confortul
                      pacientului.
                    </p>
                    <p className="leading-relaxed">
                      Disponibilitatea noastră 24/7 înseamnă că puteți conta pe noi oricând aveți nevoie de transport
                      medical, indiferent de oră sau zi din săptămână. Timpul de răspuns rapid și coordonarea eficientă
                      ne permit să ajungem la pacienți în cel mai scurt timp posibil, asigurând intervențiile necesare
                      și transportul în condiții optime de siguranță.
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
