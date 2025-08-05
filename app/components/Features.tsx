"use client"

import { BookOpen, Users, Zap, Shield, TrendingUp, Globe } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Web3 Mentor",
    description:
      "Real time mentor with explanations covering all aspects of blockchain technology and Web3 ecosystems.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built for the community with inputs from the community. Gain knowledge and learn from fine-tuned AI.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay current with the latest developments in Web3, DeFi, DeSci, DAOs and prices of cryptocurrencies.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Learn about security best practices in Web3 and how to protect your digital assets.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Remitance",
    description: "Securely manage your crypto assets with our integrated wallet features.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Multi-chain Coverage",
    description:
      "Explore multiple blockchain networks for Crypto Assets management.",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Onchain Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to understand and navigate the world of blockchain and decentralized technologies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Ready to Start Your Web3 Journey?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Join thousands of learners exploring the decentralized future today. <br/> Gain a personal mentor and
              navigate Web3 ecosystem safely.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://t.me/onchainwiki_bot", "_blank")}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
