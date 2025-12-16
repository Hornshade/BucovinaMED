import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Users, Clock, Heart, Shield, Stethoscope } from "lucide-react"
import type { Metadata } from "next"
import { AmbulanceCarousel } from "@/components/ambulance-carousel"

export const metadata: Metadata = {
  title: "Despre Noi | Ambulanță Privată Bucovina Med Suceava - Echipă Medicală 24/7",
  description:
    "Bucovina Med este o ambulanță privată din Gura Humorului, Suceava, cu personal medical format din medici, paramedici certificați, asistenți și ambulanțier, oferind servicii de urgență 24/7 în România. Ambulanțe moderne echipate. Deservim Suceava, Gura Humorului și județul Suceava. Apelați +40 771 010 112",
  keywords: [
    "despre bucovina med",
    "ambulanta privata Suceava",
    "personal medical Gura Humorului",
    "paramedici certificati Suceava",
    "servicii medicale urgenta Bucovina",
    "transport medical profesionist",
    "ambulanta Gura Humorului",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro/despre-noi",
    title: "Despre Noi | Ambulanță Privată Bucovina Med Suceava",
    description:
      "Cunoașteți personalul medical Bucovina Med - ambulanță privată cu medici, paramedici certificați, asistenți și ambulanțier din Gura Humorului, Suceava, disponibili 24/7 pentru servicii medicale de urgență.",
    siteName: "Bucovina Med - Ambulanță Privată",
    images: [
      {
        url: "https://bucovina-med.ro/ambulance_3.jpeg",
        width: 1200,
        height: 630,
        alt: "Personalul medical Bucovina Med - Ambulanță privată Suceava",
      },
    ],
  },
  alternates: {
    canonical: "https://bucovina-med.ro/despre-noi",
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

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://bucovina-med.ro/#organization",
    name: "Ambulanța Bucovina Med",
    alternateName: "Bucovina Med",
    description:
      "Ambulanță privată cu personal medical format din medici, paramedici certificați, asistenți și ambulanțier din Gura Humorului, Suceava, oferind servicii de urgență și transport medical 24/7 în România",
    url: "https://bucovina-med.ro/despre-noi",
    telephone: "+40771010112",
    email: "bucovinamed@gmail.com",
    image: [
      "https://bucovina-med.ro/ambulance_1.jpeg",
      "https://bucovina-med.ro/ambulance_2.jpeg",
      "https://bucovina-med.ro/ambulance_3.jpeg",
    ],
    logo: "https://bucovina-med.ro/logo.png",
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
    sameAs: [
      "https://www.facebook.com/bucovina.med",
      "https://www.google.com/search?q=Bucovina+Med&stick=H4sIAAAAAAAA_-NgU1I1qDBKTbU0MTZINTNKTUlMtDS2MqgwNbFMsTRPsbAwSTI3SDI2W8TK41SanF-WmZeo4JuaAgDk2nt1OAAAAA&hl=ro",
    ],
    foundingDate: "2024",
    knowsAbout: [
      "Emergency Medical Services",
      "Patient Transport",
      "Medical Assistance",
      "Critical Care Transport",
      "Ambulance Services",
    ],
    medicalSpecialty: ["Emergency Medicine", "Emergency Medical Services", "Patient Transport"],
    priceRange: "$$",
    hasMap: "https://www.google.com/maps?q=47.5529,25.8973",
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
                  Despre Ambulanța Bucovina Med - Excelenţă în Servicii Medicale de Urgenţă
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Suntem dedicați furnizării de servicii medicale de urgență și transport medical excepționale, cu
                  profesionalism, compasiune și răspuns rapid pentru comunitatea noastră din România. Personalul nostru
                  medical format din medici, paramedici certificați, asistenți și ambulanțier lucrează neobosit pentru a
                  se asigura că fiecare pacient primește îngrijire promptă, profesională și plină de empatie în
                  momentele critice.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <AmbulanceCarousel />
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                  <h2 className="mb-6 text-3xl font-bold text-foreground">Misiunea Noastră în Servicii Medicale</h2>
                  <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                    <p>
                      La Ambulanța Bucovina Med, suntem profund angajați să oferim cel mai înalt standard de îngrijire
                      medicală de urgență și transport medical pentru comunitatea noastră. Personalul nostru de
                      paramedici certificați, asistenți medicali, medici și ambulanțieri lucrează cu dedicare și
                      profesionalism pentru a se asigura că fiecare pacient primește îngrijire promptă, eficientă și
                      plină de compasiune în momentele în care are cea mai mare nevoie de ajutor medical specializat.
                    </p>
                    <p>
                      Înțelegem că urgențele medicale pot fi situații stresante și anxioase atât pentru pacienți cât și
                      pentru familiile lor. De aceea, ne concentrăm nu doar pe aspectele tehnice și medicale ale
                      intervenției, ci și pe latura umană a îngrijirii. Fiecare membru al echipei noastre este instruit
                      să trateze pacienții cu demnitate, respect și înțelegere, oferind suport emoțional pe lângă
                      asistența medicală profesionistă.
                    </p>
                    <p>
                      Investim constant în echipamente medicale de ultimă generație și în formarea continuă a
                      personalului nostru pentru a rămâne la curent cu cele mai noi protocoale și tehnici din domeniul
                      medicinei de urgență. Ambulanțele noastre sunt echipate complet conform standardelor europene,
                      având la dispoziție toate resursele necesare pentru a face față oricărei situații medicale, de la
                      urgențe minore până la cazuri critice care necesită intervenție imediată și transport rapid către
                      unități medicale specializate.
                    </p>
                    <p>
                      Disponibilitatea noastră 24 de ore din 24, în fiecare zi a săptămânii, înseamnă că puteți conta pe
                      serviciile noastre oricând apare o urgență medicală. Menținem un timp de răspuns rapid prin
                      poziționarea strategică a vehiculelor și coordonarea eficientă a echipelor, asigurându-ne că
                      ajungem la pacienți în cel mai scurt timp posibil pentru a oferi asistența medicală necesară.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="mb-8 text-3xl font-bold text-foreground">
                    Ce Ne Diferențiază - Valori și Standarde de Excelență
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <Award className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                        Excelență Certificată și Acreditări
                      </h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Tot personalul nostru medical este complet certificat, acreditat și urmează programe riguroase
                        de pregătire continuă pentru a menține cele mai înalte standarde de îngrijire medicală de
                        urgență. Investim în dezvoltarea profesională constantă a echipei, participând la cursuri de
                        specializare, simulări de situații de urgență și actualizări regulate ale protocoalelor
                        medicale. Certificările noastre includ cursuri avansate de suport vital, management al traumei
                        și îngrijire specializată pentru diverse categorii de pacienți.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-6">
                      <Users className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                        Personal Medical Experimentat și Dedicat
                      </h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Medicii, paramedicii, asistenții medicali și ambulanțierii din personalul nostru aduc ani de
                        experiență vastă în servicii medicale de urgență, transport de îngrijire critică și asistență
                        medicală specializată. Fiecare membru al echipei a fost selectat cu atenție pentru competențele
                        sale profesionale, dar și pentru abilitățile de comunicare și empatie necesare în situații de
                        urgență. Lucrăm ca o echipă coerentă, coordonându-ne perfect pentru a oferi cea mai bună
                        îngrijire posibilă în orice situație medicală.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-6">
                      <Clock className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                        Disponibilitate Permanentă 24/7/365
                      </h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Operăm non-stop, 24 de ore din 24, 7 zile pe săptămână, 365 de zile pe an, inclusiv în sărbători
                        legale și weekenduri, asigurând că serviciile medicale de urgență și transportul medical sunt
                        întotdeauna disponibile când aveți nevoie. Menținem echipe de gardă permanent active și vehicule
                        pregătite pentru intervenție imediată. Timpul nostru mediu de răspuns este optimizat prin
                        coordonare eficientă și pozitionare strategică pentru acoperire maximă a zonei deservite.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-6">
                      <Heart className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                        Îngrijire Plină de Compasiune și Empatie
                      </h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Tratăm fiecare pacient cu demnitate maximă, respect profund și compasiune genuină, înțelegând pe
                        deplin stresul și anxietatea asociată cu urgențele medicale și situațiile critice. Abordarea
                        noastră centrată pe pacient presupune comunicare clară, suport emoțional constant și atenție la
                        toate nevoile individuale. Ne asigurăm că pacienții și familiile lor se simt în siguranță,
                        înțeleg procedurile medicale aplicate și primesc toate informațiile necesare pe tot parcursul
                        intervenției și transportului medical.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-6">
                      <Shield className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">Siguranță și Protocol Strict</h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Respectăm cele mai stricte protocoale de siguranță medicală și sanitară, utilizând echipament de
                        protecție corespunzător și urmând proceduri riguroase de igienizare și dezinfecție după fiecare
                        intervenție. Vehiculele noastre sunt menținute în condiții impecabile de curățenie și
                        funcționare, cu verificări tehnice regulate și întreținere preventivă. Documentăm riguros
                        fiecare caz pentru asigurarea continuității îngrijirii medicale și respectarea standardelor de
                        calitate.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-6">
                      <Stethoscope className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-3 text-xl font-semibold text-card-foreground">Echipament Medical Performant</h3>
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        Investim constant în echipamente medicale de ultimă generație: defibrilatoare automate,
                        monitoare de funcții vitale, ventilatoare portabile, sisteme de administrare oxigen și
                        medicamente esențiale pentru orice tip de urgență. Toate echipamentele sunt verificate și
                        calibrate regular pentru a asigura funcționare optimă. Dispunem de resurse pentru tratarea
                        traumelor, resuscitare cardiopulmonară avansată și stabilizarea pacienților critici pe durata
                        transportului.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">
                    De Ce Să Alegeți Ambulanța Bucovina Med pentru Nevoile Dumneavoastră Medicale?
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Ambulanța privată Bucovina Med reprezintă alegerea ideală pentru oricine caută servicii medicale
                      de urgență și transport medical la cele mai înalte standarde de calitate, siguranță și
                      profesionalism în România. Ne dedicăm în totalitate misiunii de a salva vieți, de a oferi
                      îngrijire medicală excepțională și de a asigura transportul sigur al pacienților în orice situație
                      medicală, de la urgențe acute la transporturi programate pentru investigații sau tratamente
                      specializate.
                    </p>

                    <h3 className="mt-6 text-xl font-semibold text-foreground">Avantajele Serviciilor Noastre:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Ambulanțe moderne de ultimă generație</strong> echipate complet cu sisteme avansate de
                          susținere a vieții, monitoare multiparametrice, echipament de resuscitare și toate
                          medicamentele necesare pentru intervenții de urgență complexe
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Timp de răspuns rapid optimizat</strong> - ajungem la pacienți în cel mai scurt timp
                          posibil prin coordonare eficientă, cunoaștere detaliată a zonei și poziționare strategică a
                          vehiculelor pentru acoperire maximă
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Comunicare directă constantă</strong> cu departamentele de urgență spitalicești,
                          asigurând pregătirea echipelor de primire și continuitatea îngrijirii medicale prin
                          transmiterea detaliată a informațiilor despre starea pacientului
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Personal multilingv profesionist</strong> capabil să comunice eficient în limba
                          română, engleză și alte limbi străine pentru a deservi optim comunitatea noastră diversă și
                          turiștii care pot avea nevoie de asistență medicală
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Transparență totală în prețuri</strong> și asistență completă pentru coordonarea cu
                          companiile de asigurări de sănătate, oferind informații clare despre costuri și facilitând
                          procesele administrative
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Acoperire geografică extinsă</strong> în toată România și servicii de transport
                          internațional pentru cazuri care necesită tratament în străinătate, cu coordonare completă a
                          logisticii și documentației necesare
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-primary">✓</span>
                        <span className="leading-relaxed">
                          <strong>Flexibilitate și adaptabilitate</strong> la nevoile specifice ale fiecărui pacient, cu
                          servicii personalizate pentru transport medical asistat, neasistat, între spitale sau pentru
                          investigații medicale complexe
                        </span>
                      </li>
                    </ul>

                    <p className="mt-6 leading-relaxed">
                      Alegând Ambulanța Bucovina Med, optați pentru o echipă dedicată care pune întotdeauna sănătatea și
                      bunăstarea pacientului pe primul loc, oferind servicii medicale de înaltă calitate într-un mediu
                      profesionist, sigur și plin de empatie. Contactați-ne cu încredere la numărul +40 771 010 112,
                      disponibil non-stop pentru orice urgență medicală sau nevoie de transport medical specializat.
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
