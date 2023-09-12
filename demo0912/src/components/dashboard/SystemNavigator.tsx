import Link from "next/link";
import RandomNumber from "@/components/_shared/RandomNumber";
import UserInfo from "@/components/dashboard/SystemNavigator/UserInfo";
import PlanInfo from "@/components/dashboard/SystemNavigator/PlanInfo";

export default function SystemNavigator() {
  return (
    <div>
      <RandomNumber/>
      <h2>金数据</h2>
      <UserInfo/>
      <PlanInfo/>
      <ul>
        <li>
          <Link href={'/home'}>我的表单</Link>
        </li>
        <li>
          <Link href={'/shared'}>与我共享</Link>
        </li>
      </ul>
    </div>
  )
}
