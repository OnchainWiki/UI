// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "./components/ThemeProvider"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "OnchainWiki - Your Gateway to Web3 Knowledge",
//   description:
//     "Discover, learn, and explore the world of blockchain and Web3 with OnchainWiki. Your comprehensive guide to decentralized technologies.",
//   keywords: "blockchain, web3, cryptocurrency, DeFi, NFT, smart contracts, ethereum",
//   authors: [{ name: "OnchainWiki Team" }],
//   openGraph: {
//     title: "OnchainWiki - Your Gateway to Web3 Knowledge",
//     description: "Discover, learn, and explore the world of blockchain and Web3 with OnchainWiki.",
//     type: "website",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   )
// }

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
  authors: [{ name: "OnchainWiki Team" }],
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
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}