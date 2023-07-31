<template>
    <div class="p-16">
        <h1 class="text-4xl font-bold text-blck-700 mb-4">Products Page</h1>
        <div class="py-8">
            <!-- Product Listing -->
            <div class="grid grid-cols-3 gap-4">
                <!-- Replace 'products' with your actual array of product objects -->
                <div v-for="product in filteredProducts" :key="product.id" class="bg-white p-4 rounded shadow-md">
                    <img :src="product.image" alt="Product" class="w-full h-40 object-cover rounded mb-4">
                    <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
                    <p class="text-gray-600 text-sm mb-2">{{ product.description }}</p>
                    <p class="text-blue-500 font-semibold">{{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: "",
            products: [
                {
                    id: 1,
                    name: "Toyota Corolla",
                    description: "A popular and reliable compact car.",
                    price: "$24,999",
                    image: "https://via.placeholder.com/300x200"
                },
                {
                    id: 2,
                    name: "Honda Civic",
                    description: "A well-known and fuel-efficient sedan.",
                    price: "$22,499",
                    image: "https://via.placeholder.com/300x200"
                },
                {
                    id: 3,
                    name: "Ford Mustang",
                    description: "A legendary American muscle car.",
                    price: "$34,999",
                    image: "https://via.placeholder.com/300x200"
                },
                {
                    id: 4,
                    name: "Chevrolet Camaro",
                    description: "Another iconic American muscle car.",
                    price: "$32,999",
                    image: "https://via.placeholder.com/300x200"
                },
                {
                    id: 5,
                    name: "BMW X5",
                    description: "A luxurious and powerful SUV.",
                    price: "$54,999",
                    image: "https://via.placeholder.com/300x200"
                },
                {
                    id: 6,
                    name: "Audi A4",
                    description: "A stylish and sporty sedan.",
                    price: "$38,999",
                    image: "https://via.placeholder.com/300x200"
                },
            ],
        };
    },
    computed: {
        filteredProducts() {
            if (typeof this.searchQuery === 'undefined') {
                return this.products; // If searchQuery is empty, return all products
            }

            if (this.searchQuery.trim() === "") {
                return this.products; // If searchQuery is empty, return all products
            }

            // Convert searchQuery to lowercase for case-insensitive matching
            const searchQueryLower = this.searchQuery.toLowerCase();

            // Use Array.filter() to filter products based on searchQuery
            return this.products.filter((product) => {
                const productNameLower = product.name.toLowerCase();
                const productDescriptionLower = product.description.toLowerCase();

                // Return true if product name or description contains the searchQuery
                return productNameLower.includes(searchQueryLower) || productDescriptionLower.includes(searchQueryLower);
            });
        }
    },
    watch: {
        '$route.query.search'(newSearchQuery, oldSearchQuery) {
            this.handleSearchQueryChange(newSearchQuery);
        }
    },
    created() {
        this.handleSearchQueryChange(this.$route.query.search || "");
    },
    methods: {
        handleSearchQueryChange(searchQuery) {
            this.searchQuery = searchQuery;
        },
    },
};
</script>

<style>
/* Add any custom styles for the Products component here */
</style>
