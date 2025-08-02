// OPCIÓN 1: Array de referencias a subcategorías
import {defineType} from 'sanity'

export default defineType({
    name: `product`,
    type: `document`,
    title: `Product`,
    fields: [
        {
            name: `name`,
            type: `string`,
            title: `Nombre del Producto`,
        },
        {
            name: `images`,
            type: `array`,
            title: `Product Images`,
            of: [{type:`image`}],
        },
        {
            name: `description`,
            type: `text`,
            title: `Descripcion del producto`,
        },
        {
            name: `slug`,
            type: `slug`,
            title: `Product Slug`,
            options:{
                source: `name`
            }
        },
        {
            name: `price`,
            type: `number`,
            title: `Price`,
        },
        {
            name:`sexo`,
            title: `Sexo del Producto`,
            type: `reference`,
            to: [{
                type: `category`,
            }]
        },
        {
            name:`categories`,
            title: `Categorias del Producto`,
            type: `array`,
            of: [{
                type: `reference`,
                to: [{
                    type: `category`,
                }]
            }],
            description: `Selecciona todas las categorías que apliquen: Perfumes, Oferta, Tendencia, etc.`
        },
    ],
})