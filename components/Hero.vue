<template>
  <div class="container">
    <DHero title="XNAT Portal" subtitle="Login to continue" />
  </div>
</template>

<script>
import { DHero } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DHero
  },
  methods: {
    async login() {
      await this.$auth.loginWith('shib')
    }
  }
}
</script>
