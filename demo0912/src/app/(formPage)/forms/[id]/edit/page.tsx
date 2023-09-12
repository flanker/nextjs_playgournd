import FormBuilder from "@/components/formPage/FormBuilder";
import {fetchForm} from "@/lib/fetches";

export default async function FormEditPage({params}) {
  const {id} = params
  const form = await fetchForm(id)
  return (
    <div>
      <h2>{form.name}</h2>
      <FormBuilder formId={id} form={form}/>
    </div>
  )
}
