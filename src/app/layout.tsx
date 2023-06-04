import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intermarket',
  description: 'Intermarket grocery store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={"app flex-col min-h-screen"}>
          <Header/>
          {children}
        </main>
      </body>
    </html>
  )
}
