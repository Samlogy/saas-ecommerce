import create, { SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Auth Store
type IAuth = {
    user: any,
    isLogged: boolean,
    logged: (data: any) => void,
    notLogged: () => void
}

let authStore = (set: SetState<IAuth>) => ({
    isLogged: false,
    user: {},
    logged: (data: any) => set((state: any) => ({ isLogged: true, user: data })),
    notLogged: () => set((state: any) => ({ isLogged: false, user: {} }))
}) 

authStore = devtools(authStore)
authStore = persist(authStore, { name: "auth_data" })

const useAuth = create<IAuth>(authStore);

export default useAuth;
