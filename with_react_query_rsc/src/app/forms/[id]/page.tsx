import {fetchForm} from "@/lib/fetches";
import Form from "@/app/forms/[id]/components/form";
import Link from "next/link";

export default async function FormPage({params}: { params: { id: string } }) {
  const {id} = params
  const form = await fetchForm(id)

  return (
    <div style={{backgroundColor: '#ccc', padding: '10px'}}>
      <p>Server Component: {Math.random()}</p>
      <h2>Form</h2>
      <Form form={form} formId={id}></Form>
      <p>
        <Link href={'/forms'}>Back to forms</Link>
      </p>
    </div>
  )
}
