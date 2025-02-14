import React from 'react'
import { GalleryGrid } from './Gallerygride'

const images = [
    { id: 1, src: "/project image/image1.jpg", alt: "Engineer Mock Image" },
    { id: 2, src: "/project image/image2.jpg", alt: "River" },
    { id: 3, src: "/project image/image3.jpg", alt: "Forest" },
    { id: 4, src: "/project image/image4.jpg", alt: "Waterfall" },
    { id: 5, src: "/project image/image5.jpg", alt: "Road" },
    { id: 6, src: "/project image/image6.jpg", alt: "Coast" },
    { id: 7, src: "/project image/image7.jpg", alt: "Canyon" },
    { id: 8, src: "/project image/image8.jpg", alt: "Lake" },
    { id: 9, src: "/project image/image9.jpg", alt: "Beach" },
    { id: 10, src: "/project image/image10.jpg", alt: "Beach" },
    { id: 11, src: "/project image/image11.jpg", alt: "Beach" },
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
