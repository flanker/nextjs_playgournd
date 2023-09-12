import {fetchCurrentUser} from "@/lib/fetches";
import WithCurrentUserQuery from "./withCurrentUserQuery";

export default async function WithCurrentUser({children}) {
  const currentUser = await fetchCurrentUser()

  return (
    <WithCurrentUserQuery currentUser={currentUser}>
      {children}
    </WithCurrentUserQuery>
  )
}
