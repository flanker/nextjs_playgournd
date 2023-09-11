export async function fetchForms() {
  const res = await fetch('http://localhost:3000/api/forms')
  const result = await res.json()
  return result.data
}

export async function fetchForm(id: string) {
  const res = await fetch(`http://localhost:3000/api/forms/${id}`)
  const result = await res.json()
  return result.data
}
