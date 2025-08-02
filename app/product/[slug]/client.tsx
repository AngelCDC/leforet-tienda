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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3">
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 overflow-x-auto scrollbar-hide">
            <Link href="/" className="hover:text-primary whitespace-nowrap">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link
              href={`/${data.sexo}`}
              className="hover:text-primary whitespace-nowrap"
            >
              {data.sexo}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link
              href={`/${data.sexo}/${data.Categoria}`}
              className="hover:text-primary whitespace-nowrap"
            >
              {data.Categoria}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-gray-900 truncate">{data.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Galería de imágenes - Optimizada para móvil */}
          <div className="space-y-3 sm:space-y-4">
            {/* Contenedor responsivo que mantiene la funcionalidad completa */}
            <div className="w-full  bg-white rounded-lg shadow-sm overflow-hidden">
              <ImageGallery images={data.images} />
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-4 sm:space-y-6">
            {/* Header del producto */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="flex-1 min-w-0">
                  {" "}
                  {/* min-w-0 para permitir truncado */}
                  <div className="flex  sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded uppercase tracking-wide w-fit">
                      {data.sexo} • {data.Categoria}
                    </span>
                    {discount > 0 && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded w-fit">
                        -{discount}% OFF
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {data.name}
                  </h1>
                </div>
              </div>

              {/* Precios */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ${data.price}
                  </span>
                  {discount > 0 && (
                    <span className="text-base sm:text-lg text-gray-400 line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                  <span className="text-red-600 font-medium">
                    ¡Oferta limitada! Termina en 2 días
                  </span>
                </div>
              </div>

              {/* Cantidad */}
              <div className="mb-4 sm:mb-6">
                <label className="text-sm font-medium text-gray-900 mb-2 sm:mb-3 block">
                  Cantidad
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 sm:px-4 py-2 hover:bg-gray-50 transition text-lg"
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="px-3 sm:px-4 py-2 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 sm:px-4 py-2 hover:bg-gray-50 transition text-lg"
                    aria-label="Aumentar cantidad"
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
                    href={`https://wa.me/584120828474?text=*Hola,%20me%20interesa%20el%20siguiente%20articulo*.%0a*Producto:*%20${data.name}%0a*Categoria:*%20${data.Categoria}`}
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

            {/* Beneficios - Compacto en móvil */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                ¿Por qué comprar con nosotros?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                        {benefit.text}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {benefit.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
