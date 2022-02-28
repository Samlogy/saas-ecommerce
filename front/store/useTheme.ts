import create, { SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// Theme Mode Store
type ITheme = {
    mode: boolean,
    toggleDarkMode: () => void;
};

let themeStore = (set: SetState<ITheme>) => ({
    mode: false,
    toggleDarkMode: () => set((state) => ({ mode: !state.mode })),
}) 

themeStore = devtools(themeStore)
themeStore = persist(themeStore, { name: "theme_mode" })

const useThemeStore = create<ITheme>(themeStore)

export default useThemeStore;