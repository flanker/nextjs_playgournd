import {StateCreator} from "zustand";
import {fetchForms} from "@/lib/fetches";

export interface Form {
  id: string;
  name: string;
  token: string;
  description: string;
  entries_count: number;
}

export interface FormSlice {
  forms: Form[];
  setForms: (forms: Form[]) => void;
  fetchForms: () => void;
  updateForm: (newForm: Form) => void;
  formById: (token: string) => Form | undefined;
}

export const createFormSlice: StateCreator<FormSlice> = (set, get) => ({
  forms: [],
  setForms: (forms: Form[]) => set({forms}),
  updateForm: (newForm: Form) => {
    set((slice) => {
      return {
        forms: slice.forms.map((form: Form) => (form.id === newForm.id ? newForm : form))
      }
    })
  },
  fetchForms: async () => {
    const forms = await fetchForms()
    set({forms: forms})
  },
  formById: (id: string) => {
    const forms = get().forms
    return forms.find((form: Form) => form.id === id)
  }
})
