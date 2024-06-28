import LocalStorageService, { generateToken } from '@/shared/composables/LocalStorageService';
import { defineStore, createPinia } from 'pinia'

const pinia = createPinia()

interface AuthState  {
    token: Nullable<string>

}

interface AppState {
    initialized : boolean
}
const storage = LocalStorageService.getService();

export const useAuth = defineStore('auth', {
  state: (): AuthState => ({
    token: 'dsadsasd321',
  }),
  getters: {
    isAuth(state) {
      return state.token
    },
  },
  actions: {
    setToken(token) {
      this.token = token
    },

    async login(credentials) {
        console.log({credentials})
        
        const newToken = await generateToken(credentials)
        storage.setToken(newToken);
        return newToken
    },
    async logout() {

        storage.reset()
        
    }
  },
});

export const rootProvider =  defineStore('app', {
    state: (): AppState => ({
      initialized: false,
    }),
    actions: {
      setInitializerApp(initialized) {
        this.initialized = initialized
      },
    },
  });


export default pinia