import RandomNumber from "@/components/_shared/RandomNumber";
import Link from "next/link";
import UserInfo from "@/components/formPage/FormPageNavigator/UserInfo";

export default function FormPageNavigator() {
  return (
    <div>
      <RandomNumber/>
      <h2>Form Page Navigator</h2>
      <div>
        <Link href={'/home'}>Back to home page</Link>
        <UserInfo/>
      </div>
    </div>
  )
}
