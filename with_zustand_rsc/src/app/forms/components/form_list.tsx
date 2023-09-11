'use client'

import Link from "next/link";
import {useFormsContext} from "@/lib/store";
import {useEffect, useState} from "react";

export default function FormList() {

  const forms = useFormsContext((s) => s.forms)

  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    setRandomNumber(Math.random())
  }, []);

  return (
    <div>
      <p>Client Component: {randomNumber}</p>
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
