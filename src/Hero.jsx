import { useState, useEffect } from 'react'
import { Menu, X, Target, Users, Briefcase, Brain, ArrowRight, Instagram, Facebook, Linkedin, Sparkles, ArrowUpRight, CheckCircle2, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactFormPopup from './ContactFormPopup'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleOpenContactForm = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setIsContactFormOpen(true)
  }

  // Enhanced animation variants
  const slideIn = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 }
  }

  const fadeUpWithScale = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#e9e9e9] overflow-hidden font-poppins">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 bg-[#e9e9e9]/90 backdrop-blur-md z-50 transition-all duration-300 border-t-2 border-[#f78d31] ${isScrolled ? 'h-20' : 'h-32'}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/logo.png" 
                alt="SiCoaching Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`} 
              />
              <div className={`ml-4 transition-all duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-gray-700 font-semibold">Transformando</p>
                <p className="text-[#f78d31] text-sm">vidas y organizaciones</p>
              </div>
            </motion.div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden z-[60] relative" // Increased z-index
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-8 w-8 text-[#f78d31]" /> : <Menu className="h-8 w-8 text-[#f78d31]" />}
              </motion.div>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#f78d31] relative group text-lg"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f78d31] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <a
              href="#agendar"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full hover:shadow-lg transition-all duration-300 text-lg"
            >
              Agendar Consulta <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Fixed Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="initial"
              variants={slideIn}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-[#e9e9e9] z-[55] md:hidden flex flex-col justify-center items-center"
              style={{ position: 'fixed', height: '100vh' }}
            >
              <motion.nav 
                className="flex flex-col items-center gap-8"
                variants={staggerChildren}
              >
                {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#f78d31] text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    variants={fadeUpWithScale}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  href="#agendar"
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full text-center text-xl w-48"
                  onClick={() => setIsMenuOpen(false)}
                  variants={fadeUpWithScale}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Consulta
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Enhanced Hero Section with larger image */}
      <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#f78d31]/10 via-transparent to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="flex-1 space-y-8 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-lg text-[#f78d31] mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Con SiCoaching...
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Descubre tu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f78d31] to-[#ff6b6b]"> verdadero potencial</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 md:pr-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Coaching personalizado para impulsar tu desarrollo personal y profesional hacia nuevos horizontes.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a
                  href="#agendar"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full hover:shadow-lg transition-all duration-300 text-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce más
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex-1 relative w-full md:w-[180%] lg:w-[200%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-full filter blur-3xl opacity-20"></div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/Sicoaching66.png"
                  alt="Coaching Illustration"
                  className="w-full max-w-none md:max-w-[180%] lg:max-w-[200%] mx-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f78d31]/10 text-[#f78d31] mb-6 text-lg">
              <Users className="h-5 w-5 mr-2" />
              Sobre Nosotros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Transformando vidas a través del coaching
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Con más de una década de experiencia, nos dedicamos a impulsar el crecimiento personal y profesional de nuestros clientes.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
            {[
              {
                title: "Nuestra Misión",
                description: "Impulsar el desarrollo de personas y organizaciones mediante metodologías innovadoras y acompañamiento personalizado.",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Nuestra Visión",
                description: "Ser referentes en la transformación personal y organizacional a través del coaching profesional de alto impacto.",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "Nuestros Valores",
                description: "Compromiso, excelencia, integridad y empatía en cada paso del proceso de transformación.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-full flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative w-full lg:w-auto order-2 lg:order-1">
              <img
                src="/Sicoaching2.png"
                alt="Equipo de Coaching"
                className="rounded-2xl shadow-2xl w-full lg:max-w-[120%]"
              />
              <div className="absolute -right-4 lg:-right-8 top-1/4 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f78d31]/10 rounded-full flex items-center justify-center text-[#f78d31]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">100+</h4>
                    <p className="text-gray-600">Clientes Satisfechos</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 lg:-left-8 bottom-1/4 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b6b]/10 rounded-full flex items-center justify-center text-[#ff6b6b]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">10 años</h4>
                    <p className="text-gray-600">de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="flex-1 space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h3>
              {[
                {
                  title: "Experiencia Comprobada",
                  description: "Más de una década transformando vidas con  resultados medibles y sostenibles.",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: "Metodología Única",
                  description: "Enfoque personalizado adaptado a las necesidades específicas de cada cliente.",
                  icon: <Brain className="w-6 h-6" />
                },
                {
                  title: "Compromiso Total",
                  description: "Acompañamiento continuo durante todo el proceso de transformación.",
                  icon: <CheckCircle2 className="w-6 h-6" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-full flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 md:py-40 bg-[#f8f9fc]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f78d31]/10 text-[#f78d31] mb-6 text-lg">
              <Briefcase className="h-5 w-5 mr-2" />
              Nuestros Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Soluciones de coaching a tu medida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios de coaching diseñados para potenciar tu crecimiento personal y profesional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Coaching Ejecutivo",
                description: "Desarrollo de liderazgo y habilidades directivas para profesionales.",
                features: ["Liderazgo efectivo", "Toma de decisiones", "Gestión del tiempo"],
                icon: <Briefcase className="w-6 h-6" />
              },
              {
                title: "Coaching Personal",
                description: "Acompañamiento para alcanzar metas y desarrollo personal.",
                features: ["Objetivos claros", "Balance vida-trabajo", "Autoconocimiento"],
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Coaching Organizacional",
                description: "Transformación de equipos y cultura organizacional.",
                features: ["Trabajo en equipo", "Comunicación efectiva", "Cultura empresarial"],
                icon: <Brain className="w-6 h-6" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#f78d31] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOpenContactForm(service.title)}
                  className="inline-flex items-center text-white bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] px-6 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="contacto" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f78d31]/10 text-[#f78d31] mb-4 text-lg">
              <Sparkles className="h-5 w-5 mr-2" />
              Conecta con Nosotros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Síguenos en Redes</h2>
            <p className="text-xl text-gray-600 mb-12">
              Mantente al día con nuestros últimos consejos, eventos y novedades
            </p>
            <div className="flex justify-center gap-8">
              {[
                { icon: <Instagram className="w-8 h-8" />, label: "Instagram" },
                { icon: <Facebook className="w-8 h-8" />, label: "Facebook" },
                { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e9e9e9] py-16 border-b-2 border-[#f78d31]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/logo.png" alt="SiCoaching Logo" className="h-20 mx-auto mb-8" />
            <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
              Transformando vidas y organizaciones a través del coaching profesional
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>
            <p className="text-gray-500">© {new Date().getFullYear()} SiCoaching. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  )
}