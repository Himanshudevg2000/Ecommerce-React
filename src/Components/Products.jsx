import ProductList from "./ProductList";

const Products = () => {

    const productsArr = [
        {
            id: 1,
            title: 'Purple tshirt',
            price: 549,
            imageUrl: 'https://images.bewakoof.com/t1080/men-s-purple-john-wick-graphic-printed-t-shirt-584908-1679395893-1.jpg',
        },
        {
            id: 2,
            title: 'White tshirt',
            price: 500,
            imageUrl: 'https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048273-1.jpg',
        },
        {
            id: 3,
            title: 'Black Color tshirt',
            price: 450,
            imageUrl: 'https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048495-1.jpg',
        },
        {
            id: 4,
            title: 'Gray Color tshirt',
            price: 600,
            imageUrl: 'https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034778-1.jpg',
        }
    ]

    const products = productsArr.map((product) => {
        return (
            <ProductList products={product} />
        )
    });

    return (
        <div>{products}</div>
    )
}

export default Products;