import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactFormPopup = ({ isOpen, onClose, serviceTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    service: serviceTitle
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Configura EmailJS
      const templateParams = {
        to_email: 'info@sicoaching.com.ar',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.description,
        service: formData.service
      };

      await emailjs.send(
        'service_gigrlv4', // Reemplaza con tu Service ID de EmailJS
        'template_astt77q', // Reemplaza con tu Template ID de EmailJS
        templateParams,
        'Kyqui1AJ0Hh5dZ8ld' // Reemplaza con tu Public Key de EmailJS
      );

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          description: '',
          service: serviceTitle
        });
      }, 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Información</h3>
          <p className="text-gray-600 mb-6">
            Completa el formulario y nos pondremos en contacto contigo para discutir cómo podemos ayudarte.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78d31]/50 focus:border-[#f78d31] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78d31]/50 focus:border-[#f78d31] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78d31]/50 focus:border-[#f78d31] outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#f78d31] to-[#ff6b6b] text-white rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg disabled:opacity-70 transition-all"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <span>¡Mensaje enviado!</span>
                </>
              ) : status === 'error' ? (
                <>
                  <span>Error al enviar. Intenta de nuevo</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar mensaje</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPopup;