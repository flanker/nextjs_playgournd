import {FormView} from "@/app/forms/[id]/components/form_view";

export default function FormPage({params}: { params: { id: string } }) {
  const {id} = params

  return (
    <div>
      <p>Server Component: {Math.random()}</p>
      <h2>Form Detail Page</h2>
      <FormView formId={id}></FormView>
    </div>
  )
}
