'use client'

import {useQuery} from "@tanstack/react-query";
import {fetchCurrentUser} from "@/lib/fetches";

export default function PlanInfo() {

  const {data, status, isLoading, error} = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
    staleTime: 5000
  })

  console.log("-----------------")
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
      <p>{data.current_plan}</p>
    </div>
  )
}
