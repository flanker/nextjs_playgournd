import RandomNumber from "@/components/_shared/RandomNumber";
import FormList from "@/components/dashboard/FormList";

export default function HomePage() {
  return (
    <div>
      <RandomNumber/>
      <h2>与我共享</h2>
      <FormList/>
    </div>
  )
}
