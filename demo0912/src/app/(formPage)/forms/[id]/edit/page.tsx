import FormBuilder from "@/components/formPage/FormBuilder";

export default function FormEditPage({params}) {

  const {id} = params

  return (
    <div>
      <FormBuilder formId={id} />
    </div>
  )
}
