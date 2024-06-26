import Hero from "@/app/components/Hero";
import Newest from "@/app/components/Newest";

export const dynamic = 'force-dynamic'; // por defecto: auto
export const revalidate = 100; // por defecto: false

export default function Home() {
  return (
    <div className="bg-white pb-4 sm:pb lg:pb-12">
      <Hero/>
      <Newest/>
    </div>
  );
}