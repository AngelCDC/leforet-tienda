import { simplifiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { ArrowRight, Heart, Star, Eye } from "lucide-react";
import Image from "next/image";

async function getData() {
    const query = `*[_type == "product"]| order(_createdAt desc)[0...5] {
        _id,
          price,
          name,
          "slug":slug.current,
          "categoryName": category->name,
          "imageUrl":images[0].asset->url
      }`;
    const data = await client.fetch(query);
    return data; 
} 

export default async function Newest() {
    const data: simplifiedProduct[] = await getData();
    
    const getDiscount = (productId: string) => {
        const discounts = [0, 20, 30, 40];
        const hash = productId.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return hash % 4 === 0 ? discounts[hash % discounts.length] : 0;
    };

    const getOriginalPrice = (price: number, discount: number) => {
        return discount > 0 ? Math.round(price / (1 - discount / 100)) : price;
    };

    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header sofisticado */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-slate-300"></div>
                        <span className="text-sm font-light text-slate-600 tracking-[0.2em] uppercase">
                            Nuevas Llegadas
                        </span>
                        <div className="h-px w-16 bg-slate-300"></div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 text-center">
                        Curated Collection
                    </h2>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-center">
                        Piezas cuidadosamente seleccionadas que definen la elegancia contemporánea
                    </p>
                </div>

                {/* Grid asimétrico elegante con alturas equilibradas */}
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {/* Producto featured - lado izquierdo */}
                    {data[0] && (
                        <div className="col-span-12 lg:col-span-6 group">
                            <div className="relative h-full flex flex-col">
                                {/* Imagen featured */}
                                <div className="relative aspect-[4/5] lg:flex-1 overflow-hidden bg-slate-100">
                                    {/* Badge featured */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 text-sm font-light tracking-[0.1em] border border-slate-200">
                                            FEATURED
                                        </div>
                                    </div>

                                    {/* Badge de descuento si aplica */}
                                    {getDiscount(data[0]._id) > 0 && (
                                        <div className="absolute top-6 left-6 z-20">
                                            <div className="bg-slate-900 text-white px-4 py-2 text-sm font-light tracking-[0.1em]">
                                                SAVE {getDiscount(data[0]._id)}%
                                            </div>
                                        </div>
                                    )}

                                    <Link href={`/product/${data[0].slug}`}>
                                        <Image
                                            src={data[0].imageUrl}
                                            alt={data[0].name}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            width={600}
                                            height={750}
                                        />
                                    </Link>

                                    {/* Overlay con controles */}
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
                                            <Link href={`/product/${data[0].slug}`}>
                                                <button className="bg-slate-900 text-white px-6 py-3 text-sm font-light tracking-[0.1em] hover:bg-slate-800 transition-all">
                                                    VIEW DETAILS
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Información del producto featured */}
                                <div className="pt-6 lg:pr-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-slate-500 uppercase tracking-[0.1em]">
                                            {data[0].categoryName}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`w-3 h-3 ${i < 4 ? 'fill-slate-400 text-slate-400' : 'text-slate-200'}`} 
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <Link href={`/product/${data[0].slug}`}>
                                        <h3 className="text-2xl lg:text-3xl font-light text-slate-900 hover:text-slate-600 transition-colors mb-4 leading-tight">
                                            {data[0].name}
                                        </h3>
                                    </Link>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl font-light text-slate-900">
                                                ${data[0].price}
                                            </span>
                                            {getDiscount(data[0]._id) > 0 && (
                                                <span className="text-slate-400 line-through">
                                                    ${getOriginalPrice(data[0].price, getDiscount(data[0]._id))}
                                                </span>
                                            )}
                                        </div>
                                        <Link href={`/product/${data[0].slug}`}>
                                            <button className="group/btn flex items-center gap-2 text-slate-700 font-light hover:text-slate-900 transition-colors">
                                                Shop Now
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Grid de 4 productos - lado derecho */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="grid grid-cols-2 gap-6 lg:gap-8 h-full">
                            {data.slice(1, 5).map((product, index) => {
                                const discount = getDiscount(product._id);
                                const originalPrice = getOriginalPrice(product.price, discount);
                                
                                return (
                                    <div key={product._id} className="group flex flex-col">
                                        <div className="relative flex-1 flex flex-col">
                                            {/* Imagen con altura flexible */}
                                            <div className="relative flex-1 overflow-hidden bg-slate-100 min-h-[200px]">
                                                {/* Badge premium */}
                                                {discount > 0 && (
                                                    <div className="absolute top-4 left-4 z-20">
                                                        <div className="bg-slate-900 text-white px-3 py-2 text-xs font-light tracking-[0.1em]">
                                                            SAVE {discount}%
                                                        </div>
                                                    </div>
                                                )}

                                                <Link href={`/product/${product.slug}`}>
                                                    <Image
                                                        src={product.imageUrl}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                                        width={300}
                                                        height={400}
                                                    />
                                                </Link>

                                                {/* Overlay con controles */}
                                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500">
                                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                        <div className="flex gap-2">
                                                            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg">
                                                                <Heart className="w-4 h-4 text-slate-700" />
                                                            </button>
                                                            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg">
                                                                <Eye className="w-4 h-4 text-slate-700" />
                                                            </button>
                                                        </div>
                                                        <Link href={`/product/${product.slug}`}>
                                                            <button className="bg-slate-900 text-white px-4 py-2 text-xs font-light tracking-[0.05em] hover:bg-slate-800 transition-all">
                                                                VIEW
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Información del producto */}
                                            <div className="pt-4 flex-shrink-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs text-slate-500 uppercase tracking-[0.1em]">
                                                        {product.categoryName}
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star 
                                                                key={i} 
                                                                className={`w-3 h-3 ${i < 4 ? 'fill-slate-400 text-slate-400' : 'text-slate-200'}`} 
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <Link href={`/product/${product.slug}`}>
                                                    <h3 className="text-lg font-light text-slate-900 hover:text-slate-600 transition-colors mb-3 leading-tight line-clamp-2">
                                                        {product.name}
                                                    </h3>
                                                </Link>

                                                <div className="flex items-center gap-3">
                                                    <span className="text-lg font-light text-slate-900">
                                                        ${product.price}
                                                    </span>
                                                    {discount > 0 && (
                                                        <span className="text-sm text-slate-400 line-through">
                                                            ${originalPrice}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CTA elegante */}
                <div className="text-center mt-20">
                    <Link 
                        href="/all"
                        className="group inline-flex items-center gap-6 bg-slate-900 text-white px-12 py-4 hover:bg-slate-800 transition-all duration-300"
                    >
                        <span className="font-light tracking-[0.1em]">EXPLORE FULL COLLECTION</span>
                        <div className="w-12 h-px bg-white/30 group-hover:bg-white/60 transition-colors"></div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}