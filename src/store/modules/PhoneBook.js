const state = {
    PhoneBook:[]
}
const getter = {

}
const mutations = {
    // newPhoneBook: (state, todo) => state.todos.unshift(todo),
}
const actions = {
    async addPB({
        commit
    },title) {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            title,
            completed: false
        });
        commit('newPhoneBook', response.data)
    }
}
export default {
    state,
    getter,
    mutations,
    actions
}