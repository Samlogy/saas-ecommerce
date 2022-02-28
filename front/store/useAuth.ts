import create, { SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Auth Store
type IAuth = {
    user: any,
    isLogged: boolean,
    logged: () => void,
    notLogged: () => void
}

let authStore = (set: SetState<IAuth>) => ({
    isLogged: false,
    user: {},
    logged: () => set((state: any) => ({ isLogged: true, user: state.user })),
    notLogged: () => set((state: any) => ({ isLogged: false, user: {} }))
}) 

authStore = devtools(authStore)
authStore = persist(authStore, { name: "auth_data" })

const useAuthStore = create<IAuth>(authStore);

export default useAuthStore;
