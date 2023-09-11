import Forms from "@/app/forms/components/forms";

export default async function FormPage() {
  return (
    <div style={{backgroundColor: '#ccc', padding: '10px'}}>
      <p>Server Component: {Math.random()}</p>
      <h2>Forms Page</h2>
      <Forms>
      </Forms>
    </div>
  )
}
