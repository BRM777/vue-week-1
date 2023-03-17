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
        <div class="product">
            <div class="product-image">
                <img :src="image" :alt="altText"/>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <product-details :details="details"></product-details>
                <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor:variant.variantColor }" @mouseover="updateProduct(index)"></div>
                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
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
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            altText: "A pair of socks",
            variants: [
                {
                    @@ -52,7 +54,6 @@ Vue.component('product', {
                        },
                        updateProduct(index) {
                    this.selectedVariant = index;
                    console.log(index);
                }
        },
            computed: {
        @@ -68,36 +69,30 @@ Vue.component('product', {
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
                    type: Boolean,
                    type: Array,
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
            `
})

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        details: true
    }
})
