'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForm} from "@/lib/fetches";

export default function Form(props: { formId }) {
  const {formId} = props

  const useForm = useQuery({
    queryKey: ['forms', formId],
    queryFn: () => fetchForm(formId),
    staleTime: 1000
  })

  const {data, isLoading, error} = useForm

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{backgroundColor: '#eee'}}>
      <p>Client Component: {Math.random()}</p>
      <ul>
        <ul>id: {data.id}</ul>
        <ul>name: {data.name}</ul>
        <ul>token: {data.token}</ul>
      </ul>
    </div>
  )
}
