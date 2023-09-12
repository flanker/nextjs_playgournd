'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForm} from "@/lib/fetches";
import RandomNumber from "@/components/_shared/RandomNumber";

export default function FormBuilder({formId, form}) {

  const {data, isLoading, error} = useQuery({
    queryKey: ['forms', formId],
    queryFn: () => fetchForm(formId),
    initialData: form,
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
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
    </div>
  )
}
