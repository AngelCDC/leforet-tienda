export default {
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
            name:`category`,
            title: `Categoria del Producto`,
            type: `reference`,
            to: [{
                type: `category`,
            }]
        },
    ],
}