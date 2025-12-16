import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ambulance, Car, Building2, Users, Activity, FileText, LogIn, LogOut } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Ambulance,
      title: "Transport asistat intern și internațional",
      description: "Transport medical asistat pentru pacienți în România și peste hotare cu echipă medicală.",
    },
    {
      icon: Car,
      title: "Transport neasistat intern și internațional",
      description: "Transport confortabil pentru pacienți stabili, fără supraveghere medicală intensivă.",
    },
    {
      icon: Building2,
      title: "Transport între spitale",
      description: "Transfer sigur al pacienților între unități medicale cu monitorizare continuă.",
    },
    {
      icon: Users,
      title: "Transport cămine bătrâni",
      description: "Servicii specializate de transport pentru rezidenții căminelor de bătrâni.",
    },
    {
      icon: Activity,
      title: "Transport CT+RMN",
      description: "Transport dedicat pentru pacienți care necesită investigații CT sau RMN.",
    },
    {
      icon: FileText,
      title: "Transport analize medicale",
      description: "Transport rapid și sigur pentru probe biologice și analize medicale.",
    },
    {
      icon: LogIn,
      title: "Internări",
      description: "Asistență completă pentru internarea pacienților în unități medicale.",
    },
    {
      icon: LogOut,
      title: "Externări",
      description: "Servicii de transport la externare cu îngrijire și siguranță maximă.",
    },
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Serviciile Noastre
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Servicii medicale de transport complete, concepute pentru a oferi cel mai înalt nivel de îngrijire
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-balance text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
