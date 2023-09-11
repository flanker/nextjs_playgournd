import Forms from "@/app/forms/components/forms";
import {FormsProvider} from "@/app/forms/forms_provider";
import {fetchForms} from "@/lib/fetches";

export default async function FormsPage() {
  const data = await fetchForms()

  return (
    <div>
      <p>Server Component: {Math.random()}</p>
      <h2>Forms Page</h2>
      <FormsProvider forms={data}>
        <Forms></Forms>
      </FormsProvider>
    </div>
  )
}
