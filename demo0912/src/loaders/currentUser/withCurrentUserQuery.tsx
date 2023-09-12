'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchCurrentUser} from "@/lib/fetches";

export default function WithCurrentUserQuery({children, currentUser}) {
  const {data, status, isLoading} = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
    initialData: currentUser,
    staleTime: 5000
  })

  console.log("-----------------")
  console.log("WithCurrentUserQuery")
  console.log("status", status)
  console.log("loading", isLoading)
  console.log("data", data)
  console.log("currentUser", currentUser)
  console.log(typeof(window) == undefined)

  return (
    <>
      {children}
    </>
  )
}
