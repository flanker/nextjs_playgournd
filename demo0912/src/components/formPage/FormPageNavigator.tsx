import RandomNumber from "@/components/_shared/RandomNumber";
import Link from "next/link";
import UserInfo from "@/components/formPage/FormPageNavigator/UserInfo";

export default function FormPageNavigator({form}) {
  return (
    <div>
      <RandomNumber/>
      <h2>{form.name}</h2>
      <div>
        <div>
          <Link href={'/home'}>Back</Link>
          <Link href={`/forms/${form.id}/edit`} style={{margin: '10px'}}>Edit</Link>
          <Link href={`/forms/${form.id}/entries`} style={{margin: '10px'}}>Entries</Link>
          <Link href={`/forms/${form.id}/setting`} style={{margin: '10px'}}>Setting</Link>
        </div>
        <UserInfo/>
      </div>
    </div>
  )
}
