import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Products from '../components/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
  ]
})

// Add the beforeEach navigation guard
// router.beforeEach((to, from, next) => {
//   // Check if the searchQuery exists in the current query parameters
//   const searchQuery = router.currentRoute.query?.search || "";

//   // Add the searchQuery as a global query parameter to all routes
//   const query = { ...to.query, search: searchQuery };

//   // Navigate to the next route with the updated query
//   next({ ...to, query });
// });

export default router
