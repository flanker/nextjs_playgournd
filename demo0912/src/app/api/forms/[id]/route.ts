import {NextResponse} from "next/server";

export async function GET(request: Request, {params}: { params: { id: string } }) {
  await sleep()
  const {id} = params
  const data = fetchForm(id)
  return NextResponse.json({data})
}

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function fetchForm(id: string) {
  return {
    id: id,
    token: `token-${id}`,
    name: `Form ${id}`,
    description: `Description for form ${id}`
  }
}
