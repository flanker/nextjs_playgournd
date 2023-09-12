import {NextResponse} from "next/server";

export async function GET() {
  await sleep()
  const data = fetchForms()
  return NextResponse.json({data})
}

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function fetchForms() {
  return Array.from({length: 20}, (_, index) => {
    const id = index + 1
    return {
      id: id,
      token: `token-${id}`,
      name: `Form ${id}`,
      description: `Description for form ${id}`
    }
  })
}
