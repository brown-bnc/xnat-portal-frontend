<template>
  <div>
    <DButton
      v-if="!$auth.loggedIn"
      name="Log in"
      variant="success"
      @click="login"
    />
    <DButton v-else name="Log out" variant="success" @click="logout" />
  </div>
</template>

<script>
import { DButton } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DButton
  },
  data: () => ({
    token: {}
  }),
  mounted() {
    if (localStorage) {
      this.token = localStorage.getItem('auth._token.shib')
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('shib')
        this.formError = null
        this.loggedIn = true
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
