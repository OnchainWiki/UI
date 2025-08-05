import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-indigo-400/5" />

        {/* Content */}
        <div className="relative z-10">
          {/* <Header /> */}
          <Hero />
          <Features />
          <Footer />
        </div>
      </div>
    </main>
  )
}
