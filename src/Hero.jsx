'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Target, Users, Briefcase, Brain, ArrowRight, Instagram, Linkedin, Mail, Sparkles, ArrowUpRight, CheckCircle2, Star, BarChart2, Zap, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactFormPopup from './ContactFormPopup'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  const handleOpenContactForm = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setIsContactFormOpen(true)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#e9e9e9] overflow-hidden font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#e9e9e9]/90 backdrop-blur-md z-50 h-32 border-t-2 border-[#f78d31]">
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center justify-between h-full">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/logoo.png" 
                alt="SiCoaching Logo" 
                className="h-80 mt-16"
              />
            </motion.div>
            
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

            <div className="flex items-center">
              <a
                href="#agendar"
                className="hidden md:inline-flex items-center px-6 py-3 bg-[#f78d31] text-white rounded-full transition-all duration-300 text-lg"
              >
                Agendar Consulta <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden z-50 relative p-2 ml-4"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-8 w-8 text-[#f78d31]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-8 w-8 text-[#f78d31]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-full bg-[#e9e9e9] z-40 flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-medium text-gray-800 hover:text-[#f78d31] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#agendar"
                  className="mt-4 px-8 py-3 bg-[#f78d31] text-white rounded-full text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar Consulta
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-40 pb-20 md:pb-32 overflow-hidden">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Descubre tu
                <span className="text-[#f78d31]"> verdadero potencial</span>
              </h1>
              <p className="text-xl text-gray-600 md:pr-12 leading-relaxed">
                Coaching personalizado para impulsar tu desarrollo personal y profesional hacia nuevos horizontes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="#agendar"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#f78d31] text-white rounded-full transition-all duration-300 text-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full transition-all duration-300 text-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce más
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 relative w-full md:w-[180%] lg:w-[200%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[#f78d31] rounded-full filter blur-3xl opacity-20"></div>
              <img
                src="/meeting.jpg"
                alt="Coaching Session"
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
          className="max-w-3xl mx-auto text-center mb-16"
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

        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/meeting.jpg"
              alt="Equipo de SiCoaching"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -right-4 -bottom-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f78d31]/10 rounded-full flex items-center justify-center text-[#f78d31]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">10+</h4>
                  <p className="text-gray-600">Años de experiencia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                En SiCoaching, nuestra misión es empoderar a individuos y organizaciones para que alcancen su máximo potencial. 
                Nos dedicamos a proporcionar herramientas de coaching de alta calidad y un acompañamiento personalizado que 
                inspire el crecimiento personal y profesional, fomentando el desarrollo de líderes conscientes y equipos altamente efectivos.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Aspiramos a ser reconocidos como líderes innovadores en el campo del coaching, creando un impacto positivo y duradero 
                en la vida de las personas y en la cultura de las organizaciones. Visualizamos un mundo donde cada individuo tiene 
                la oportunidad de descubrir y maximizar sus talentos, contribuyendo así a una sociedad más consciente y próspera.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {[
            {
              name: "María Cecilia Ortiz",
              role: "Master Coach Ontológico Profesional",
              image: "/maria-cecilia-ortiz.jpg",
              qualifications: [
                "Master Coach Ontológico Profesional - Asociación Argentina de Coaching Ontológico Profesional.",
                "Formación en Gestión de Proyectos con Impacto Social - Banco Interamericano de Desarrollo.",
                "Focusing Trainer - Empowerser.com",
                "Formación en Liderazgo Sistémico HS. - Ángel Lope + Instituto de Transformación y Coaching de Rosario.",
                "Coordinadora y docente en Formaciones de Liderazgo y Coaching, del Instituto de Transformación y Coaching de Rosario.",
                "Coordinadora y docente en Postítulo Coaching en Organizaciones del Instituto de Transformación y Coaching de Rosario.",
                "14 años de experiencia en procesos de Coaching Personal y Organizacional.",
                "Experiencia internacional en conducción de equipos y logística de eventos en la industria cinematográfica - Brasil."
              ]
            },
            {
              name: "Daniel Butikofer",
              role: "Coach Ontológico Profesional",
              image: "/daniel-butikofer.jpg",
              qualifications: [
                "Coach Ontológico Profesional - Asociación Argentina de Coaching Ontológico Profesional.",
                "Postítulo Coaching en Organizaciones - Instituto de Transformación y Coaching de Rosario.",
                "Contador Público - Mat. Prof. CPCEPSFe II Nro. 13.113.",
                "Posgrado en Especialización en Costos y Gestión Empresarial.",
                "Actual Administrador General del Hospital General San Martin de Firmat.",
                "Titular de Estudio Butikofer - Ciencias Económicas.",
                "20 años asesorando empresas en áreas de Impuestos, Laboral y Societario y Administración Contable.",
                "Especializado en coaching de equipos y coaching ejecutivo.",
                "Guardavidas profesional."
              ]
            }
          ].map((coach, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-[#f78d31]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img src={coach.image} alt={coach.name} className="w-24 h-24 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{coach.name}</h3>
                  <p className="text-[#f78d31] font-semibold">{coach.role}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {coach.qualifications.map((qualification, i) => (
                  <li key={i}>{qualification}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">¿Por qué elegirnos?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiencia Comprobada",
                description: "Más de una década transformando vidas con resultados medibles y sostenibles.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Metodología Única",
                description: "Enfoque personalizado adaptado a las necesidades específicas de cada cliente.",
                icon: <Brain className="w-6 h-6" />
              },
              {
                title: "Compromiso Total",
                description: "Nuestro compromiso es el éxito y la satisfacción de cada uno de nuestros clientes.",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#f78d31] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 md:py-32">
        <motion.div 
          className="text-center mb-16"
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

        {/* Personal Coaching Section */}
        <motion.div 
          className="w-full bg-[#f78d31] min-h-screen flex items-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo2.png" 
                  alt="SiCoaching Personal" 
                  className="w-60 mb-4"
                />
                <h3 className="text-4xl font-bold text-white mb-6">Coaching Personal</h3>
                <p className="text-white/90 text-xl leading-relaxed">
                  Descubre tu máximo potencial y alcanza tus metas personales con nuestro programa de coaching personalizado.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
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
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                      <p className="text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  onClick={() => handleOpenContactForm("Coaching Personal")}
                  className="inline-flex items-center px-8 py-4 bg-[#001731] text-white rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comenzar mi transformación
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Digital Products Section */}
        <motion.div 
          className="w-full bg-[#001731] min-h-screen flex items-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo3.png" 
                  alt="SiCoaching Digital" 
                  className="w-60 mb-4"
                />
                <h3 className="text-4xl font-bold text-white mb-6">Productos Digitales</h3>
                <p className="text-white/90 text-xl leading-relaxed">
                  Accede a recursos y herramientas digitales diseñadas para potenciar tu desarrollo personal y profesional.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
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
                    <motion.div 
                      key={index}
                      className="bg-[#f78d31]/5 backdrop-blur-sm p-6 rounded-xl border border-[#f78d31]/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-[#f78d31] mb-3">{feature.title}</h4>
                      <p className="text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  onClick={() => handleOpenContactForm("Productos Digitales")}
                  className="inline-flex items-center px-8 py-4 bg-[#f78d31] text-white rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar recursos
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Business Coaching Section */}
        <motion.div 
          className="w-full bg-[#e9e9e9] min-h-screen flex items-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div 
                className="lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo1.png" 
                  alt="SiCoaching Empresarial" 
                  className="w-60 mb-4"
                />
                <h3 className="text-4xl font-bold text-[#001731] mb-6">Coaching Empresarial</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Transforma tu organización y desarrolla el potencial de tus equipos con nuestro programa empresarial.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
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
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold text-[#001731] mb-3">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  onClick={() => handleOpenContactForm("Coaching Empresarial")}
                  className="inline-flex items-center px-8 py-4 bg-[#f78d31] text-white rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Transformar mi empresa
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f78d31]/10 text-[#f78d31] mb-6 text-lg">
              Conecta con Nosotros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a nuestra comunidad y mantente al día con nuestros últimos contenidos, eventos y recursos de desarrollo personal y profesional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Instagram className="w-12 h-12" />,
                name: "Instagram",
                handle: "@sicoaching",
                href: "https://instagram.com/sicoaching",
                color: "bg-gradient-to-br from-purple-600 to-pink-500"
              },
              {
                icon: <Linkedin className="w-12 h-12" />,
                name: "LinkedIn",
                handle: "SiCoaching",
                href: "https://linkedin.com/company/sicoaching",
                color: "bg-[#0077b5]"
              },
              {
                icon: <Mail className="w-12 h-12" />,
                name: "Email",
                handle: "info@sicoaching.com",
                href: "mailto:info@sicoaching.com",
                color: "bg-[#f78d31]"
              }
            ].map((platform, index) => (
              <motion.a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl ${platform.color} p-12 transition-all hover:scale-105`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 rounded-full bg-white p-4">
                    {React.cloneElement(platform.icon, { className: `w-12 h-12 ${platform.color === 'bg-[#f78d31]' ? 'text-[#f78d31]' : 'text-current'}` })}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{platform.name}</h3>
                  <p className="text-white/90 text-lg">{platform.handle}</p>
                </div>
                <ArrowRight className="absolute bottom-4 right-4 h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
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

      {/* Contact Form Popup */}
      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        selectedService={selectedService}
      />
    </div>
  )
}