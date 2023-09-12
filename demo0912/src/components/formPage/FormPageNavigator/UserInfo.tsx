'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchCurrentUser} from "@/lib/fetches";

export default function UserInfo() {

  const {data, status, isLoading, error} = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
    staleTime: 5000
  })

  console.log("UserInfo")
  console.log("status", status)
  console.log("loading", isLoading)
  console.log("data", data)

  if (isLoading) {
    return <div>RQ Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}
