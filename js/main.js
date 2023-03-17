let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        selectedVariant: 0,
        cart: 0,
        altText: "A pair of socks",
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
        Vue.component('product', {
            props: {
                premium: {
                    type: Boolean,
                    required: true
                }
            },
            template: `
   <div class="product">
        <div class="product-image">
            <img :src="image" :alt="altText"/>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor:variant.variantColor }" @mouseover="updateProduct(index)"></div>
        </div>
        <div class="cart">
            <p>Cart({{ cart }})</p>
        </div>
        <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
   </div>
 `,
            data() {
                return {
                    product: "Socks",
                    brand: 'Vue Mastery',
                    selectedVariant: 0,
                    altText: "A pair of socks",
                    variants: [
                        {
                            variantId: 2234,
                            variantColor: 'green',
                            variantImage: "./img/vmSocks-green-onWhite.jpg",
                            variantQuantity: 10
                        },
                        {
                            variantId: 2235,
                            variantColor: 'blue',
                            variantImage: "./img/vmSocks-blue-onWhite.jpg",
                            variantQuantity: 0
                        }
                    ],
                    cart: 0
                }
            },
            methods: {
                addToCart() {
                    this.cart += 1
                    this.cart += 1;
                },
                updateProduct(index) {
                    this.selectedVariant = index;
                @@ -35,18 +57,48 @@ let app = new Vue({
                        },
                        computed: {
                        title() {
                            if (this.variants[this.selectedVariant].onSale){
                                return this.brand + ' ' + this.product + ' ' + 'Sale';
                            }else {
                                return this.brand + ' ' + this.product;
                            }

                            return this.brand + ' ' + this.product;
                        },
                        image() {
                            return this.variants[this.selectedVariant].variantImage;
                        },
                        inStock(){
                            inStock() {
                                return this.variants[this.selectedVariant].variantQuantity;
                            },
                            shipping() {
                                if (this.premium) {
                                    return "Free";
                                } else {
                                    return 2.99
                                }
                            }
                        }
                    })
                    Vue.component('product-details', {
                        props: {
                            details: {
                                type: Boolean,
                                required: true
                            }
                        },
                        template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
 `,
                        data() {
                            return {
                                details: ['80% cotton', '20% polyester', 'Gender-neutral'],
                            }
                        },
                    })

                    let app = new Vue({
                        el: '#app',
                        data: {
                            premium: true,
                            details: true
                        }
                    })