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
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <p>Shipping: {{ shipping }}</p>
                <product-details :details="details"></product-details>
                <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor:variant.variantColor }" @mouseover="updateProduct(index)"></div>
                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
                 <button v-on:click="subtractionToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Subtraction to cart</button>
            </div>
        </div>
 `,
        @@ -29,8 +29,8 @@ Vue.component('product', {
            product: "Socks",
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            altText: "A pair of socks",
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
                    variantQuantity: 5
                }
            ],
            cart: 0
        }
    },
    methods: {
    addToCart() {
        this.cart += 1;
        this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    subtractionToCart(){
        this.$emit('subtraction-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
        this.selectedVariant = index;
        console.log(index);
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product;
    },
    image() {
        return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantity;
        return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
        if (this.premium) {
            return "Free";
        } else {
            return 2.99
        }
        return 2.99;
    }
}
})

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
 `
})

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        subtractionCart(id){
            for(let i = this.cart.length - 1; i >= 0; --i) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})
