import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Apple,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              SOBRE NOSOTROS
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blogger De Moda
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/social-responsibility"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Responsabilidad Social
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sala de Prensa
                </Link>
              </li> */}

              <li>
                <Link
                  href="/affiliate"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Afiliación
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda & Apoyo */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              AYUDA & APOYO
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Información De Envío
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Devolución
                </Link>
              </li>

              <li>
                <Link
                  href="/order-status"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Cómo Realizar El Pedido
                </Link>
              </li>

              <li>
                <Link
                  href="/classification"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Política de clasificación
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Servicio al Cliente */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              SERVICIO AL CLIENTE
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contáctenos
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/payment"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pagos
                </Link>
              </li>
              <li>
                <Link
                  href="/points"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Puntos
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Encuéntranos En & App */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              ENCUÉNTRANOS EN
            </h3>

            {/* Redes sociales */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.221.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Texto legal */}
        <div className="mt-6 text-center max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed">
            Al hacer clic en el botón INSCRIBIRSE, acepta nuestra{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Política de Privacidad y Cookies
            </Link>
            . Si desea darse de baja de los correos electrónicos de marketing,
            vaya a nuestro{" "}
            <Link
              href="/privacy-center"
              className="text-blue-600 hover:underline"
            >
              centro de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
