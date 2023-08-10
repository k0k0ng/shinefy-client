import '../styles/globals.css';
import '../styles/legalpages.css';
import { Inter } from 'next/font/google';
import NavigationBar from "../components/Navbar/NavigationBar";
import FooterPage from "../components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" type="image/svg+xml" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Shine Ranker AI website was created using NextJS."
        />

        <title>Shine Ranker AI</title>

        <link rel="icon" href="/images/Shine-Ranker-Logo-Favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <FooterPage />
      </body>
    </html>
  )
}
