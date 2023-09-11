import create from 'zustand'
import { FormSlice, createFormSlice } from './slices/createFormSlice'

type StoreState = FormSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createFormSlice(...a),
}))

