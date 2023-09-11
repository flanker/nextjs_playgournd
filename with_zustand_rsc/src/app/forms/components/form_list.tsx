'use client'

import Link from "next/link";
import {useFormsContext} from "@/lib/store";

export default function FormList() {

  const forms = useFormsContext((s) => s.forms)

  return (
    <div>
      <p>Client Component: {Math.random()}</p>
      <ul>
        {forms.map((form: any) => (
          <li key={form.id}>
            <Link href={`/forms/${form.id}`}>{form.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
