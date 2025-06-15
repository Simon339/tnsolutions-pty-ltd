export default function About () {
  return (
    <section id="about" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section_title">About Us</h1>
          <h2 className="section_subtitle">Our Mission & Vision</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-slate-300 leading-relaxed">
                  Magotlho TN Solutions (Pty) Ltd is a trusted provider of electrical services and quality supply
                  solutions. Established in 2021, we are dedicated to delivering exceptional service and building
                  long-term relationships with our clients.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                <p className="text-slate-300 leading-relaxed">
                  At Magotlho TN Solutions, we prioritize client satisfaction by providing reliable, high-quality
                  solutions tailored to meet your needs, all while maintaining a strong focus on integrity and
                  professional excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3+</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Years Experience</h4>
              <p className="text-slate-400">Serving clients since 2021</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Assured</h4>
              <p className="text-slate-400">Professional standards guaranteed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
              <p className="text-slate-400">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}