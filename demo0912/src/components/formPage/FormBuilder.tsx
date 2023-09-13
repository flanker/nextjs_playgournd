'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchForm} from "@/lib/client_fetches";
import {FormBuilderPanel} from "@/components/formPage/FormBuilder/FormBuilderPanel";

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
      <FormBuilderPanel formData={data}/>
    </div>
  )
}
