'use client'

import {PropsWithChildren, useRef} from 'react'
import {createFormsStore, Form, FormsContext, FormsStore} from "@/lib/store";

type FormsProviderProps = PropsWithChildren<Form[]>

export function FormsProvider({children, ...props}: FormsProviderProps) {
  const storeRef = useRef<FormsStore>()
  if (!storeRef.current) {
    storeRef.current = createFormsStore(props)
  }
  return (
    <FormsContext.Provider value={storeRef.current}>
      {children}
    </FormsContext.Provider>
  )
}
