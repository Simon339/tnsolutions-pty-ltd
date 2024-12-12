import React from 'react'

const About = () => {
  return (
    <section id="about" className='w-full min-h-screen'>
      <div className="container mx-auto px-4 py-16 md:py-24 mb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="section_title">About Us</h1>
          <h2 className="section_subtitle">Our Mission &amp; Vision</h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Magotlho TN Solutions (Pty) Ltd is a trusted provider of electrical services
              and quality supply solutions. Established in 2021, we are dedicated to
              delivering exceptional service and building long-term relationships with our
              clients.
            </p>

            <p>
              At Magotlho TN Solutions, we prioritize client satisfaction by providing
              reliable, high-quality solutions tailored to meet your needs, all while
              maintaining a strong focus on integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
