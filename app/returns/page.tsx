
import { Metadata } from "next";
import Contactanos from "../components/Contato";

export const metadata: Metadata = {
  title: "Le Foret",
  description: "Le Foret es tu tienda de accesorios para mujeres con estilo. Descubre collares, anillos, carteras y detalles únicos para realzar tu look. Diseños elegantes, envío rápido y atención personalizada.",
};

export const dynamic = 'force-dynamic'; // por defecto: auto
export const revalidate = 100; // por defecto: false

export default function Home() {
  return (
    <div className="bg-white pb-4 sm:pb lg:pb-12">
        <Contactanos/>
    </div>
  );
}