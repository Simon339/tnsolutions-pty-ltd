"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const sliderImages = [
  { src: "/images/image11.png", alt: "Slider Image 1" },
  { src: "/images/image3.png", alt: "Slider Image 2" },
  { src: "/images/image2.png", alt: "Slider Image 3" },
]

export default function HomePage() {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Slider ref={sliderRef} {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Magotlho TN Solutions
          </span>
          <br />
          <span className="text-white">(PTY) LTD</span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 drop-shadow-lg text-slate-200 font-light">
          Supply, Installation and Maintenance
        </p>
        <p className="text-lg mb-12 text-slate-300 max-w-2xl mx-auto">
          Professional electrical services, security solutions, and quality supplies for residential and commercial
          properties.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <a href="#services">Our Services</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/80 focus:bg-white focus:outline-none transition-all duration-300 backdrop-blur-sm"
            onClick={() => sliderRef.current?.slickGoTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}