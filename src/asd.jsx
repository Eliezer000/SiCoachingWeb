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
        src="/logo1.png" 
        alt="SiCoaching Empresarial" 
        className="w-60 mb-4"
      />
      <h3 className="text-4xl font-bold text-white mb-6">Coaching Empresarial</h3>
      <p className="text-white/90 text-xl leading-relaxed">
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
        src="/logo3.png" 
        alt="SiCoaching Digital" 
        className="w-60 mb-4"
      />
      <h3 className="text-4xl font-bold text-[#001731] mb-6">Productos Digitales</h3>
      <p className="text-gray-600 text-xl leading-relaxed">
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
            icon: <BarChart2 className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Recursos Descargables",
            description: "Guías, plantillas y materiales para tu desarrollo.",
            icon: <ArrowRight className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Comunidad Virtual",
            description: "Conecta con otros profesionales en crecimiento.",
            icon: <Users className="w-8 h-8 text-[#001731]" />
          },
          {
            title: "Webinars",
            description: "Sesiones en vivo con expertos en desarrollo personal.",
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
                  Comenzar mi transformación
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
