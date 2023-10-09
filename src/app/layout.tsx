import '../styles/globals.css'
import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import 'animate.css';
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jason Palmeri Portfolio',
  description: 'Portfolio Website for Jason Palmeri, Web Developer, Video Editor',
  metadataBase: new URL('https://portfolio.petstergaming.com'),
  openGraph: {
    title: 'Jason Palmeri\'s Portfolio',
    type: 'website',
    description: 'Jason Palmeri\'s Portfolio',
    url: 'https://portfolio.petstergaming.com',
    images: ['https://media.discordapp.net/attachments/903828993629896719/903829362644770876/ogimage.jpg?width=733&height=595']
  },
  icons: ['../images/logoBright.png'],
  keywords: 'Petster, Petstergaming, PetsterGaming, Petster12, HTML, CSS, JavaScript, PHP, JQuery, Portfolio, Jason Palmeri, Jason, Palmeri, Guavus, Nashua Community College, Graduate, Associates Degree, Associtates, Web Development Application, Web Development, Website Developer, Web Developer, Fiverr, Work, Looking for Work, Front-End Developer, Back-End Developer, Front-End Web Developer, Back-End Web Developer, Gaming, Games, Gamer, LinkedIn, Linkedin, Junior Web Developer, Customer Success'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <div id="bg-root">
        <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
          <main className="min-h-screen w-full md:w-3/4 mx-auto flex flex-col">
            <header className="flex justify-between content-center flex-row">
              <Nav />
            </header>
            <section className="flex flex-grow">
                {children}
                <Analytics />
            </section>
            <footer className="md:rounded-t-md rounded-none w-full space-x-6 text-center mx-auto p-2">
                <p className="text-white">Jason Palmeri | &copy; {new Date().getFullYear()}</p>
            </footer>
          </main>
        </div>
      </div>
      </body>
    </html>
  )
}
