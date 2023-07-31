<template>
    <div>
        <!-- Image Slider Section -->
        <div class="relative">
            <div class="slider-wrapper">
                <div class="slider">
                    <div v-for="(image, index) in carImages" :key="index"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }" class="slide">
                        <img :src="getImageUrl(image)" alt="Car Image" class="mx-auto w-100 h-auto object-contain">
                    </div>
                </div>
            </div>
            <div class="flex absolute inset-y-0 justify-between items-center w-full">
                <button @click="prevSlide" class="left-arrow">&#8249;</button>
                <button @click="nextSlide" class="right-arrow">&#8250;</button>
            </div>
        </div>

        <!-- About Section with Grid -->
        <div class="grid md:grid-cols-2 gap-8 mt-12 p-16">
            <div class="flex flex-col justify-start">
                <h2 class="text-2xl font-bold mb-4">About Us</h2>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, massa id
                    interdum ullamcorper, sapien erat consequat purus, nec consectetur ligula justo nec nulla. Vestibulum ac
                    tortor id nulla sagittis gravida. Cras ut eros eget mauris sodales euismod. Donec lacinia urna ipsum, et
                    consectetur velit euismod non. Etiam eget commodo purus. Integer ullamcorper velit vitae felis
                    consectetur, eu pulvinar purus lobortis.</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, massa id
                    interdum ullamcorper, sapien erat consequat purus, nec consectetur ligula justo nec nulla. Vestibulum ac
                    tortor id nulla sagittis gravida. Cras ut eros eget mauris sodales euismod. Donec lacinia urna ipsum, et
                    consectetur velit euismod non. Etiam eget commodo purus. Integer ullamcorper velit vitae felis
                    consectetur, eu pulvinar purus lobortis.</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, massa id
                    interdum ullamcorper, sapien erat consequat purus, nec consectetur ligula justo nec nulla. Vestibulum ac
                    tortor id nulla sagittis gravida. Cras ut eros eget mauris sodales euismod. Donec lacinia urna ipsum, et
                    consectetur velit euismod non. Etiam eget commodo purus. Integer ullamcorper velit vitae felis
                    consectetur, eu pulvinar purus lobortis.</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, massa id
                    interdum ullamcorper, sapien erat consequat purus, nec consectetur ligula justo nec nulla. Vestibulum ac
                    tortor id nulla sagittis gravida. Cras ut eros eget mauris sodales euismod. Donec lacinia urna ipsum, et
                    consectetur velit euismod non. Etiam eget commodo purus. Integer ullamcorper velit vitae felis
                    consectetur, eu pulvinar purus lobortis.</p>

            </div>
            <div class="flex flex-col items-center justify-center p-8">
                <img :src="aboutImageUrl" alt="About" class="w-full h-auto object-contain">
            </div>
        </div>

        <Product />
    </div>
</template>

<script>
import Product from '@/components/Products.vue';

export default {
    components: {
        Product, // Register the Product component
    },
    data() {
        return {
            carImages: [1011, 1022, 1042, 1053], // Random image IDs from picsum.photos
            currentIndex: 0,
            aboutImageId: 1015, // Random image ID for the About section
        };
    },
    computed: {
        aboutImageUrl() {
            return 'https://picsum.photos/id/1015/350/200'
        },
    },
    methods: {
        getImageUrl(imageId) {
            return `https://picsum.photos/id/${imageId}/1024/580`;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.carImages.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.carImages.length) % this.carImages.length;
        },
    },
};
</script>

<style>
.slider-wrapper {
    overflow: hidden;
}

.slider {
    display: flex;
    transition: transform 0.3s ease;
}

.slide {
    min-width: 100%;
}

.left-arrow,
.right-arrow {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.left-arrow:hover,
.right-arrow:hover {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
