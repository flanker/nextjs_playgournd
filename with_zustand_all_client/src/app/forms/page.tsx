import FormList from "@/app/forms/components/form_list";

export default async function FormsPage() {
  return (
    <div>
      <p>Server Component: {Math.random()}</p>
      <h2>Forms Page</h2>
      <FormList></FormList>
    </div>
  )
}
