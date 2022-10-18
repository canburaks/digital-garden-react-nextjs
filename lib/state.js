import create from "zustand"

export const useStore = create((set) => ({
    sidebarOpen: true,
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))
