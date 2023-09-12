import FormPageNavigator from "@/components/formPage/FormPageNavigator";

export default function Layout({children, params}) {
  const {id} = params

  return (
    <div style={{height: '100vh'}}>
      <div style={{height: '150px', backgroundColor: '#f1f1f1'}}>
        <FormPageNavigator formId={id}/>
      </div>
      <div style={{height: '100%', backgroundColor: '#fff'}}>
        {children}
      </div>
    </div>
  )
}
