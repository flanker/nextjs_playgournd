import Form from "@/app/forms/[id]/components/form";
import Link from "next/link";

export default async function FormPage({params}: { params: { id: string } }) {
  const {id} = params

  return (
    <div style={{backgroundColor: '#ccc', padding: '10px'}}>
      <p>Server Component: {Math.random()}</p>
      <h2>Form Detail Page</h2>
      <Form formId={id}></Form>
      <p>
        <Link href={'/forms'}>Back to forms</Link>
      </p>
    </div>
  )
}
