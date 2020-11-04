<template>
  <section>
    Select Projects
    <p>
      {{ data }}
    </p>

    <v-app>
      <v-combobox
        clearable
        hide-selected
        persistent-hint
        small-chips
        :items="items"
      ></v-combobox>
    </v-app>
  </section>
</template>

<script>
import Nav from '~/components/Nav.vue'
import { mapState } from 'vuex';

export default {
  auth: false,
  async fetch({store}) {
      // this.user = await this.$axios.$get('http://localhost:4000/projects/')
      // console.log(this.user)

    await store.dispatch('projects/fetchData', '/projects');
  },
  components: {
    Nav
  },
  mounted() {
    if (localStorage) {
      this.token = localStorage.getItem('auth._token.shib')
    }
  },
  computed: {
    ...mapState({
      data: (state) => state.projects.data
    })
  },
  data() {
    return {
      user: {},
      token: {},
      items: this.user
    }
  },
  fetchOnServer: false,
  methods: {
    login() {
      this.$auth.logout()
    }
  }
}
</script>
