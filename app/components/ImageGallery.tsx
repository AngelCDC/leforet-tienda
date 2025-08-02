"use client";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: any[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  const currentImage = images[selectedImageIndex];

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* Thumbnails */}
      <div className="order-last flex gap-3 lg:order-none lg:flex-col overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[600px] pb-2 lg:pb-0">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className={`
              relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer transition-all duration-200
              
            `}
            onClick={() => handleImageSelect(index)}
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={150}
              alt={`Imagen ${index + 1}`}
              className="h-20 w-20 lg:h-24 lg:w-full object-contain object-center transition-transform duration-200 hover:scale-105"
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      {/* Imagen principal */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 group">
        <div
          className={`relative transition-transform duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
        >
          <Image
            src={urlFor(currentImage).url()}
            alt={`Imagen principal ${selectedImageIndex + 1}`}
            width={800}
            height={600}
            className="h-96 lg:h-[500px] w-full object-contain object-center bg-white"
            priority
            onClick={toggleZoom}
          />
        </div>

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Botón de zoom */}
        <button
          onClick={toggleZoom}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
          aria-label={isZoomed ? "Reducir zoom" : "Ampliar imagen"}
        >
          <ZoomIn
            className={`w-5 h-5 text-gray-700 transition-transform ${isZoomed ? "scale-110" : ""}`}
          />
        </button>

        {/* Indicador de imagen actual */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
