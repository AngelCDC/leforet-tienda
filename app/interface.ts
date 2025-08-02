export interface simplifiedProduct{
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    sexoName: string;
    name: string;
}

export interface fullProduct{
    _id: string;
    images: any;
    price: number;
    slug: string;
    sexo: string;
    Categoria: string;
    name: string;
    description: string;
}