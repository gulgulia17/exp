<template>
  <Navbar @search="handleSearch" />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    handleSearch(searchQuery) {
      this.$router.push({ name: this.$route.name, query: { search: searchQuery } });
    }
  }
}
</script>
