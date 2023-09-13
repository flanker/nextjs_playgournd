import {createStore} from "zustand";

export const createFormStore = () => {
  return createStore(set => ({
    form: {
      id: '',
      name: '',
      description: '',
    },
    initData: (data: any) =>
      set({form: data}),
      // set(() => {
      //   return data
      // }),
    changeName: (value: string) =>
      set((state: any) => {
        state.form.name = value
        return JSON.parse(JSON.stringify(state))
      }),
    changeDescription: (value: string) =>
      set((state: any) => {
        state.form.description = value
        return JSON.parse(JSON.stringify(state))
      }),
  }))
}
