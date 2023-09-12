import {fetchCurrentUser} from "@/lib/fetches";
import WithCurrentUserQuery from "./withCurrentUserQuery";

export default async function WithCurrentUser() {
  const currentUser = await fetchCurrentUser()

  return (
    <WithCurrentUserQuery currentUser={currentUser}/>
  )
}
