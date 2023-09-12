import RandomNumber from "@/components/_shared/RandomNumber";
import Link from "next/link";

export default function FormPageNavigator() {
  return (
    <div>
      <RandomNumber/>
      <h2>Form Page Navigator</h2>
      <p>
        <Link href={'/home'}>Back to home page</Link>
        User Name
      </p>
    </div>
  )
}
