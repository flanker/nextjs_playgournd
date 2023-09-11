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
    return {
      id: index + 1,
      token: `token-${index + 1}`,
      name: `Form ${index + 1}`,
    }
  })
}
