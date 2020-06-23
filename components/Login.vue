<template>
  <DButton v-if="!loggedIn" name="Log in" variant="success" @click="login" />
  <DButton v-else name="Log out" variant="success" @click="logout" />
</template>

<script>
import { DButton } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DButton
  },
  data: () => ({
    loggedIn: false
  }),
  methods: {
    async login() {
      try {
        await this.$auth.login()
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$auth.logout()
        this.$auth.loggedIn = false
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
