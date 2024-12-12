import React from 'react'
import { GalleryGrid } from './Gallerygride'

const images = [
    { id: 1, src: "https://picsum.photos/id/9/1000/600", alt: "Engineer Mock Image" },
    { id: 2, src: "https://picsum.photos/id/1015/1000/600", alt: "River" },
    { id: 3, src: "https://picsum.photos/id/1019/1000/600", alt: "Forest" },
    { id: 4, src: "https://picsum.photos/id/1016/1000/600", alt: "Waterfall" },
    { id: 5, src: "https://picsum.photos/id/1020/1000/600", alt: "Road" },
    { id: 6, src: "https://picsum.photos/id/1021/1000/600", alt: "Coast" },
    { id: 7, src: "https://picsum.photos/id/1022/1000/600", alt: "Canyon" },
    { id: 8, src: "https://picsum.photos/id/1023/1000/600", alt: "Lake" },
    { id: 9, src: "https://picsum.photos/id/1024/1000/600", alt: "Beach" },
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
