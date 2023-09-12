import FormList from "@/components/dashboard/FormList";
import RandomNumber from "@/components/_shared/RandomNumber";
import WithCurrentUser from "@/loaders/currentUser/withCurrentUser";

export default function HomePage() {
  return (
    <div>
      <WithCurrentUser/>
      <RandomNumber/>
      <h2>我的表单</h2>
      <FormList/>
    </div>
  )
}
