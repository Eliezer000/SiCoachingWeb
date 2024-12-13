import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-4 z-50 p-2"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X className="h-8 w-8 text-[#f78d31]" />
        ) : (
          <Menu className="h-8 w-8 text-[#f78d31]" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[#e9e9e9] z-40 flex flex-col shadow-lg"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#e9e9e9]">
              <nav className="flex flex-col items-center space-y-8">
                <a
                  href="#inicio"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-[#f78d31] transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-[#f78d31] transition-colors"
                >
                  Nosotros
                </a>
                <a
                  href="#servicios"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-[#f78d31] transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-[#f78d31] transition-colors"
                >
                  Contacto
                </a>
                <a
                  href="https://wa.link/5qifes"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-3 bg-[#f78d31] text-white rounded-full text-xl hover:bg-[#e67d21] transition-colors"
                >
                  Agendar Consulta
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
