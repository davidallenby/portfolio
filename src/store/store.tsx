import type { AppState } from '@interfaces/store.interfaces';
import { create } from 'zustand';

export const useStore = create<AppState>((set) => ({
	blogFilterTags: [],
	setBlogFilterTags: (tags) => set({ blogFilterTags: tags })
}));
