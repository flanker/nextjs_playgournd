import FormList from "@/components/dashboard/FormList";
import RandomNumber from "@/components/_shared/RandomNumber";
import WithCurrentUser from "@/loaders/currentUser/withCurrentUser";
import {fetchForms} from "@/lib/fetches";

export default async function HomePage() {

  const forms = await fetchForms()
  return (
    <div>
      <WithCurrentUser/>
      <RandomNumber/>
      <h2>我的表单</h2>
      <FormList forms={forms}/>
    </div>
  )
}
