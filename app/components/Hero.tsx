import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { ArrowRight, Heart, Star, Eye } from "lucide-react";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white min-h-screen flex items-center overflow-hidden">
      {/* Elementos decorativos elegantes */}
      <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-slate-200 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-48 bg-gradient-to-b from-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-1/6 w-px h-32 bg-gradient-to-t from-slate-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Grid asimétrico principal */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Contenido de texto - lado izquierdo */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* Header sofisticado */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-slate-300"></div>
                <span className="text-sm font-light text-slate-600 tracking-[0.3em] uppercase">
                  Nueva Temporada 2025
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-tight mb-6">
                Moda 
                <span className="block font-thin text-slate-600">atemporal</span>
                con esencia
              </h1>
              
              <p className="text-lg text-slate-600 max-w-md leading-relaxed mb-8">
                Piezas cuidadosamente seleccionadas que definen la elegancia contemporánea y trascienden las tendencias.
              </p>
            </div>

            {/* Stats elegantes */}
            <div className="flex items-center gap-8 py-6 border-t border-b border-slate-200">
              <div>
                <div className="text-2xl font-light text-slate-900">50K+</div>
                <div className="text-sm text-slate-500 tracking-wide">Productos Curados</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-400 text-slate-400" />
                  ))}
                </div>
                <div className="text-sm text-slate-500">4.8 • 2,1k reseñas</div>
              </div>
            </div>

            {/* Botones de acción elegantes */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/Damas"
                className="group inline-flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-4 hover:bg-slate-800 transition-all duration-300"
              >
                <span className="font-light tracking-[0.15em]">COLECCIÓN DAMAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/Caballeros"
                className="group inline-flex items-center justify-center gap-4 border border-slate-900 text-slate-900 px-8 py-4 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <span className="font-light tracking-[0.15em]">COLECCIÓN CABALLEROS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social proof discreto */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4 tracking-[0.1em] font-light">
                CONFIADO POR MÁS DE 10,000 CLIENTES
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                    +
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Se unieron esta semana
                </div>
              </div>
            </div>
          </div>

          {/* Galería de imágenes asimétrica - lado derecho */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6 h-[600px] lg:h-[700px]">
              
              {/* Imagen principal - grande */}
              <div className="col-span-12 md:col-span-8 group">
                <div className="relative h-full overflow-hidden bg-slate-100">
                  {/* Badge premium */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-slate-900 text-white px-4 py-2 text-sm font-light tracking-[0.1em]">
                      NUEVA COLECCIÓN SS25
                    </div>
                  </div>
                  
                  {/* Badge featured */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 text-sm font-light tracking-[0.1em] border border-slate-200">
                      FEATURED
                    </div>
                  </div>

                  <Image
                    src={urlFor(data.image1).url()}
                    alt="Colección destacada"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    width={600}
                    height={700}
                  />

                  {/* Overlay con controles elegantes */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-3">
                        <button className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg">
                          <Heart className="w-5 h-5 text-slate-700" />
                        </button>
                        <button className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg">
                          <Eye className="w-5 h-5 text-slate-700" />
                        </button>
                      </div>
                      <Link href="/productos/featured">
                        <button className="bg-slate-900 text-white px-6 py-3 text-sm font-light tracking-[0.1em] hover:bg-slate-800 transition-all">
                          VIEW COLLECTION
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha con dos imágenes */}
              <div className="col-span-12 md:col-span-4 space-y-6">
                
                {/* Imagen secundaria superior */}
                <div className="group h-[calc(50%-12px)]">
                  <div className="relative h-full overflow-hidden bg-slate-100">
                    {/* Badge de precio */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-2 text-sm font-light border border-slate-200">
                        Desde $89
                      </div>
                    </div>

                    <Image
                      src={urlFor(data.image2).url()}
                      alt="Detalle de moda"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      width={300}
                      height={300}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-between">
                          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 text-sm text-slate-900 font-light tracking-[0.05em]">
                            ACCESORIOS
                          </div>
                          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                            <ArrowRight className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagen secundaria inferior */}
                <div className="group h-[calc(50%-12px)]">
                  <div className="relative h-full overflow-hidden bg-slate-100">
                    {/* Badge de descuento */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-slate-900 text-white px-3 py-2 text-sm font-medium tracking-wide">
                        SAVE 30%
                      </div>
                    </div>

                    <Image
                      src={urlFor(data.image1).url()}
                      alt="Oferta especial"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      width={300}
                      height={300}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-between">
                          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 text-sm text-slate-900 font-medium tracking-wide">
                            OFERTAS
                          </div>
                          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                            <ArrowRight className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra promocional elegante inferior */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <span className="tracking-wide">Envío gratuito desde $50</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <span className="tracking-wide">Devoluciones en 30 días</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <span className="tracking-wide">Atención personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}