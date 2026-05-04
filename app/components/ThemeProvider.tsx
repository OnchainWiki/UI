// "use client"

// import type React from "react"
// import { createContext, useContext, useEffect, useState } from "react"

// type Theme = "dark" | "light"

// type ThemeProviderContextType = {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>("light")
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const savedTheme = localStorage.getItem("theme") as Theme
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//     setTheme(savedTheme || systemTheme)
//   }, [])

//   useEffect(() => {
//     if (mounted) {
//       const root = window.document.documentElement
//       root.classList.remove("light", "dark")
//       root.classList.add(theme)
//       localStorage.setItem("theme", theme)
//     }
//   }, [theme, mounted])

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
//   }

//   if (!mounted) {
//     return <>{children}</>
//   }

//   return <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeProviderContext.Provider>
// }

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext)
//   if (context === undefined) {
//     // throw new Error("useTheme must be used within a ThemeProvider")
//     // console.warn("useTheme must be used within a ThemeProvider")
//     return { theme: "light", toggleTheme: () => {} } // Provide a default
//   }
//   return context
// }

// export { ThemeProviderContext }

"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with a fallback theme to match the server-side render
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    setTheme(savedTheme || systemTheme)
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // CRITICAL FIX: Always return the Provider so sub-components can access useTheme() 
  // without returning undefined context.
  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }} className="contents">
        {children}
      </div>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    // Falls back gracefully instead of breaking if layout structure shifts
    return { theme: "light" as Theme, toggleTheme: () => {} }
  }
  return context
}

export { ThemeProviderContext }