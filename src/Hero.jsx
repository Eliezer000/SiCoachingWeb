import { useState, useEffect } from 'react'
import { Menu, X, Target, Users, Briefcase, Brain, ArrowRight, Instagram, Facebook, Linkedin, Sparkles, ArrowUpRight, CheckCircle2, Star, BarChart2, Zap, Award } from 'lucide-react'
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  const handleOpenContactForm = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setIsContactFormOpen(true)
  } 

  // Optimized animation variants
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  }

  const slideIn = {
    initial: { x: '100%' },
    animate: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: '100%' }
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
              className="md:hidden z-[60] relative"
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
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full transition-all duration-300 text-lg"
            >
              Agendar Consulta <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu - Updated positioning */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-[#e9e9e9] z-[55] md:hidden flex flex-col justify-center items-center"
              style={{ top: '0', height: '100vh' }} // Ensure full viewport height
            >
              <nav className="flex flex-col items-center gap-8">
                {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#f78d31] text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    variants={fadeIn}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  href="#agendar"
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full text-center text-xl w-48"
                  onClick={() => setIsMenuOpen(false)}
                  variants={fadeIn}
                >
                  Agendar Consulta
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-gradient-to-br from-[#f78d31]/10 via-transparent to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="flex-1 space-y-8 z-10"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-lg text-[#f78d31] mb-4"
                variants={fadeIn}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Con SiCoaching...
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Descubre tu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f78d31] to-[#ff6b6b]"> verdadero potencial</span>
              </h1>
              <p className="text-xl text-gray-600 md:pr-12 leading-relaxed">
                Coaching personalizado para impulsar tu desarrollo personal y profesional hacia nuevos horizontes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#agendar"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  Conoce más
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 relative w-full md:w-[180%] lg:w-[200%]"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] rounded-full filter blur-3xl opacity-20"></div>
              <img
                src="/Sicoaching66.png"
                alt="Coaching Illustration"
                className="w-full max-w-none md:max-w-[180%] lg:max-w-[200%] mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-24"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
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
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
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
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
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
      <section id="servicios" className="py-24 md:py-32">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
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

        {/* Personal Coaching Section */}
        <motion.div 
          className="w-full bg-[#f78d31] min-h-screen flex items-center relative overflow-hidden"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                variants={fadeIn}
              >
                <img 
                  src="/logo2.png" 
                  alt="SiCoaching Personal" 
                  className="w-48 mb-8"
                />
                <h3 className="text-4xl font-bold text-white mb-6">Coaching Personal</h3>
                <p className="text-white/90 text-xl leading-relaxed">
                  Descubre tu máximo potencial y alcanza tus metas personales con nuestro programa de coaching personalizado.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                variants={fadeIn}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Desarrollo Personal",
                      description: "Identifica y supera limitaciones para alcanzar tu máximo potencial.",
                      icon: <Target className="w-8 h-8 text-white" />
                    },
                    {
                      title: "Balance Vida-Trabajo",
                      description: "Encuentra el equilibrio perfecto entre tu vida personal y profesional.",
                      icon: <Users className="w-8 h-8 text-white" />
                    },
                    {
                      title: "Gestión Emocional",
                      description: "Desarrolla inteligencia emocional y mejora tus relaciones interpersonales.",
                      icon: <Brain className="w-8 h-8 text-white" />
                    },
                    {
                      title: "Objetivos Claros",
                      description: "Define y alcanza metas significativas en tu vida personal.",
                      icon: <CheckCircle2 className="w-8 h-8 text-white" />
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleOpenContactForm("Coaching Personal")}
                  className="inline-flex items-center px-8 py-4 bg-[#001731] text-white rounded-full text-lg transition-all"
                >
                  Comenzar mi transformación
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Digital Products Section */}
        <motion.div 
          className="w-full bg-[#001731] min-h-screen flex items-center relative overflow-hidden"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                variants={fadeIn}
              >
                <img 
                  src="/logo3.png" 
                  alt="SiCoaching Digital" 
                  className="w-48 mb-8"
                />
                <h3 className="text-4xl font-bold text-white mb-6">Productos Digitales</h3>
                <p className="text-white/90 text-xl leading-relaxed">
                  Accede a recursos y herramientas digitales diseñadas para potenciar tu desarrollo personal y profesional.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                variants={fadeIn}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Cursos Online",
                      description: "Programas especializados con contenido de alta calidad.",
                      icon: <BarChart2 className="w-8 h-8 text-[#f78d31]" />
                    },
                    {
                      title: "Recursos Descargables",
                      description: "Guías, plantillas y materiales para tu desarrollo.",
                      icon: <ArrowRight className="w-8 h-8 text-[#f78d31]" />
                    },
                    {
                      title: "Comunidad Virtual",
                      description: "Conecta con otros profesionales en crecimiento.",
                      icon: <Users className="w-8 h-8 text-[#f78d31]" />
                    },
                    {
                      title: "Webinars",
                      description: "Sesiones en vivo con expertos en desarrollo personal.",
                      icon: <Zap className="w-8 h-8 text-[#f78d31]" />
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-[#f78d31]/5 backdrop-blur-sm p-6 rounded-xl border border-[#f78d31]/20"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-[#f78d31] mb-3">{feature.title}</h4>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleOpenContactForm("Productos Digitales")}
                  className="inline-flex items-center px-8 py-4 bg-[#f78d31] text-white rounded-full text-lg transition-all"
                >
                  Explorar recursos
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Business Coaching Section */}
        <motion.div 
          className="w-full bg-[#e9e9e9] min-h-screen flex items-center relative overflow-hidden"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                variants={fadeIn}
              >
                <img 
                  src="/logo.png" 
                  alt="SiCoaching Empresarial" 
                  className="w-48 mb-8"
                />
                <h3 className="text-4xl font-bold text-[#001731] mb-6">Coaching Empresarial</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Transforma tu organización y desarrolla el potencial de tus equipos con nuestro programa empresarial.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                variants={fadeIn}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Liderazgo Efectivo",
                      description: "Desarrolla habilidades de liderazgo transformacional.",
                      icon: <Award className="w-8 h-8 text-[#001731]" />
                    },
                    {
                      title: "Cultura Organizacional",
                      description: "Construye una cultura empresarial sólida y positiva.",
                      icon: <Users className="w-8 h-8 text-[#001731]" />
                    },
                    {
                      title: "Gestión de Equipos",
                      description: "Mejora la comunicación y el rendimiento de tus equipos.",
                      icon: <Target className="w-8 h-8 text-[#001731]" />
                    },
                    {
                      title: "Productividad",
                      description: "Optimiza procesos y maximiza resultados empresariales.",
                      icon: <BarChart2 className="w-8 h-8 text-[#001731]" />
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-[#001731] mb-3">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleOpenContactForm("Coaching Empresarial")}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full text-lg transition-all"
                >
                  Transformar mi organización
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section id="contacto" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
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
                  className="relative w-16 h-16 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
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
