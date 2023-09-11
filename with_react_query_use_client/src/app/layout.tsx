import Link from "next/link";
import Provider from "@/app/provider";

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <header style={{backgroundColor: '#ccc', padding: '10px'}}>
      <p>Server Component: {Math.random()}</p>
      <h1>New Forms</h1>
      <h2>Next.js with React Query use client</h2>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/forms'}>Forms</Link></li>
      </ul>
    </header>
    <hr/>
    <Provider>
      {children}
    </Provider>
    </body>
    </html>
  )
}
