import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/ambulance_1.jpeg"
          alt="Ambulance background"
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/75 to-background/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Disponibil 24/7
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Servicii Medicale de Urgență Profesionale
          </h1>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Servicii de ambulanță rapide, fiabile și pline de compasiune când aveți nevoie de ele. Personalul nostru
            medical format din medici, paramedici certificați, asistenți și ambulanțier este gata să răspundă la urgența
            dumneavoastră 24 de ore pe zi.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full cursor-pointer bg-destructive text-destructive-foreground hover:bg-destructive/90 sm:w-auto"
              asChild
            >
              <a href="tel:+40771010112">
                <Phone className="mr-2 h-5 w-5" />
                Apelează: +40 771 010 112
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-6 shadow-sm">
              <Clock className="h-8 w-8 flex-shrink-0 text-primary" />
              <h3 className="text-balance font-semibold text-card-foreground">Disponibilitate 24/7</h3>
              <p className="text-center text-pretty text-sm text-muted-foreground">Răspuns de urgență non-stop</p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-6 shadow-sm">
              <MapPin className="h-8 w-8 flex-shrink-0 text-primary" />
              <h3 className="text-balance font-semibold text-card-foreground">Răspuns Rapid</h3>
              <p className="text-center text-pretty text-sm text-muted-foreground">
                Timp mediu de răspuns sub 10 minute
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 flex-shrink-0 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="text-balance font-semibold text-card-foreground">Echipă Expertă</h3>
              <p className="text-center text-pretty text-sm text-muted-foreground">
                Personal medical certificat: medici, paramedici, asistenți
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
