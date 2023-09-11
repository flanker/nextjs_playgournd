'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForms} from "@/lib/fetches";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Forms({forms}) {

  const useForms = useQuery({
    queryKey: ['forms'],
    queryFn: fetchForms,
    initialData: forms,
    staleTime: 1000
  })

  const [randomNumber, setRandomNumber] = useState()

  useEffect(() => {
    setRandomNumber(Math.random())
  }, []);

  const {data, isLoading, error} = useForms

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{backgroundColor: '#eee'}}>
      <p>Client Component: {randomNumber}</p>
      <ul>
        {data.map((form) => (
          <li key={form.id}>
            <Link href={`/forms/${form.id}`}>{form.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
