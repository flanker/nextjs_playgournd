import {NextResponse} from "next/server";

export async function GET(request: Request, {params}: { params: { id: string } }) {
  await sleep()
  const {id} = params
  const data = fetchUser(id)
  return NextResponse.json({data})
}

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function fetchUser(id: string) {
  return {
    id: id,
    name: `User ${id}`,
    current_plan: 'Pro'
  }
}
