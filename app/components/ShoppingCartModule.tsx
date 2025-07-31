"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart"
import { Button } from "@/components/ui/button";


export default function ShoppingCartModal(){

    const{cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice}= useShoppingCart();

    // Función para generar el mensaje de WhatsApp
    const generateWhatsAppMessage = () => {
        if (!cartDetails || !cartCount || cartCount === 0) return "";
        
        let message = "*Hola, me interesa realizar la siguiente compra:*%0a%0a";
        
        // Agregar cada producto del carrito
        Object.values(cartDetails).forEach((item, index) => {
            message += `*Producto ${index + 1}:*%0a`;
            message += `• *Nombre:* ${item.name}%0a`;
            message += `• *Cantidad:* ${item.quantity}%0a`;
            if (item.description) {
                message += `• *Descripción:* ${item.description}%0a`;
            }
            message += "%0a"; // Línea en blanco entre productos
        });
    
        message += "¡Espero tu respuesta!";
        
        return message;
    };

    const whatsappUrl = `https://wa.me/584120828474?text=${generateWhatsAppMessage()}`;

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                        {(cartCount ?? 0) === 0 ?(
                            <h1 className="py-6">You dont have any items</h1>
                            ):(
                                <>
                                {Object.values(cartDetails  ?? {}).map((entry) =>(
                                    <li key={entry.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border boder-gray-200">
                                            <Image src={entry.image as string}
                                            alt="Product"
                                            width={100}
                                            height={100}/>
                                        </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{entry.name}</h3>
                                                <p className="ml-4">{entry.price}$</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">QTY: {entry.quantity}</p>
                                            <div className="flex">
                                                <button type="button"
                                                onClick={()=> removeItem(entry.id)}
                                                className="font-medium text-primary hover:text-primary/80">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                ))}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal: </p>
                            <p>{totalPrice}$</p>
                        </div>
                        <div className="mt-6">
                            {(cartCount ?? 0) > 0 ? (
                                <Link href={whatsappUrl} className="w-full">
                                    <Button className="w-full">Checkout via WhatsApp</Button>
                                </Link>
                            ) : (
                                <Button className="w-full" disabled>Checkout</Button>
                            )}
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p><button onClick={()=> handleCartClick()} className="font-medium text-primary hover:text-primary/80">Continúa Comprando</button></p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}