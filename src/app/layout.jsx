import './globals.css'

// fonts
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuviflix | Home',
  description: 'Yuviflix',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
