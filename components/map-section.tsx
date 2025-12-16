"use client"

export function MapSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Locația Noastră
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Oferim servicii în toată România
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.5!2d25.8973!3d47.5529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMzJzEwLjYiTiAyNcKwNTMnNTAuNCJF!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro&markers=color:red%7C47.5529,25.8973"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full md:h-[500px]"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 font-semibold text-card-foreground">Adresă</h3>
            <a
              href="https://www.google.com/maps?q=47.5529,25.8973"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary cursor-pointer underline decoration-transparent hover:decoration-current transition-colors"
            >
              Bulevardul Bucovina, nr. 35
              <br />
              Gura-Humorului, România
            </a>
          </div>

          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 font-semibold text-card-foreground">Linie de Urgență</h3>
            <a
              href="tel:+40771010112"
              className="block text-sm font-semibold text-destructive hover:underline cursor-pointer"
            >
              +40 771 010 112
            </a>
          </div>

          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 font-semibold text-card-foreground">Email</h3>
            <a
              href="mailto:bucovinamed@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary cursor-pointer"
            >
              bucovinamed@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
