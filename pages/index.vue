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
              v-model="selected"
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
              :menu-props="{ maxHeight: 140 }"
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <v-list-item-content>
                  <v-list-item-title
                    v-html="data.item.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="'Project ID: ' + data.item.ID"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-html="'Secondary ID: ' + data.item.secondary_ID"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
import _ from 'lodash'
import login from '~/pages/login.vue'
import { mapState } from 'vuex'

export default {
  middleware: ['auth'],
  components: {
    login
  },
  data() {
    return {
      autoselectMenu: false
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/fetchData', '/projects')
  },
  computed: {
    ...mapState({
      data: (state) => state.projects.data
    })
  },
  methods: {
    remove(item) {
      const index = this.selected.indexOf(item.name)
      if (index >= 0) this.selected.splice(index, 1)
    },
    getids() {
      return this.data.projects.ResultSet.Result
    },
    filter(item, queryText, itemText) {
      const index = _.map(this.data.projects.ResultSet.Result, 'ID').indexOf(item)
      const hasValue = (val) => (val != null ? val : '')
      const query = hasValue(queryText)

      const id = hasValue(itemText)
      const hasid =
        id
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1

      const secondary_id = hasValue(
        this.data.projects.ResultSet.Result[index].secondary_id
      )
      const hassecondary_id =
        secondary_id
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1

      const name = hasValue(this.data.projects.ResultSet.Result[index].name)
      const hasname =
        name
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1

      return hasid || hassecondary_id || hasname
    }
  }
}
</script>

<style scoped>
.combobox {
  padding-left: 20vw;
  padding-right: 20vw;
}
</style>
