import Vue from 'vue'
import Vuex from 'vuex'
import PhoneBook from './modules/PhoneBook'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        PhoneBook,
    }
})
