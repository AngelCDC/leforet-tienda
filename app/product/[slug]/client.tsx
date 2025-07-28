"use client";

import { fullProduct } from "@/app/interface";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
  Award,
  Clock,
} from "lucide-react";
import AddToBag from "@/app/components/AddTobag";
import Link from "next/link";
import { useState } from "react";

export default function ProductPage({ data }: { data: fullProduct }) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "description" | "reviews" | "shipping"
  >("description");

  // Datos simulados para hacer más realista
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Negro", hex: "#000000" },
    { name: "Blanco", hex: "#FFFFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Rosa", hex: "#FFC0CB" },
  ];

  const originalPrice = data.price + 30;
  const discount = Math.round(
    ((originalPrice - data.price) / originalPrice) * 100
  );

  const benefits = [
    {
      icon: Truck,
      text: "Envío GRATIS en pedidos +$50",
      subtext: "Entrega en 1-2 días",
    },
    {
      icon: RotateCcw,
      text: "Devolución GRATIS en 30 días",
      subtext: "Sin preguntas",
    },
    {
      icon: ShieldCheck,
      text: "Compra 100% Segura",
      subtext: "Protección del comprador",
    },
    {
      icon: Award,
      text: "Garantía de Calidad",
      subtext: "Productos verificados",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/${data.sexoName}`}
              className="hover:text-primary"
            >
              {data.sexoName}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/${data.sexoName}/${data.categoryName}`}
              className="hover:text-primary"
            >
              {data.categoryName}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 truncate">{data.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Galería de imágenes */}
          <div className="space-y-4">
            <ImageGallery images={data.images} />

            {/* Tags de producto 
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                🔥 Más Vendido
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                ✨ Nuevo
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                🚚 Envío Rápido
              </span>
            </div>*/}
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Header del producto */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded uppercase tracking-wide">
                      {data.categoryName} • {data.sexoName}
                    </span>
                    {discount > 0 && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        -{discount}% OFF
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {data.name}
                  </h1>
                </div>

                
              </div>

              {/* Rating y reviews 
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.2</span>
                </div>
                <button className="text-sm text-gray-600 hover:text-primary underline flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  156 Reseñas
                </button>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>2.3k vendidos</span>
                </div>
              </div>*/}

              {/* Precios */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${data.price}
                  </span>
                  {discount > 0 && (
                    <span className="text-lg text-gray-400 line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-medium">
                    ¡Oferta limitada! Termina en 2 días
                  </span>
                </div>
              </div>

              {/* Selector de colores 
              {colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">
                      Color: <span className="text-gray-600">{selectedColor || 'Selecciona un color'}</span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === color.name 
                            ? 'border-primary shadow-lg scale-110' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {color.hex === '#FFFFFF' && (
                          <div className="w-full h-full rounded-full border border-gray-200"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}*/}

              {/* Selector de tallas 
              {sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">
                      Talla: <span className="text-gray-600">{selectedSize || 'Selecciona una talla'}</span>
                    </label>
                    <button 
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-sm text-primary hover:underline"
                    >
                      Guía de tallas
                    </button>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-4 border rounded-lg text-sm font-medium transition-all ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}*/}

              {/* Cantidad */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 mb-3 block">
                  Cantidad
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-50 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <AddToBag
                    currency="USD"
                    description={data.description}
                    image={data.images[0]}
                    name={data.name}
                    price={data.price}
                    key={data._id}
                  />
                  <Link
                    href={`https://wa.me/584120828474?text=*Hola,%20me%20interesa%20el%20siguiente%20articulo*.%0a*Producto:*%20${data.name}%0a*Categoria:*%20${data.categoryName}%0a*Precio:*%20${data.price}$`}
                    className="flex-1"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      💬 Comprar por WhatsApp
                    </Button>
                  </Link>
                </div>

                <Button variant="outline" className="w-full">
                  🛒 Comprar Ahora - Pago Seguro
                </Button>
              </div>
            </div>

            {/* Beneficios */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                ¿Por qué comprar con nosotros?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {benefit.text}
                      </p>
                      <p className="text-sm text-gray-600">{benefit.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información adicional 
        <div className="bg-white rounded-lg shadow-sm mt-8">
          <div className="border-b border-gray-100">
            <div className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Descripción' },
                { id: 'reviews', label: 'Reseñas (156)' },
                { id: 'shipping', label: 'Envío y Devoluciones' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{data.description}</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Material de alta calidad</li>
                      <li>• Diseño moderno y elegante</li>
                      <li>• Fácil cuidado y mantenimiento</li>
                      <li>• Disponible en múltiples tallas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cuidados:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lavar a máquina en agua fría</li>
                      <li>• No usar blanqueador</li>
                      <li>• Secar al aire libre</li>
                      <li>• Planchar a temperatura baja</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Sé el primero en opinar!</h3>
                  <p className="text-gray-600 mb-4">Comparte tu experiencia con este producto</p>
                  <Button>Escribir Reseña</Button>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🚚 Información de Envío</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Envío GRATIS en pedidos superiores a $50</p>
                    <p>• Entrega estándar: 1-2 días hábiles en Maturín</p>
                    <p>• Entrega express: Mismo día (disponible en ciertas zonas)</p>
                    <p>• Seguimiento en tiempo real de tu pedido</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🔄 Política de Devoluciones</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Devoluciones GRATUITAS hasta 30 días después de la compra</p>
                    <p>• Los productos deben estar en condiciones originales</p>
                    <p>• Reembolso completo o cambio por otro producto</p>
                    <p>• Proceso de devolución simple y rápido</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>*/}
      </div>
    </div>
  );
}
