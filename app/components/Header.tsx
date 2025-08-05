"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X, Zap } from "lucide-react"
import { useTheme } from "./ThemeProvider" // Import directly from ThemeProvider
import { Button } from "./ui/button"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="glass fixed top-4 left-4 right-4 mx-auto max-w-7xl rounded-2xl px-6 py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
              {/* <Zap className="w-6 h-6 text-white" /> */}
               <img 
                src="dp.jpg"
                alt="OnchainWiki Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-xl font-bold gradient-text">OnchainWiki</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#community"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Community
            </a>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full glass hover:bg-white/20 dark:hover:bg-white/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full glass hover:bg-white/20 dark:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-white/10">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#community"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Community
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}