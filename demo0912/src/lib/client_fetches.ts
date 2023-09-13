export async function fetchForms() {
  const res = await fetch('http://localhost:3000/api/forms')
  const json = await res.json()
  return json.data
}

export async function fetchForm(id: string) {
  const res = await fetch(`http://localhost:3000/api/forms/${id}`)
  const json = await res.json()
  return json.data
}

export async function fetchCurrentUser() {
  const currentUserId = '1'
  const res = await fetch(`http://localhost:3000/api/users/${currentUserId}`)
  const json = await res.json()
  return json.data
}

export async function saveForm(form: any) {
  const res = await fetch(`http://localhost:3000/api/forms/${form.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  const json = await res.json()
  return json.data
}
