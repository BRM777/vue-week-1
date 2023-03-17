let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./img/vmSocks-green-onWhite.jpg",
        brand: 'Vue Mastery',
        selectedVariant: 0,
        cart: 0,
        altText: "A pair of socks",
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./img/vmSocks-green-onWhite.jpg",
                variantQuantity: 10,
                onSale: true,
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./img/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0,
                onSale: false,
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
            updateProduct(index) {
                this.selectedVariant = index;
                console.log(index);
            }
        },
        computed: {
            title() {
                if (this.variants[this.selectedVariant].onSale){
                    return this.brand + ' ' + this.product + ' ' + 'Sale';
                }else {
                    return this.brand + ' ' + this.product;
                }

            },
            image() {
                return this.variants[this.selectedVariant].variantImage;
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity;
            },
        }
    })