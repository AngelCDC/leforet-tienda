"use client";

import { useState, useMemo } from "react";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Grid3X3,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

export default function CategoryProducts({
  products,
}: {
  products: simplifiedProduct[];
}) {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [sortBy, setSortBy] = useState<
    "recommended" | "price-low" | "price-high" | "newest"
  >("recommended");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const totalPages = Math.ceil(products.length / postsPerPage);

  // Función para ordenar productos
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
        // Asumiendo que hay una fecha o ID que indica orden
        return sorted.reverse();
      default:
        return sorted;
    }
  }, [products, sortBy]);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return sortedProducts.slice(start, start + postsPerPage);
  }, [currentPage, sortedProducts, postsPerPage]);

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  // Simular descuentos aleatorios para algunos productos
  const getDiscount = (productId: string) => {
    const discounts = [0, 10, 20, 30, 40, 50];
    const hash = productId.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
    return hash % 3 === 0 ? discounts[hash % discounts.length] : 0;
  };

  const getOriginalPrice = (price: number, discount: number) => {
    return discount > 0 ? Math.round(price / (1 - discount / 100)) : price;
  };

  return (
    <div className="space-y-6">
      {/* Header con filtros y opciones */}
      <div className="bg-white border-b border-gray-100 pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Productos ({products.length})
            </h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("large")}
                className={`p-2 rounded-lg transition ${viewMode === "large" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary appearance-none bg-white w-full"
              >
                <option value="recommended">Recomendado</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="newest">Más Nuevos</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={postsPerPage}
                onChange={(e) => {
                  setPostsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-4 py-2 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary appearance-none bg-white w-full"
              >
                <option value={10}>20 por página</option>
                <option value={40}>40 por página</option>
                <option value={60}>60 por página</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div
        className={`grid gap-4 ${
          viewMode === "grid"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {currentItems.map((product) => {
          const discount = getDiscount(product._id);
          const originalPrice = getOriginalPrice(product.price, discount);
          const isFavorite = favorites.has(product._id);

          return (
            <Link href={`/product/${product.slug}`}>
              <div
                key={product._id}
                className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Badge de descuento */}
                {discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    -{discount}%
                  </div>
                )}

                {/* Botón de favorito 
              <button
                onClick={() => toggleFavorite(product._id)}
                className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition z-10"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button> */}

                {/* Imagen del producto */}
                <div
                  className={`relative overflow-hidden ${viewMode === "grid" ? "aspect-[3/4]" : "aspect-square"}`}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    width={viewMode === "grid" ? 250 : 350}
                    height={viewMode === "grid" ? 333 : 350}
                  />

                  {/* Overlay con botón de compra rápida 
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-4">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Compra Rápida
                  </button>
                </div> */}
                </div>

                {/* Información del producto */}
                <div className="p-3 space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {product.categoryName}
                  </p>

                  {/* Rating simulado */}
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">(47)</span>
                  </div>

                  {/* Precios */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {discount > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ${originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Envío gratis */}
                  <div className="text-xs text-green-600 font-medium">
                    Envío gratis
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Paginación mejorada */}
      {totalPages > 1 && (
        <div className="bg-white border-t border-gray-100 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Mostrando {(currentPage - 1) * postsPerPage + 1}-
              {Math.min(currentPage * postsPerPage, products.length)} de{" "}
              {products.length} productos
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center space-x-1">
                {(() => {
                  const delta = 2;
                  const range = [];
                  const rangeWithDots = [];

                  for (
                    let i = Math.max(2, currentPage - delta);
                    i <= Math.min(totalPages - 1, currentPage + delta);
                    i++
                  ) {
                    range.push(i);
                  }

                  if (currentPage - delta > 2) {
                    rangeWithDots.push(1, "...");
                  } else {
                    rangeWithDots.push(1);
                  }

                  rangeWithDots.push(...range);

                  if (currentPage + delta < totalPages - 1) {
                    rangeWithDots.push("...", totalPages);
                  } else if (totalPages > 1) {
                    rangeWithDots.push(totalPages);
                  }

                  return rangeWithDots.map((page, index) =>
                    page === "..." ? (
                      <span key={index} className="px-3 py-2 text-gray-400">
                        ...
                      </span>
                    ) : (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(page as number)}
                        className={`px-3 py-2 rounded-lg text-sm transition ${
                          page === currentPage
                            ? "bg-primary text-white"
                            : "border border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  );
                })()}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
