<template>
  <section class="section">
    <Nav />
  </section>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  auth: false,
  components: {
    Nav
  },
  methods: {
    login() {
      this.$auth.logout()
    }
  }
}
</script>
