import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Server Component: {Math.random()}</p>
      <h2>Welcome to the all new form!</h2>
      <Link href={'/forms'}>Go to forms</Link>
    </div>
  )
}
