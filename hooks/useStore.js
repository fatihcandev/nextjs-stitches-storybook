import create from 'zustand'

const useStore = create((set, get) => ({
  theme: 'light',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
}))

export default useStore
