import SystemNavigator from "@/components/dashboard/SystemNavigator";

export default function Layout({children}) {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <div style={{flex: '0 0 120px', height: '100%', backgroundColor: '#f1f1f1'}}>
        <SystemNavigator/>
      </div>
      <div style={{flex: '1', height: '100%', backgroundColor: '#fff'}}>
        {children}
      </div>
    </div>
  )
}
