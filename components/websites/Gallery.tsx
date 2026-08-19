import { GalleryGrid } from "./Gallerygride"

const images = [
  { id: 1, src: "/images/image1.jpg", alt: "image_1" },
  { id: 2, src: "/images/image2.jpg", alt: "image_2" },
  { id: 3, src: "/images/image3.jpg", alt: "image_3" },
  { id: 4, src: "/images/image4.jpg", alt: "image_4" },
  { id: 5, src: "/images/image5.jpg", alt: "image_5" },
  { id: 6, src: "/images/image6.jpg", alt: "image_6" },
  { id: 7, src: "/images/image7.jpg", alt: "image_7" },
  { id: 8, src: "/images/image8.jpg", alt: "image_8" },
  { id: 9, src: "/images/image9.jpg", alt: "image_9" },
  { id: 10, src: "/images/image10.jpg", alt: "image_10" },
  { id: 11, src: "/images/image11.jpg", alt: "image_11" },
  { id: 12, src: "/images/image12.jpeg", alt: "image_12" },
  { id: 13, src: "/images/image13.jpeg", alt: "image_13" },
  { id: 14, src: "/images/image14.jpeg", alt: "image_14" },
  { id: 15, src: "/images/image15.jpeg", alt: "image_15" },
  { id: 16, src: "/images/image16.jpeg", alt: "image_16" },
  { id: 17, src: "/images/image17.jpeg", alt: "image_17" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="w-full min-h-screen py-5">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="section_title">Gallery</h1>
          <p className="section_subtitle">
            Discover the exceptional results we've delivered to our clients. Explore how our top-tier services have
            transformed spaces and elevated experiences.
          </p>
        </div>

        <GalleryGrid images={images} />
      </div>
    </section>
  )
}