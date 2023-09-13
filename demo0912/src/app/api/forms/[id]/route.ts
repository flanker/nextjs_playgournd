import {NextResponse} from "next/server";
import {fetchForm} from "@/lib/server_fetches";

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
    }, 500)
  })
}
