import { create } from "zustand";

interface CursorState {
  hovered: boolean;
  setHovered: (value: boolean) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  hovered: false,
  setHovered: (value) => set({ hovered: value }),
}));
