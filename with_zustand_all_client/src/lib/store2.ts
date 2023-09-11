import {createStore, useStore} from "zustand";
import {createContext, useContext} from "react";

export interface Form {
  id: string;
  name: string;
  token: string;
  description: string;
  entries_count: number;
}

export interface FormsState {
  forms: Form[];
  setForms: (forms: Form[]) => void;
}

export type FormsStore = ReturnType<typeof createFormsStore>

export const createFormsStore = (initProps?: Partial<Form[]>) => {
  return createStore<FormsState>()((set) => ({
    ...{forms: []},
    ...initProps,
    setForms: (forms: Form[]) => set((state) => ({forms: forms}))
  }))
}

export const FormsContext = createContext<FormsStore | null>(null)

export function useFormsContext<T>(selector: (state: FormsState) => T): T {
  const store = useContext(FormsContext)
  if (!store) throw new Error('Missing BearContext.Provider in the tree')
  return useStore(store, selector)
}
