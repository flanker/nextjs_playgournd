export default function RandomNumber() {
  return (
    <div style={{fontSize: '0.8rem', color: '#aaa'}}>
      {Math.random().toFixed(6)}
    </div>
  )
}
