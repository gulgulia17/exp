<template>
    <nav class="bg-gray-800 p-4 sticky top-0 z-10">
        <div class="container mx-auto flex items-center justify-between">
            <div class="flex items-center">
                <router-link to="/" class="text-white font-bold text-xl mr-4">My Website</router-link>
                <router-link to="/products" class="text-white hover:text-gray-300">Products</router-link>
            </div>
            <div class="flex items-center relative">
                <input type="text" v-model="searchQuery" @input="handleSearch" @blur="hideSuggestions"
                    class="rounded-lg py-2 px-4 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Search Products">
                <!-- Suggestions List -->
                <ul v-if="showSuggestions"
                    class="absolute bg-white border rounded-lg top-12 w-full max-h-48 overflow-y-auto z-10">
                    <li v-for="suggestion in filteredSuggestions" :key="suggestion.id"
                        class="px-4 py-2 cursor-pointer hover:bg-gray-100" @click="selectSuggestion(suggestion)">
                        {{ suggestion.name }}
                    </li>
                </ul>
                <!-- Add any other elements you want in the navbar here -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: "",
            showSuggestions: false,
            cars: [
                { id: 1, name: "Toyota Corolla" },
                { id: 2, name: "Honda Civic" },
                { id: 3, name: "Ford Mustang" },
                { id: 4, name: "Chevrolet Camaro" },
                { id: 5, name: "BMW X5" },
                { id: 6, name: "Audi A4" },
                // Add more cars to the dataset as needed
            ],
        };
    },
    computed: {
        filteredSuggestions() {
            return this.cars.filter((car) =>
                car.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        handleSearch() {
            if (this.searchQuery.length >= 3) {
                this.showSuggestions = true;
            } else {
                this.showSuggestions = false;
            }

        },
        hideSuggestions() {
            // this.showSuggestions = false;
        },
        selectSuggestion(suggestion) {
            this.searchQuery = suggestion.name;
            this.showSuggestions = false;
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>

<style>
/* Add any custom styles for the Navbar here */
</style>
