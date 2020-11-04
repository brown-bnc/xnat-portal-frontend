export const state = () => ({
  data: []
});
export const mutations = {
  SET_DATA(state, payload) {
    state.data = payload;
  },
};
export const actions = {
  async fetchData({ commit }, route) {
    let projects = {}
    try{
      this.$axios.setHeader('Authorization', localStorage.getItem('auth._token.shib'))
      this.$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
      projects = await this.$axios.$get(route);
    }
    catch(err){
      console.log(err)
    }
    commit('SET_DATA', { projects });
  },
};