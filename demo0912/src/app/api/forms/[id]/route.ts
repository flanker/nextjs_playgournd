import {NextResponse} from "next/server";
import {fetchForm, saveForm} from "@/lib/server_fetches";

export async function GET(request: Request, {params}: { params: { id: string } }) {
  await sleep()
  const {id} = params
  const data = fetchForm(id)
  return NextResponse.json({data})
}

export async function PATCH(req: Request) {
  const form = await req.json()
  saveForm(form.id, form)
  return NextResponse.json({data: form})
}

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}
