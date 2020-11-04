<template>
  <section>
    <login v-if="!$auth.loggedIn" />
    
    <v-app> 
      <v-container fill-height fluid>

        <v-layout row wrap align-center>
          <v-flex class="text-center">
            <h1 class="is-size-1 has-text-centered mb-6 pb-6">
              Select Project
            </h1>
            <v-autocomplete
              class="combobox"
              clearable
              hide-selected
              deletable-chips
              loader-height="1"
              small-chips
              dense
              outlined
              placeholder="Type Project"
              :items="getids()"
              :filter="filter"
              :menu-props="{'maxHeight': 140}"
            ></v-autocomplete>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
import _ from 'lodash'
import login from '~/pages/login.vue'
import { mapState } from 'vuex';

export default {
  middleware: ["auth"],
  components: {
    login
  },
  data () {
    return {
      autoselectMenu: false,
    }
  },
  async fetch({store}) {
    await store.dispatch('projects/fetchData', '/projects');
  },
  computed: {
    ...mapState({
      data: (state) => state.projects.data
    })
  },
  methods: {
    getids() {
      return _.map(this.data.projects.ResultSet.Result, 'ID')
    },
    filter (item, queryText, itemText) {
      const index = this.getids().indexOf(item)
      const hasValue = val => val != null ? val : ''
      const query = hasValue(queryText)

      const id = hasValue(itemText)
      const hasid = id.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1

      const secondary_id = hasValue(this.data.projects.ResultSet.Result[index].secondary_id)
      const hassecondary_id = secondary_id.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1

      const name = hasValue(this.data.projects.ResultSet.Result[index].name)
      const hasname = name.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1

      return hasid || hassecondary_id || hasname
    }
  }
}
</script>

<style scoped>
  .combobox {
    padding-left: 25vw;
    padding-right: 25vw;
  }
</style>