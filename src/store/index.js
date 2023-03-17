
import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
   state: {
      isAuth: false
   },
   mutations: {
      toggleLogin(state, isLogged) {
         state.isAuth = isLogged
      },
   },
   modules: {
      post: postModule
   }
});