let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./img/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: true,
        inventory: 100,
        onSale:true
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    }
})