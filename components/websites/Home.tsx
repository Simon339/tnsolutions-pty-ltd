'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from 'react'
import Image from 'next/image'
import { sliderImages } from "@/data"
import { Button } from "@/components/ui/button"

const HomePage = () => {
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
      cssEase: 'linear',
      arrows: false,
    }
  
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Slider ref={sliderRef} {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative h-screen">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
            Magotlho TN Solutions (PTY) LTD
          </h1>
          <p className="text-xl sm:text-2xl mb-8 drop-shadow-md">
          Supply, Installation and Maintenance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <a href="#services">Our Services</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white focus:bg-white focus:outline-none"
              onClick={() => sliderRef.current?.slickGoTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    )
  }
  
  export default HomePage
