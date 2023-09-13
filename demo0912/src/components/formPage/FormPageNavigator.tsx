'use client'

import RandomNumber from "@/components/_shared/RandomNumber";
import Link from "next/link";
import UserInfo from "@/components/formPage/FormPageNavigator/UserInfo";
import {fetchForm} from "@/lib/client_fetches";
import {useQuery} from "@tanstack/react-query";

export default function FormPageNavigator({formId}) {

  const { data, isLoading } = useQuery({
    queryKey: ['forms', formId],
    queryFn: () => fetchForm(formId),
    staleTime: 5000
  })

  if (isLoading) {
    return <div>RQ Loading...</div>
  }

  return (
    <div>
      <RandomNumber/>
      <h2>{data.name}</h2>
      <div>
        <div>
          <Link href={'/home'}>Back</Link>
          <Link href={`/forms/${data.id}/edit`} style={{margin: '10px'}}>Edit</Link>
          <Link href={`/forms/${data.id}/entries`} style={{margin: '10px'}}>Entries</Link>
          <Link href={`/forms/${data.id}/setting`} style={{margin: '10px'}}>Setting</Link>
        </div>
        <UserInfo/>
      </div>
    </div>
  )
}
