import type React from "react"
export interface Theme {
  mode: "light" | "dark"
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

export interface WalletAddress {
  address: string
  network: string
  label?: string
}

export interface TipModalProps {
  isOpen: boolean
  onClose: () => void
  walletAddresses?: WalletAddress[]
}
