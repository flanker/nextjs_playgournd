'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForm} from "@/lib/fetches";
import RandomNumber from "@/components/_shared/RandomNumber";

export default function FormBuilder({formId}) {

  const {data, isLoading, error} = useQuery({
    queryKey: ['forms', formId],
    queryFn: () => fetchForm(formId),
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
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
    </div>
  )
}
