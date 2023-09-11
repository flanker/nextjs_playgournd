'use client'

import {useAppStore} from "@/lib/store";
import {useEffect, useState} from "react";

export function FormView(props: { formId: string }) {
  const {forms, fetchForms, formById, updateForm} = useAppStore()

  const [form, setForm] = useState(formById(props.formId));

  useEffect(() => {
    if (!forms.length) {
      fetchForms()
      setForm(formById(props.formId))
    }
  }, [fetchForms, forms.length])

  return (
    <div>
      {form ? (
        <ul>
          <li>ID: {form.id}</li>
          <li>Name: {form.name}</li>
          <li>Token: {form.token}</li>
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}
