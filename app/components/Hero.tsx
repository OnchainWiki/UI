"use client"

import { useState } from "react"
import { ArrowRight, Bot, Heart, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import TipModal from "./TipModal"

export default function Hero() {
  const [isTipModalOpen, setIsTipModalOpen] = useState(false)

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-2 mb-8 animate-pulse-slow">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Web3 Educator and Digital asset manager</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">OnchainWiki</span>
          <br />
          <span className="text-gray-800 dark:text-gray-200">Explore Web3</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
         An educational Web3 Telegram AI Assistant and Crypto Asset Manager. Explore web3 safely with me !!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://t.me/onchainwiki_bot", "_blank")}
          >
            <Bot className="w-5 h-5 mr-2" />
            Launch App
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass-card border-2 border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            onClick={() => setIsTipModalOpen(true)}
          >
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            Tip OnchainWiki
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">Web3 Mentor</div>
            <div className="text-gray-600 dark:text-gray-400">AI Educator</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">Secure Wallet</div>
            <div className="text-gray-600 dark:text-gray-400">DeFi on Telegram</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">Multichain</div>
            <div className="text-gray-600 dark:text-gray-400">Protocols Covered</div>
          </div>
        </div>
      </div>

      <TipModal isOpen={isTipModalOpen} onClose={() => setIsTipModalOpen(false)} />
    </section>
  )
}
