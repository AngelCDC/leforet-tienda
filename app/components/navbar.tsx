"use client";
import Link from "next/link";
import {
  ShoppingBag,
  User,
  Search,
  Heart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const categories = [
  {
    name: "Damas",
    items: [
      "Vestidos",
      "Tops",
      "Pantalones",
      "Faldas",
      "Ropa Interior",
      "Zapatos",
      "Accesorios",
      "Novedades",
      "Ofertas",
    ],
  },
  {
    name: "Caballeros",
    items: [
      "Camisas",
      "Pantalones",
      "Chaquetas",
      "Camisetas",
      "Calzado",
      "Accesorios",
      "Deportivo",
      "Ofertas",
    ],
  },
  {
    name: "Niños",
    items: [
      "Bebés (0-24M)",
      "Niñas (2-8A)",
      "Niños (2-8A)",
      "Adolescentes",
      "Zapatos",
      "Accesorios",
      "Juguetes",
    ],
  },
  {
    name: "Hogar",
    items: [
      "Decoración",
      "Cocina",
      "Baño",
      "Dormitorio",
      "Sala",
      "Jardín",
      "Mascotas",
    ],
  },
];

const promotionalBanner = {
  text: "🔥 MEGA SALE: Hasta 70% OFF + Envío GRATIS en compras +$50",
  bgColor: "bg-red-600",
};

export default function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const safeCartCount = cartCount || 0;

  return (
    <>
      {/* Promotional Banner */}
      <div
        className={`${promotionalBanner.bgColor} text-white text-center py-2 text-sm font-medium`}
      >
        {promotionalBanner.text}
      </div>

      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar con enlaces de servicio 
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-10 text-xs">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-primary transition">
                  <Globe className="w-3 h-3" />
                  <span>ES / USD</span>
                </button>
                <Link href="/app" className="hover:text-primary transition">
                  Descargar App
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/customer-service"
                  className="hover:text-primary transition"
                >
                  Atención al Cliente
                </Link>
                <Link
                  href="/track-order"
                  className="hover:text-primary transition"
                >
                  Rastrear Pedido
                </Link>
                <Link
                  href="/size-guide"
                  className="hover:text-primary transition"
                >
                  Guía de Tallas
                </Link>
              </div>
            </div>
          </div>
        </div>*/}

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setShowMobileMenu(false)}>
              <span className="text-2xl lg:text-3xl font-extrabold tracking-wide">
                Le<span className="text-primary">Foret</span>
              </span>
            </Link>

            {/* Desktop Categories */}
            <nav className="hidden lg:flex items-center space-x-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(cat.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition py-2">
                    <span>{cat.name}</span>
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeMenu === cat.name && (
                    <div className="absolute top-full left-0 w-80 bg-white shadow-xl border border-gray-100 rounded-lg mt-1 p-6 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="grid grid-cols-2 gap-4">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            href={`/${cat.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block text-gray-700 hover:text-primary text-sm py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-4 pt-4">
                        <Link
                          href={`/${cat.name}`}
                          className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                        >
                          Ver todo en {cat.name} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/ofertas"
                className="text-sm font-medium text-red-600 hover:text-red-700 transition py-2"
              >
                🔥 OFERTAS
              </Link>
              <Link
                href="/nuevos"
                className="text-sm font-medium hover:text-primary transition py-2"
              >
                Nuevos
              </Link>
            </nav>

            {/* Search Bar 
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div
                className={`relative w-full transition-all duration-200 ${isSearchFocused ? "shadow-lg" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Buscar productos, marcas..."
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:shadow-lg transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition">
                  <Search className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>*/}

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <button className="md:hidden p-2 hover:bg-gray-50 rounded-full transition">
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden md:flex p-2 hover:bg-gray-50 rounded-full transition relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>

              <Link
                href="/account"
                className="p-2 hover:bg-gray-50 rounded-full transition"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                className="p-2 hover:bg-gray-50 rounded-full transition relative"
                onClick={() => handleCartClick()}
              >
                <ShoppingBag className="w-5 h-5" />
                {safeCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {safeCartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full top-full shadow-lg z-40">
            <div className="p-4 space-y-4">
              {/* Mobile Search 
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>*/}

              {/* Mobile Categories */}
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-2">
                    <Link
                      href={`/${cat.name}`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <div className="font-medium text-gray-900 mb-2">
                        {cat.name}
                      </div>
                    </Link>

                    <div className="grid grid-cols-2 gap-2 pl-4">
                      {cat.items.map((item, i) => (
                        <Link
                          key={i}
                          href={`/${cat.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm text-gray-600 hover:text-primary transition py-1"
                          onClick={() => setShowMobileMenu(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Link
                    href="/ofertas"
                    className="block text-red-600 font-medium py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    🔥 OFERTAS
                  </Link>
                  <Link
                    href="/nuevos"
                    className="block text-gray-900 font-medium py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Nuevos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
