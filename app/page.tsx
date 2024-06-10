import Image from "next/image";
import Hero from "@/app/components/Hero";
import Newest from "@/app/components/Newest";

export default function Home() {
  return (
    <div className="bg-white pb-4 sm:pb lg:pb-12">
      <Hero/>
      <Newest/>
    </div>
  );
}