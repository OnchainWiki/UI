"use client"

import { useState } from "react"
import { X, Copy, Check, Heart, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

interface TipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TipModal({ isOpen, onClose }: TipModalProps) {
  const [copied, setCopied] = useState(false)
  const [shareCopied, setShareCopied] = useState(false)
  
  const walletAddress = "0x1234567890123456789012345678901234567890" // Replace with actual wallet address
  
  // Replace with your actual Twitter handle and bot/site URL
  const twitterUrl = "https://twitter.com/Onchainwiki_" 
  const shareUrl = "https://t.me/onchainwiki_bot" 
  const shareText = "Check out OnchainWiki - Your Gateway to Web3 Knowledge! 🚀"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const handleShare = async () => {
    const textToShare = `${shareText}\n\n${shareUrl}`
    
    try {
      await navigator.clipboard.writeText(textToShare)
      setShareCopied(true)
      setTimeout(() => setShareCopied(false), 2000)
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = textToShare
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setShareCopied(true)
      setTimeout(() => setShareCopied(false), 2000)
    }
  }

  const handleTwitterClick = () => {
    window.open(twitterUrl, '_blank', 'noopener,noreferrer')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative glass-card rounded-3xl p-8 max-w-md w-full mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full hover:bg-white/20 dark:hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold gradient-text mb-2">Support OnchainWiki</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Help us continue building the best Web3 educational platform for the community.
          </p>
        </div>

        {/* Wallet Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ethereum - Lisk - Base </label>
          <div className="flex items-center space-x-2">
            <div className="flex-1 glass rounded-xl p-3 font-mono text-sm break-all">{walletAddress}</div>
            <Button
              variant="outline"
              size="icon"
              className="glass border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 rounded-xl bg-transparent"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          {copied && <p className="text-green-500 text-sm mt-2">Address copied to clipboard!</p>}
        </div>

        {/* Quick Amounts */}
        {/* <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Amounts</label>
          <div className="grid grid-cols-3 gap-2">
            {["0.01 ETH", "0.05 ETH", "0.1 ETH"].map((amount) => (
              <button
                key={amount}
                className="glass-card rounded-xl p-3 text-sm font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                {amount}
              </button>
            ))}
          </div>
        </div> */}

        {/* Alternative Methods */}
        <div className="border-t border-white/20 dark:border-white/10 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Other ways to support us:</p>
          <div className="space-y-2">
            <button 
              onClick={handleShare}
              className="w-full glass rounded-xl p-3 text-left hover:bg-white/20 dark:hover:bg-white/10 transition-colors flex items-center justify-between group"
            >
              <span className="text-sm">
                {shareCopied ? "Link copied to clipboard!" : "Share with friends"}
              </span>
              {shareCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
              )}
            </button>
            
            <button 
              onClick={handleTwitterClick}
              className="w-full glass rounded-xl p-3 text-left hover:bg-white/20 dark:hover:bg-white/10 transition-colors flex items-center justify-between group"
            >
              <span className="text-sm">Follow on Twitter</span>
              <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Your support helps us create better content for the Web3 community ❤️
          </p>
        </div>
      </div>
    </div>
  )
}