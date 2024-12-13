'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Target, Users, Briefcase, Brain, ArrowRight, Instagram, Linkedin, Mail, Sparkles, ArrowUpRight, CheckCircle2, Star, BarChart2, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactFormPopup from './ContactFormPopup'
import { MobileMenu } from './MobileMenu'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Slow down the video
    }
  }, [])
  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 9000)

    return () => clearInterval(timer)
  }, [])
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

  const testimonials = [
    {
      name: "Marcelo",
      role: "Coaching Personal",
      content: "Realizar un proceso de coaching personal guiado con Cecilia fue una experiencia transformadora. Desde el primer momento, su enfoque profesional empático y su habilidad intuitiva para comprender mis necesidades me ayudaron a conectar profundamente con el proceso. Su capacidad profesional y objetividad me permitieron ver mis desafíos desde una perspectiva más clara, sin juicios, y me dio el impulso necesario para superar mis propias barreras."
    },
    {
      name: "Ileana",
      role: "Coaching Ejecutivo",
      content: "Desde que Ceci llegó a mi vida, he experimentado una transformación profunda y significativa, tanto en el ámbito personal como en el profesional. A través del proceso, no solo logré ordenar mis ideas y metas, sino que también me sentí acompañada en cada paso, lo cual resultó invaluable en momentos de desafío."
    },
    {
      name: "Marcelo",
      role: "Coaching Personal",
      content: "Al realizar un proceso de coaching en nuestra empresa guiado por Cecilia Ortiz y Daniel Bütikofer, experimentamos cambios notables en el ambiente de trabajo y en el rendimiento general del equipo. El proceso nos ayudó a fortalecer la comunicación entre el equipo, permitiéndonos identificar áreas de mejora y fomentar un clima de confianza y apertura."
    },
    {
      name: "Manuela",
      role: "Coaching Personal",
      content: "Tu acompañamiento me brindó el espacio necesario para poder mirarme honestamente, fue simple y profundo. De alguna manera fue quitar piel vieja para poder vivir desde la mía propiaFue un proceso corto, concentrado y muy profundo, te diría quirúrgicamente amoroso.. Y poderoso, me permitió acceder a una expansiva paz, algo que hacia mucho tiempo que no experimentaba."
    },
    {
      name: "Florencia",
      role: "Coaching Organizacional",
      content: "En MOOD HR, creemos en el poder del acompañamiento personalizado para transformar las organizaciones. La incorporación de un coach a nuestro equipo nos ha permitido llevar nuestra propuesta de valor a un nuevo nivel, integrando un enfoque más profundo y estratégico en el desarrollo del talento humano."
    }
  ]


  return (
    <div className="min-h-screen bg-[#e9e9e9] overflow-hidden font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#e9e9e9] backdrop-blur-md z-40 h-32 border-t-2 border-[#f78d31]">
        <div className="container mx-auto px-4 h-full relative">
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
                className="h-48 md:h-64 mt-16"
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
                href="https://wa.link/5qifes"
                className="hidden md:inline-flex items-center px-6 py-3 bg-[#f78d31] text-white rounded-full transition-all duration-300 text-lg"
              >
                Agendar Consulta <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/inicio1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-20 h-full flex items-center justify-center mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-4xl mx-auto space-y-1 md:space-y-8">
              <motion.div
                className="flex flex-col space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  Impulsa <span className="text-[#f78d31]">tu empresa</span>
                </h1>
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  Transforma <span className="text-[#f78d31]">el presente</span>
                </h1>
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  Crea <span className="text-[#f78d31]">futuro</span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Si Coaching, especialistas en facilitar procesos de mejora y transformación
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="https://wa.link/5qifes"
                  className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-4 bg-[#f78d31] text-white rounded-full transition-all duration-300 text-base md:text-lg hover:bg-[#e67d21]"
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-4 bg-white text-gray-800 rounded-full transition-all duration-300 text-base md:text-lg hover:bg-gray-100"
                >
                  Conoce más
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Lo que dicen nuestros clientes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#f78d31] to-[#f7a331] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
                        {testimonials[currentTestimonial].name[0]}
                      </div>
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-[#f78d31] font-medium">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'w-8 bg-[#f78d31]' 
                        : 'w-3 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f78d31]/10 text-[#f78d31] mb-6 text-lg">
              <Users className="h-5 w-5 mr-2" />
              Sobre Nosotros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 md:whitespace-nowrap">
              Experiencia, Vocación y Competencia
            </h2>
          </div>
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
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nuestro propósito</h3>
              <p className="text-gray-600 leading-relaxed text-xl">
                Impulsar procesos de mejora y transformación en las empresas.
                Potenciar el desarrollo de las personas para que formen mejores equipos de trabajo.
                Brindar herramientas para diseñar futuro.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
            {[
               {
                name: "María Cecilia Ortiz",
                role: "Master Coach Ontológico Profesional",
                image: "/fotocecilia.jpg",
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
                image: "/fotodaniel.jpeg",
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
              className="bg-white shadow-lg overflow-hidden border border-[#f78d31] p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="w-72 h-72 mb-6 overflow-hidden border-2 border-[#f78d31]">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{coach.name}</h3>
                <p className="text-xl text-[#f78d31] font-semibold mb-4">{coach.role}</p>
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  {coach.qualifications.map((qualification, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f78d31] mt-1.5 flex-shrink-0" />
                      <span className="text-base text-gray-600">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">¿Por qué elegirnos?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Experiencia",
                  description: "Más de una década transformando vidas con resultados medibles y sostenibles.",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  title: "Vocación",
                  description: "Actividades y enfoques adaptados a las necesidades específicas de cada cliente.",
                  icon: <Brain className="w-8 h-8" />
                },
                {
                  title: "Competencia",
                  description: "Constante actualización profesional para brindar soluciones prácticas e innovadoras.",
                  icon: <CheckCircle2 className="w-8 h-8" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-[#f78d31]/10 rounded-full flex items-center justify-center text-[#f78d31] mx-auto mb-6">
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
            Soluciones focalizadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de coaching para impulsar el fortalecimiento organizacional y personal.
          </p>
        </motion.div>

        {/* Business Coaching Section */}
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
        alt="SiCoaching Empresarial" 
        className="w-72 mb-4"
      />
      <h3 className=" text-center text-6xl font-bold text-white mb-6">Empresas</h3>
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
            description: "Desarrolla y optimiza tus habilidades de liderazgo.",
            icon: <Award className="w-8 h-8 text-[#f78d31]" />
          },
          {
            title: "Cultura Organizacional",
            description: "Construye una cultura empresarial sólida y positiva.",
            icon: <Users className="w-8 h-8 text-[#f78d31]" />
          },
          {
            title: "Gestión de Equipos",
            description: "Mejora la comunicación y el rendimiento de tus equipos.",
            icon: <Target className="w-8 h-8 text-[#f78d31]" />
          },
          {
            title: "Productividad",
            description: "Optimiza procesos y maximiza resultados empresariales.",
            icon: <BarChart2 className="w-8 h-8 text-[#f78d31]" />
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
                  className="inline-flex items-center px-8 py-4 bg-[#f78d31] text-white rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quiero una entrevista
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
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
        className="w-72 mb-4"
      />
      <h3 className="text-center text-6xl font-bold text-white mb-6">Personas</h3>
      <p className="text-white/90 text-xl leading-relaxed">
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
                  className="inline-flex items-center px-8 py-4 bg-[#e9e9e9] text-[#001731]  rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quiero iniciar un proceso personal
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Digital Products Section */}
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
        alt="SiCoaching Digital" 
        className="w-72 mb-4"
      />
      <h3 className=" text-center text-6xl font-bold text-[#001731] mb-6">Programas</h3>
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
            title: "Autoconocimiento y expansión a tráves del Focusing",
            description: "Filosofía de lo implícito y práctica de Focusing para el crecimiento personal, cursado virtual.",
            icon: <BarChart2 className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Carrera de Coach Ontológico Profesional",
            description: "Programa avalado por AACOP, opción virtual o presencial en Instituto de Transformación y Coaching de Rosario.",
            icon: <ArrowRight className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Cuando el proceso se bloquea – Focusing para profesionales",
            description: "Orientado a coaches, counselors, psicólogos y afines .",
            icon: <Users className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Coaching en Organizaciones",
            description: "Postítulo para Coaches. Programa avalado por AACOP, cursado virtual en Instituto de Transformación y Coaching de Rosario.",
            icon: <Zap className="w-8 h-8 text-[#001731]" />
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
                  onClick={() => handleOpenContactForm("Coaching Personal")}
                  className="inline-flex items-center px-8 py-4 bg-[#001731] text-white rounded-full text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quiero saber más
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
     {/* Contact Section */}
     <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte en tu viaje de transformación. Conéctate con nosotros y da el primer paso hacia tu crecimiento.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Instagram className="w-12 h-12" />,
                platform: "Instagram",
                handle: "@sicoaching1",
                link: "#"
              },
              {
                icon: <Linkedin className="w-12 h-12" />,
                platform: "LinkedIn",
                handle: "Maria Cecilia Ortiz",
                link: "https://www.linkedin.com/in/ortizcecilia/"
              },
              {
                icon: <Mail className="w-12 h-12" />,
                platform: "Email",
                handle: "info@sicoaching.com",
                link: "mailto:info@sicoaching.com"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="mr-4 text-[#f78d31]">{contact.icon}</div>
                <div>
                  <h3 className="font-semibold">{contact.platform}</h3>
                  <p className="text-gray-600">{contact.handle}</p>
                </div>
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
          <p className="text-gray-500 mt-4 text-center">
          Diseño y desarrollo: <a href="https://eliezerperez.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Eliezer Perez</a>
        </p>
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

