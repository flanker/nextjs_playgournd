'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForms} from "@/lib/fetches";
import Link from "next/link";
import RandomNumber from "@/components/_shared/RandomNumber";

export default function FormList() {

  const {data, isLoading, error} = useQuery({
    queryKey: ['forms', 'myForms'],
    queryFn: fetchForms,
    staleTime: 1000
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <RandomNumber/>
      <ul>
        {data.map((form) => (
          <li key={form.id}>
            <Link href={`/forms/${form.id}/edit`}>{form.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
