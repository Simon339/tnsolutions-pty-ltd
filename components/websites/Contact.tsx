import { ChevronRight, Facebook, MailCheck, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Us</span>

      <div className="contact_container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to Us</h3>

          <div className="contact_info">

            <div
              className="contact_card backdrop-blur-md"
            >
              <MailCheck className="text-center contact_card-icon" />

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">Info@magotlhotnsolutions.co.za{" "} </span>

              <a href="mailto:Info@magotlhotnsolutions.co.za" className="contact_button">Write me{" "} <ChevronRight className="contact_button-icon" /></a>
            </div>

            <div
              className="contact_card backdrop-blur-md"
            >
              <Phone className="contact_card-icon" />

              <h3 className="contact_card-title">Phone Call</h3>
              <span className="contact_card-data">(083) 558 5199</span>

              <a href="tel:0835585199" className="contact_button">Write me{" "} <ChevronRight className="contact_button-icon" /></a>

            </div>

            <div
              className="contact_card backdrop-blur-md"
            >
              <Facebook className="contact_card-icon" />

              <h3 className="contact_card-title">Facebook</h3>
              <span className="contact_card-data">Magotlho TN Solutions</span>

              <a href="https://www.facebook.com/profile.php?id=100086507600571" className="contact_button">Write me{" "} <ChevronRight className="contact_button-icon" /></a>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
