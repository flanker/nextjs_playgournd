import FormBuilder from "@/components/formPage/FormBuilder";

export default async function FormEditPage({params}) {

  const {id} = params

  return (
    <div>
      <FormBuilder formId={id} />
    </div>
  )
}
