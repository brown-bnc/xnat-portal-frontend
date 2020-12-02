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
    let projects
    this.$axios.setHeader('Authorization', localStorage.getItem('auth._token.shib'))
    this.$axios.setHeader('Content-Type', 'application/json')
    try{
      projects = await this.$axios.$get(route);
      console.log(projects)
    }
    catch(err){
      // console.log(err.response.data.json())
    }
    commit('SET_DATA', { projects });
  },
};