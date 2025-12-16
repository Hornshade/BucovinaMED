"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/ambulance_1.jpeg",
    alt: "Ambulanță Bucovina Med - vedere frontală",
  },
  {
    src: "/ambulance_2.jpeg",
    alt: "Ambulanță Bucovina Med - vedere laterală",
  },
  {
    src: "/ambulance_3.jpeg",
    alt: "Ambulanță Bucovina Med - pe autostradă",
  },
  {
    src: "/ambulance_4.webp",
    alt: "Ambulanță Bucovina Med - vedere completă pe șosea",
  },
  {
    src: "/ambulance_5.webp",
    alt: "Personal medical Bucovina Med în acțiune - asistență pacient",
  },
  {
    src: "/ambulance_6.webp",
    alt: "Ambulanță Bucovina Med - detaliu branding și contact",
  },
]

export function AmbulanceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg">
      {/* Image container */}
      <div className="relative aspect-video w-full sm:aspect-[16/10] md:aspect-[16/9] bg-muted">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 cursor-pointer bg-background/80 backdrop-blur-sm hover:bg-background/90 sm:left-4 sm:h-10 sm:w-10"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Imaginea anterioară</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 cursor-pointer bg-background/80 backdrop-blur-sm hover:bg-background/90 sm:right-4 sm:h-10 sm:w-10"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Imaginea următoare</span>
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all sm:h-2.5 sm:w-2.5 ${
                index === currentIndex ? "w-6 bg-primary sm:w-8" : "bg-background/60 hover:bg-background/80"
              }`}
              aria-label={`Mergi la imaginea ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image counter - mobile only */}
      <div className="absolute right-2 top-2 z-10 rounded-md bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur-sm sm:hidden">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
