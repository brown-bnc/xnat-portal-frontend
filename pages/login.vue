<template>
  <div class="container">
    <DHero title="XNAT Portal" subtitle="Login to continue" />
    <div class="level">
      <p class="level-item has-text-centered">
        <DButton name="Login" />
      </p>
    </div>
  </div>
</template>

<script>
import { DButton, DHero } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DButton,
    DHero
  },
  methods: {
    async login() {
      await this.$auth.loginWith('shib')
    }
  }
}
</script>
