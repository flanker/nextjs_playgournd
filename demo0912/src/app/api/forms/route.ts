import {NextResponse} from "next/server";
import {fetchForms} from "@/lib/server_fetches";

export async function GET() {
  await sleep()
  const data = fetchForms()
  return NextResponse.json({data})
}

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}
