import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/home'}>Home Page</Link>
      <br/>
      <Link href={'/forms/1'}>Form Page</Link>
    </div>
  )
}
