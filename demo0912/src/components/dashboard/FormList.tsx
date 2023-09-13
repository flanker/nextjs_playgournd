'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForms} from "@/lib/client_fetches";
import Link from "next/link";

export default function FormList({forms}) {

  const {data, isLoading, error} = useQuery({
    queryKey: ['forms', 'myForms'],
    queryFn: fetchForms,
    initialData: forms,
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
