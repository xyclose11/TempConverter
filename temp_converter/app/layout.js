import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <section>
        {}
        <h1 id='appHeader'>Temperature Converter</h1>

        {children}
      </section>
  )
}
