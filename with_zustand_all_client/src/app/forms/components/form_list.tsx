'use client'

import Link from "next/link";
import {useEffect} from "react";
import {useAppStore} from "@/lib/store";

export default function FormList() {

  const {forms, fetchForms} = useAppStore()

  useEffect(() => {
    if (!forms.length) {
      fetchForms()
    }
  }, [fetchForms, forms.length])

  return (
    <div>
      <p>Client Component: {Math.random()}</p>
      {forms.length ? (
        <ul>
          {forms.map((form: any) => (
            <li key={form.id}>
              <Link href={`/forms/${form.id}`}>{form.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}
