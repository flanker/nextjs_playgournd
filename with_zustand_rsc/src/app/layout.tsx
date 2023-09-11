import Link from "next/link";

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <header>
      <p>Server Component: {Math.random()}</p>
      <h1>New Form</h1>
      <h2>Next.js App Router with Zustand RSC</h2>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/forms'}>Forms</Link></li>
      </ul>
    </header>
    <hr/>
    {children}
    </body>
    </html>
  )
}
