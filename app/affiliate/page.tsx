import { TrendingUp, DollarSign, Users, Award, Shield, Target, ArrowRight, Crown, Zap, Gift, Calculator, Globe, Star } from 'lucide-react';

export default function Afiliados() {
  const beneficiosAfiliados = [
    {
      icon: DollarSign,
      titulo: "Comisiones Atractivas",
      descripcion: "Hasta 15% de comisión en cada venta que generes, con bonos adicionales por volumen y rendimiento excepcional."
    },
    {
      icon: Target,
      titulo: "Tracking Preciso",
      descripcion: "Sistema de seguimiento avanzado que registra cada click, conversión y pago de manera transparente y en tiempo real."
    },
    {
      icon: Globe,
      titulo: "Alcance Internacional",
      descripcion: "Promociona productos premium en múltiples países con soporte logístico completo y atención al cliente especializada."
    },
    {
      icon: Crown,
      titulo: "Contenido Exclusivo",
      descripcion: "Acceso a materiales promocionales de alta calidad, fotografías profesionales y contenido exclusivo para afiliados."
    }
  ];

  const nivelesAfiliados = [
    {
      nivel: "Embajador",
      comision: "8-10%",
      requisitos: "Sin requisitos mínimos",
      beneficios: ["Dashboard personal", "Materiales básicos", "Soporte por email"],
      color: "from-gray-100 to-gray-200",
      textColor: "text-gray-700",
      badgeColor: "bg-gray-500"
    },
    {
      nivel: "Influencer",
      comision: "12-15%",
      requisitos: "$2,000+ en ventas/mes",
      beneficios: ["Todo lo anterior", "Productos de prueba", "Soporte prioritario", "Bonos trimestrales"],
      color: "from-amber-100 to-yellow-200",
      textColor: "text-amber-800",
      badgeColor: "bg-amber-600",
      destacado: true
    },
    {
      nivel: "Partner VIP",
      comision: "15-20%",
      requisitos: "$5,000+ en ventas/mes",
      beneficios: ["Todo lo anterior", "Códigos personalizados", "Sesiones fotográficas", "Eventos exclusivos"],
      color: "from-emerald-100 to-emerald-200",
      textColor: "text-emerald-800",
      badgeColor: "bg-emerald-600"
    }
  ];

  const herramientas = [
    {
      icon: Calculator,
      titulo: "Calculadora de Ganancias",
      descripcion: "Estima tus ingresos potenciales basado en tu audiencia y engagement"
    },
    {
      icon: Zap,
      titulo: "Enlaces Inteligentes",
      descripcion: "URLs personalizadas que maximizan conversiones y facilitan el tracking"
    },
    {
      icon: Gift,
      titulo: "Códigos de Descuento",
      descripcion: "Cupones exclusivos para tu audiencia que aumentan las ventas"
    },
    {
      icon: Award,
      titulo: "Reportes Detallados",
      descripcion: "Analytics completos de rendimiento, clicks, conversiones y pagos"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado Principal */}
      <section className="relative bg-gray-50 py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 to-amber-900/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
            Programa de Afiliados
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            Transforma tu pasión por la moda en una fuente de ingresos sostenible, promocionando productos que realmente amas
          </p>
          
          <div className="mt-12 flex justify-center items-center space-x-6">
            <TrendingUp className="h-8 w-8 text-emerald-700 opacity-60" />
            <DollarSign className="h-6 w-6 text-amber-600" />
            <Users className="h-8 w-8 text-emerald-700 opacity-60" />
          </div>
        </div>
      </section>

      {/* Introducción al Programa */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Monetiza Tu Influencia
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Si ya tienes una audiencia que confía en tus recomendaciones de moda y estilo, 
                  <span className="font-medium text-emerald-800"> nuestro programa de afiliados</span> te 
                  permite generar ingresos reales mientras compartes productos que genuinamente te encantan.
                </p>
                
                <p>
                  A diferencia de otros programas, en Leforet valoramos la <span className="font-medium text-emerald-800">
                  calidad sobre la cantidad</span>. Buscamos afiliados que se conecten auténticamente con 
                  nuestra filosofía de elegancia atemporal y que puedan transmitir esta pasión a su audiencia.
                </p>
                
                <p>
                  Nuestro sistema está diseñado para ser <span className="font-medium text-emerald-800">
                  transparente, justo y rentable</span>. Desde el primer día tendrás acceso a herramientas 
                  profesionales, materiales de marketing de alta calidad y un equipo de soporte dedicado 
                  a maximizar tu éxito.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-light text-emerald-700 mb-2">15%</div>
                  <div className="text-sm text-gray-600 font-medium">Comisión Máxima</div>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-light text-emerald-700 mb-2">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Tracking en Tiempo Real</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <TrendingUp className="h-16 w-16 mx-auto mb-4 text-emerald-700 opacity-40" />
                    <p className="text-sm font-light">Dashboard de Afiliado</p>
                    <p className="text-xs opacity-70">Tracking y analytics en tiempo real</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald-200 rounded-full opacity-40 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios del Programa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Por Qué Elegirnos
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Un programa diseñado pensando en tu éxito y crecimiento a largo plazo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficiosAfiliados.map((beneficio, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <beneficio.icon className="h-8 w-8 text-emerald-700" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niveles de Afiliación */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Niveles de Afiliación
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Crece con nosotros y desbloquea beneficios exclusivos a medida que aumentas tu rendimiento
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nivelesAfiliados.map((nivel, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  nivel.destacado ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50' : 'border-gray-200 bg-white'
                } ${nivel.destacado ? 'transform scale-105' : 'hover:transform hover:scale-105'}`}
              >
                {nivel.destacado && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Más Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white mb-4 ${nivel.badgeColor}`}>
                    {nivel.nivel}
                  </div>
                  
                  <div className="text-4xl font-light text-gray-900 mb-2">
                    {nivel.comision}
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    de comisión por venta
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">Requisitos:</div>
                    <div className="text-sm text-gray-600">{nivel.requisitos}</div>
                  </div>
                  
                  <div className="space-y-3">
                    {nivel.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Star className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {beneficio}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas y Recursos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Herramientas Profesionales
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Todo lo que necesitas para maximizar tus conversiones y simplificar tu trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {herramientas.map((herramienta, index) => (
              <div 
                key={index}
                className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <herramienta.icon className="h-8 w-8 text-emerald-700" />
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {herramienta.titulo}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {herramienta.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Aplicación */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Proceso Simple y Transparente
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Aplica Online</h3>
              <p className="text-gray-700">Completa nuestro formulario de aplicación en menos de 5 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 border-2 border-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-amber-700">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Revisión</h3>
              <p className="text-gray-700">Nuestro equipo revisa tu perfil en 2-3 días hábiles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">¡Comienza!</h3>
              <p className="text-gray-700">Accede a tu dashboard y materiales promocionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Comienza Tu Camino Hacia el Éxito
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
              Si tienes una audiencia comprometida y compartes nuestra pasión por la moda atemporal, 
              <span className="font-medium text-emerald-800"> es momento de convertir tu influencia en ingresos reales</span>.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El proceso es completamente gratuito y sin compromisos. Una vez aprobado, 
                tendrás acceso inmediato a todas nuestras herramientas y podrás comenzar a generar 
                comisiones desde tu primera venta.
              </p>
              <p className="text-lg font-medium text-emerald-800">
                ¿Listo para dar el siguiente paso?
              </p>
            </div>
            
            <button className="group inline-flex items-center px-10 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xl rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Aplicar Ahora</span>
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Aplicación gratuita y sin compromisos</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Aprobación en 2-3 días hábiles</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}