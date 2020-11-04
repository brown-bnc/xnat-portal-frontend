<template>
  <div>
    <DHero title="XNAT Portal" subtitle="Login to continue" full-height="true">
      <template #button>
        <DButton
          v-if="!$auth.loggedIn"
          name="Log in"
          variant="success"
          @click="login"
        />
        <DButton v-else name="Log out" variant="success" @click="logout" />
      </template>
    </DHero>
    <div class="level"></div>
  </div>
</template>

<script>
import { DHero, DButton } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DHero,
    DButton
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
    }
  }
}
</script>
