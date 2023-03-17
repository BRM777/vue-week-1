let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./img/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'
                variantColor: 'green',
                variantImage: "./img/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue'
                variantColor: 'blue',
                variantImage: "./img/vmSocks-blue-onWhite.jpg",
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        subtractionToCart(){
            if(this.cart){
                this.cart -=1;
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
})
0 comments on commit de32e43