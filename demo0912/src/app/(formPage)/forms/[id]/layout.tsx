import FormPageNavigator from "@/components/formPage/FormPageNavigator";
import {fetchForm} from "@/lib/fetches";

export default async function Layout({children, params}) {
  const {id} = params
  const form = await fetchForm(id)

  return (
    <div style={{height: '100vh'}}>
      <div style={{height: '150px', backgroundColor: '#f1f1f1'}}>
        <FormPageNavigator form={form}/>
      </div>
      <div style={{height: '100%', backgroundColor: '#fff'}}>
        {children}
      </div>
    </div>
  )
}
