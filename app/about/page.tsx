import { Heart, Shield, Leaf, ArrowRight, Star, Award, Users } from 'lucide-react';

export default function QuienesSomos() {
  const valores = [
    {
      icon: Star,
      titulo: "Calidad",
      descripcion: "Seleccionamos cuidadosamente cada pieza, trabajando con materiales premium que perduran en el tiempo y mantienen su elegancia."
    },
    {
      icon: Heart,
      titulo: "Autenticidad",
      descripcion: "Creemos en la belleza genuina que trasciende tendencias pasajeras, ofreciendo piezas que reflejan tu verdadera personalidad."
    },
    {
      icon: Leaf,
      titulo: "Responsabilidad",
      descripcion: "Comprometidos con prácticas sostenibles y éticas, cuidamos tanto del planeta como de las comunidades que forman parte de nuestra cadena."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado Principal */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
            Quiénes Somos
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            Donde cada accesorio cuenta una historia de elegancia atemporal y cada cliente encuentra su esencia única
          </p>
        </div>
      </section>

      {/* Historia de la Empresa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Leforet nació de una visión simple pero poderosa: crear un espacio donde la moda trascienda 
                  las tendencias efímeras para convertirse en una expresión auténtica del estilo personal.
                </p>
                
                <p>
                  Fundada por un equipo de apasionados por la moda atemporal, comenzamos como un pequeño 
                  atelier dedicado a curar piezas excepcionales que pudieran acompañar a nuestros clientes 
                  a lo largo de sus vidas, adaptándose a cada momento y ocasión.
                </p>
                
                <p>
                  Hoy, Leforet se ha convertido en el destino preferido para quienes buscan accesorios que 
                  combinan craftsmanship excepcional, diseño sofisticado y versatilidad atemporal. Desde 
                  elegantes piezas para damas y caballeros hasta delicados accesorios infantiles y elementos 
                  para el hogar, cada artículo en nuestra colección ha sido seleccionado con el mismo cuidado 
                  y atención al detalle.
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-800 mb-2">500k+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-800 mb-2">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Países</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-800 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Productos Únicos</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-amber-900/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Award className="h-16 w-16 mx-auto mb-4 opacity-30 text-amber-600" />
                    <p className="text-sm font-light">Imagen de nuestro atelier</p>
                    <p className="text-xs opacity-70">Craftsmanship & Elegancia</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gray-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Los principios que guían cada decisión y definen nuestra esencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                    <valor.icon className="h-10 w-10 text-emerald-800" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    {valor.titulo}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed px-2">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Impacto Visual */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-emerald-900/90"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
              Moda Atemporal
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-light text-amber-100 mb-12">
              con Esencia
            </h3>
            
            <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Cada pieza en Leforet es más que un accesorio: es una declaración de elegancia que trasciende 
              el tiempo, una inversión en tu estilo personal que evoluciona contigo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">Elegancia</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Atemporal</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">Calidad</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Premium</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-400 mb-2">Estilo</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Único</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje Final y CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Tu Estilo, Nuestra Pasión
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-12">
              Te invitamos a descubrir una colección cuidadosamente curada donde cada pieza ha sido 
              seleccionada para complementar tu estilo único y acompañarte en cada momento especial de tu vida.
            </p>
            
            <button className="group inline-flex items-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Visitar Nuestra Tienda</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="pt-8 flex justify-center items-center space-x-6">
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Más de 500k clientes satisfechos</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center text-gray-600 text-sm">
                <Shield className="h-4 w-4 mr-2 text-emerald-700" />
                <span>Envío seguro garantizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}