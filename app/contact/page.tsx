"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Globe, Shield, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    origen: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    

  };

  const metodosContacto = [
    {
      icon: Mail,
      titulo: "Email Principal",
      contenido: "hola@leforet.com",
      descripcion: "Para consultas generales y atención personalizada",
      color: "from-emerald-100 to-emerald-50",
      iconColor: "text-emerald-700"
    },
    {
      icon: Phone,
      titulo: "WhatsApp Business",
      contenido: "+1 (555) 123-4567",
      descripcion: "Atención rápida y directa durante horario comercial",
      color: "from-amber-100 to-yellow-50",
      iconColor: "text-amber-700"
    },
    {
      icon: Globe,
      titulo: "Redes Sociales",
      contenido: "@leforet.oficial",
      descripcion: "Síguenos para inspiración diaria y atención al cliente",
      color: "from-gray-100 to-gray-50",
      iconColor: "text-gray-700"
    }
  ];

  const departamentos = [
    {
      area: "Atención al Cliente",
      email: "soporte@leforet.com",
      descripcion: "Consultas sobre pedidos, envíos y productos"
    },
    {
      area: "Colaboraciones",
      email: "colaboraciones@leforet.com",
      descripcion: "Programa de bloggers, afiliados e influencers"
    },
    {
      area: "Ventas Mayoristas",
      email: "mayoristas@leforet.com",
      descripcion: "Distribución y ventas al por mayor"
    },
    {
      area: "Prensa y Medios",
      email: "prensa@leforet.com",
      descripcion: "Solicitudes de prensa y material editorial"
    }
  ];

  const faqItems = [
    {
      pregunta: "¿Cuánto tardan en responder?",
      respuesta: "Respondemos emails en menos de 24 horas laborales. WhatsApp es más inmediato durante horario comercial."
    },
    {
      pregunta: "¿Hacen envíos internacionales?",
      respuesta: "Sí, enviamos a más de 15 países. Los tiempos varían entre 3-10 días hábiles según el destino."
    },
    {
      pregunta: "¿Puedo cambiar o devolver productos?",
      respuesta: "Aceptamos cambios y devoluciones dentro de 30 días, siempre que los productos estén en condiciones originales."
    },
    {
      pregunta: "¿Cómo puedo ser parte del programa de bloggers?",
      respuesta: "Visita nuestra página de Blogger de Moda y completa el formulario de aplicación. Revisamos cada perfil personalmente."
    }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200">
            <div className="mb-6">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-700" />
              </div>
              <h1 className="text-2xl font-light text-gray-900 mb-2">¡Mensaje Enviado!</h1>
              <p className="text-gray-700">Gracias por contactarnos. Te responderemos muy pronto.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-2">¿Qué sigue?</h3>
              <div className="text-left space-y-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-emerald-700" />
                  <span>Revisaremos tu mensaje en las próximas horas</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-emerald-700" />
                  <span>Te responderemos a: {formData.email}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Mientras tanto, puedes seguir explorando nuestras colecciones o unirte a nuestra comunidad en redes sociales.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado Principal */}
      <section className="relative bg-gray-50 py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 to-amber-900/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
            Contáctanos
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            "Estamos aquí para ayudarte a encontrar las piezas perfectas que complementen tu estilo único"
          </p>
          
          <div className="mt-12 flex justify-center items-center space-x-6">
            <MessageCircle className="h-8 w-8 text-emerald-700 opacity-60" />
            <Heart className="h-6 w-6 text-amber-600" />
            <Shield className="h-8 w-8 text-emerald-700 opacity-60" />
          </div>
        </div>
      </section>

      {/* Métodos de Contacto Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Formas de Conectar
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Elige la forma que prefieras para comunicarte con nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metodosContacto.map((metodo, index) => (
              <div 
                key={index}
                className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metodo.color} border border-opacity-30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metodo.icon className={`h-8 w-8 ${metodo.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {metodo.titulo}
                </h3>
                
                <p className="text-lg font-light text-emerald-700 mb-3">
                  {metodo.contenido}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {metodo.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Horarios de Atención */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center justify-center">
              <Clock className="h-6 w-6 text-emerald-700 mr-2" />
              Horarios de Atención
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Atención al Cliente</h4>
                <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sábados: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600 text-sm mt-2">Horario GMT-5</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Sábados: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm mt-2">Respuesta inmediata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulario de Contacto */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona el motivo de tu consulta</option>
                    <option value="productos">Consulta sobre Productos</option>
                    <option value="pedido">Estado de mi Pedido</option>
                    <option value="envios">Envíos y Entregas</option>
                    <option value="devoluciones">Cambios y Devoluciones</option>
                    <option value="colaboraciones">Colaboraciones y Partnerships</option>
                    <option value="mayoristas">Ventas Mayoristas</option>
                    <option value="sugerencias">Sugerencias y Feedback</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="origen" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cómo nos conociste?
                  </label>
                  <select
                    id="origen"
                    name="origen"
                    value={formData.origen}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Opcional - Ayúdanos a mejorar</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Búsqueda en Google</option>
                    <option value="referido">Recomendación de amigo/a</option>
                    <option value="influencer">A través de un influencer</option>
                    <option value="publicidad">Publicidad online</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte. Incluye todos los detalles que consideres importantes..."
                  />
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium text-emerald-800">Tu privacidad es importante</span>
                      <p className="text-emerald-700 mt-1">
                        Toda la información compartida será tratada de forma confidencial y utilizada únicamente para brindarte la mejor atención.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Información Adicional */}
            <div className="space-y-8">
              {/* Departamentos */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Departamentos Especializados
                </h3>

                <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-6"></div>
                
                <div className="space-y-6">
                  {departamentos.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="h-4 w-4 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{dept.area}</h4>
                        <p className="text-emerald-700 text-sm font-medium mb-1">{dept.email}</p>
                        <p className="text-gray-600 text-sm">{dept.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Rápido */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-emerald-700 mr-2" />
                  Preguntas Frecuentes
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-6"></div>
                
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-start">
                        <Star className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                        {item.pregunta}
                      </h4>
                      <p className="text-gray-700 text-sm pl-6">{item.respuesta}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">¿No encuentras lo que buscas?</span> No dudes en escribirnos, 
                    estamos aquí para resolver cualquier duda que puedas tener.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
