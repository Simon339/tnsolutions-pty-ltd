import React from 'react'
import { GalleryGrid } from './Gallerygride'

const images = [
    { id: 1, src: "/image1.jpg", alt: "image_1" },
    { id: 2, src: "/image2.jpg", alt: "image_2" },
    { id: 3, src: "/image3.jpg", alt: "image_3" },
    { id: 4, src: "/image4.jpg", alt: "image_4" },
    { id: 5, src: "/image5.jpg", alt: "image_5" },
    { id: 6, src: "/image6.jpg", alt: "image_6" },
    { id: 7, src: "/image7.jpg", alt: "image_7" },
    { id: 8, src: "/image8.jpg", alt: "image_8" },
    { id: 9, src: "/image9.jpg", alt: "image_9" },
    { id: 10, src: "/image10.jpg", alt: "image_10" },
    { id: 11, src: "/image11.jpg", alt: "image_11" },
  ]

const Gallery = () => {
    return (
        <section id="gallery" className='w-full min-h-screen'>
            <div className="container mx-auto px-4 py-12 md:py-20 mb-7">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="section_title">Gallery</h1>
                    <h2 className="section_subtitle">Discover the exceptional results we&apos;ve delivered to our clients. Explore how our top-tier services have transformed spaces and elevated experiences.</h2>
                </div>

                <GalleryGrid images={images} />
            </div>
        </section>
    )
}

export default Gallery
