"use client";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useState } from "react";
interface iAppProps{
    images: any
}

export default function ImageGallery({images}:iAppProps){
    const [bigImage, setbigImage] = useState(images[0]);

    const hanldeSmallImageClick = (image:any) =>{
        setbigImage(image);
    }
    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image:any,idx:any)=>(
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image src={urlFor(image).url()}
                        width={200}
                        height={200}
                        alt="Imagen"
                        className="h-full w-full object-cover object-center cursor-pointer"
                        onClick={()=> hanldeSmallImageClick(image)}/>
                    </div>
                ))}
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image src={urlFor(bigImage).url()} 
                alt="Imagen" 
                width={500} 
                height={500} 
                className="h-full w-full object-cover object-center"/>
            </div>
        </div>
    )
}