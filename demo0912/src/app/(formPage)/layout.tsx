import FormPageNavigator from "@/components/formPage/FormPageNavigator";

export default function Layout({children}) {
  return (
    <div style={{height: '100vh'}}>
      <div style={{height: '100px', backgroundColor: '#f1f1f1'}}>
        <FormPageNavigator/>
      </div>
      <div style={{height: '100%', backgroundColor: '#fff'}}>
        {children}
      </div>
    </div>
  )
}
