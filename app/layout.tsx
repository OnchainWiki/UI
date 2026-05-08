import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OnchainWiki - Your Gateway to Web3 Knowledge",
  description:
    "Discover, learn, and explore the world of blockchain and Web3 with OnchainWiki. Your comprehensive guide to decentralized technologies.",
  keywords: "blockchain, web3, cryptocurrency, DeFi, NFT, smart contracts, ethereum",
  authors: [{ name: "etette.onchain" }],
  icons: {
    icon: "wikiHeader.jpg",
  },
  openGraph: {
    title: "OnchainWiki - Your Gateway to Web3 Knowledge",
    description: "Discover, learn, and explore the world of blockchain and Web3 with OnchainWiki.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="talentapp:project_verification"
          content="daefb88615680f00454f67606f889cd59e2a60284c32309ec43ab5b3769ab15761ab3de3131a143f4500bc05374ebf86520859b44831bc88adb3ce39745f53ea"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}