"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "./ThemeProvider" 
import { Button } from "./ui/button"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="fixed top-4 left-4 right-4 mx-auto max-w-7xl rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-lg px-6 py-3 transition-all duration-300 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-md transition-transform group-hover:scale-105">
              <img 
                src="/onWiki.jpg" 
                alt="OnchainWiki Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              OnchainWiki
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <a
              href="https://t.me/+1PfrQe7g5u1hZjY0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Community
            </a>
            <Link
              href="/minipay"
              className="px-4 py-2 rounded-xl bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-semibold flex items-center gap-2 hover:bg-green-500/20 transition-all border border-green-500/20"
            >
              <span>🌿</span> MiniPay App
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "light" ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-yellow-400" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-white/10 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                href="/#features"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-300 px-2"
              >
                Features
              </Link>
              <a
                href="https://t.me/+1PfrQe7g5u1hZjY0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-700 dark:text-gray-300 px-2"
              >
                Community
              </a>
              <Link
                href="/minipay"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-base font-semibold text-green-600 dark:text-green-400 px-2"
              >
                <span>🌿</span> Connect MiniPay
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}