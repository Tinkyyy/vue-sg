<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/layouts/header.vue'
import Footer from '~/layouts/footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  }
}
</script>
