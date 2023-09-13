'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForm} from "@/lib/client_fetches";
import RandomNumber from "@/components/_shared/RandomNumber";

export default function FormBuilder({formId}) {

  const {data, isLoading} = useQuery({
    queryKey: ['forms', formId],
    queryFn: () => fetchForm(formId),
    staleTime: 1000
  })

  if (isLoading) {
    return <div>RQ Loading...</div>
  }

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>
    </div>
  )
}
