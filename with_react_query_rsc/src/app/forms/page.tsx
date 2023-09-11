import {fetchForms} from "@/lib/fetches";
import Forms from "@/app/forms/components/forms";

export default async function FormPage() {

  const forms = await fetchForms()

  return (
    <div style={{backgroundColor: '#ccc', padding: '10px'}}>
      <p>Server Component: {Math.random()}</p>
      <h2>Forms Page</h2>
      <Forms forms={forms}>
      </Forms>
    </div>
  )
}
