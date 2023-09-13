import FormList from "@/components/dashboard/FormList";
import RandomNumber from "@/components/_shared/RandomNumber";
import {fetchForms} from "@/lib/client_fetches";

export default async function HomePage() {

  const forms = await fetchForms()
  return (
    <div>
      <RandomNumber/>
      <h2>我的表单</h2>
      <FormList forms={forms}/>
    </div>
  )
}
