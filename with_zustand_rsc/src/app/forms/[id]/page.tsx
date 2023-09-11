import {fetchForm} from "@/lib/fetches";
import Link from "next/link";

export default async function FormPage({params}: { params: { id: string } }) {

  const {id} = params
  const data = await fetchForm(id)

  return (
    <main>
      <p>Server Component: {Math.random()}</p>
      <h2>Form Detail Page</h2>
      <ul>
        <li>Form id: {data.id}</li>
        <li>Form token: {data.token}</li>
        <li>Form name: {data.name}</li>
      </ul>
      <Link href={'/forms'}>Back to list</Link>
    </main>
  )
}
