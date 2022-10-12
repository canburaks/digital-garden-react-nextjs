import create from "zustand"

export const useStore = create((set) => ({
    sidebarOpen: false,
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))
