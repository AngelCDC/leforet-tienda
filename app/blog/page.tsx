import { Camera, Heart, Star, Users, Sparkles, ArrowRight, Instagram, Palette, Crown, Gift } from 'lucide-react';

export default function BloggerModa() {
  const beneficios = [
    {
      icon: Crown,
      titulo: "Acceso Exclusivo",
      descripcion: "Sé la primera en descubrir nuestras nuevas colecciones y piezas únicas antes que nadie más."
    },
    {
      icon: Heart,
      titulo: "Colaboración Auténtica",
      descripcion: "Trabaja directamente con nuestro equipo creativo para desarrollar contenido que refleje tu estilo personal."
    },
    {
      icon: Star,
      titulo: "Visibilidad Premium",
      descripcion: "Tu contenido será destacado en nuestros canales oficiales, llegando a miles de personas que comparten tu pasión."
    },
    {
      icon: Gift,
      titulo: "Experiencia Sin Costo",
      descripcion: "Disfruta de una experiencia completa de moda premium, incluyendo productos y sesiones fotográficas profesionales."
    }
  ];

  const inspiracionGallery = [
    {
      id: 1,
      categoria: "Lifestyle",
      descripcion: "Momentos auténticos con estilo"
    },
    {
      id: 2,
      categoria: "Editorial",
      descripcion: "Fotografía de alta calidad"
    },
    {
      id: 3,
      categoria: "Street Style",
      descripcion: "Moda en la vida cotidiana"
    },
    {
      id: 4,
      categoria: "Accesorios",
      descripcion: "Detalles que marcan la diferencia"
    },
    {
      id: 5,
      categoria: "Eventos",
      descripcion: "Elegancia en cada ocasión"
    },
    {
      id: 6,
      categoria: "Behind the Scenes",
      descripcion: "Momentos únicos del proceso creativo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado Inspirador */}
      <section className="relative bg-gray-50 py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 to-amber-900/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
            Blogger de Moda
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            "Donde tu pasión por la moda se encuentra con oportunidades únicas para brillar y crear contenido auténtico que inspire a otros"
          </p>
          
          <div className="mt-12 flex justify-center items-center space-x-6">
            <Camera className="h-8 w-8 text-emerald-700 opacity-60" />
            <Sparkles className="h-6 w-6 text-amber-600" />
            <Palette className="h-8 w-8 text-emerald-700 opacity-60" />
          </div>
        </div>
      </section>

      {/* Sección Introductoria */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Una Oportunidad Única Te Espera
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  En Leforet creemos que la moda es más que tendencias: es una forma de expresar quien eres. 
                  Por eso, estamos buscando a un grupo selecto de creadores apasionados que compartan 
                  nuestra visión de elegancia atemporal.
                </p>
                
                <p>
                  <span className="font-medium text-emerald-800">¿Te imaginas</span> siendo parte de una 
                  comunidad exclusiva donde puedas experimentar con las piezas más especiales de nuestra 
                  colección, crear contenido auténtico que refleje tu estilo único, y compartir tu pasión 
                  por la moda con una audiencia que verdaderamente valora la calidad y la elegancia?
                </p>
                
                <p>
                  Esta no es solo una colaboración más. Es una invitación a formar parte de algo especial: 
                  <span className="font-medium text-emerald-800"> una familia de creadores</span> que entienden 
                  que la verdadera moda trasciende el tiempo y se conecta con las emociones.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-amber-600">
                <p className="text-gray-800 font-light italic">
                  "Buscamos personas genuinas que vean en cada accesorio una oportunidad de contar su historia 
                  y que entiendan que la elegancia no grita, simplemente es."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Instagram className="h-16 w-16 mx-auto mb-4 text-emerald-700 opacity-40" />
                    <p className="text-sm font-light">Imagen de creador</p>
                    <p className="text-xs opacity-70">Contenido auténtico y elegante</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald-200 rounded-full opacity-40"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Destacados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Lo Que Te Espera
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Más que una colaboración, es una experiencia completa diseñada para creadores como tú
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
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

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Y esto es solo el comienzo...
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Como parte de nuestro equipo de creadores, tendrás acceso a eventos exclusivos, 
                sesiones fotográficas profesionales, y la oportunidad de influir directamente en 
                el desarrollo de futuras colecciones. <span className="font-medium text-emerald-800">
                Tu voz importa, tu estilo inspira.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Inspiración */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Inspiración Visual
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Descubre el tipo de contenido que nuestros creadores desarrollan: auténtico, elegante y lleno de personalidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspiracionGallery.map((item, index) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 via-amber-50 to-emerald-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-80"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {index % 3 === 0 && <Camera className="h-12 w-12 mx-auto mb-3 text-white opacity-60" />}
                      {index % 3 === 1 && <Heart className="h-12 w-12 mx-auto mb-3 text-white opacity-60" />}
                      {index % 3 === 2 && <Sparkles className="h-12 w-12 mx-auto mb-3 text-white opacity-60" />}
                      <p className="text-white text-sm opacity-70">Ejemplo de contenido</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h3 className="text-white font-medium text-lg mb-2">
                        {item.categoria}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 font-light text-lg max-w-3xl mx-auto">
              Cada imagen cuenta una historia, cada look refleja una personalidad única. 
              <span className="font-medium text-emerald-800">¿Cuál será tu historia con Leforet?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              ¿Lista para Formar Parte de Algo Especial?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
              Si sientes que tu pasión por la moda va más allá de simplemente seguir tendencias, 
              si crees que tienes algo único que aportar y si te emociona la idea de crear contenido 
              auténtico junto a una marca que valora la elegancia atemporal...
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <p className="text-2xl font-light text-gray-900 mb-6">
                <span className="font-medium text-emerald-800">Esta es tu invitación</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                No estamos buscando perfiles perfectos o números gigantes de seguidores. 
                Buscamos autenticidad, creatividad y esa chispa especial que hace que cada persona 
                sea única en su forma de vivir y compartir la moda.
              </p>
              <p className="text-lg font-light text-emerald-800">
                El proceso es simple, personal y diseñado para conocerte mejor.
              </p>
            </div>
            
            <button className="group inline-flex items-center px-10 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xl rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Quiero Ser Parte</span>
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Proceso de selección personalizado</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Basado en autenticidad, no en números</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 font-light pt-4">
              Las aplicaciones se revisan cuidadosamente. Te contactaremos si tu perfil resuena con nuestra visión.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}