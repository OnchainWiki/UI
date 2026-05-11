"use client"

import { BookOpen, Users, Zap, Shield, TrendingUp, Globe, ArrowRight, Sparkles } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Web3 Mentor",
    description: "Real-time mentor with deep explanations covering all aspects of blockchain tech and Web3 ecosystems. Ask anything, anytime.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Users,
    title: "Self Paced Learning",
    description: "Learn at your own pace with our comprehensive curriculum designed for all skill levels.",
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay current with the latest in Web3, DeFi, DeSci, DAOs and live market prices.",
    color: "from-yellow-500 to-orange-500",
    glow: "group-hover:shadow-yellow-500/20",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Master security best practices and learn how to bulletproof your digital assets onchain.",
    color: "from-green-500 to-emerald-500",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: TrendingUp,
    title: "Remittance",
    description: "Securely manage, transfer and track your crypto assets with our seamless wallet features.",
    color: "from-indigo-500 to-blue-500",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: Globe,
    title: "Multi-chain Coverage",
    description: "Break borders. Explore, bridge and manage crypto assets across multiple blockchain networks seamlessly.",
    color: "from-teal-500 to-cyan-500",
    glow: "group-hover:shadow-teal-500/20",
  },
]

// Maps indexes to an asymmetrical Bento Box layout
const getBentoLayout = (index: number) => {
  switch (index) {
    case 0: return "md:col-span-2 lg:col-span-2" // Wide hero card
    case 1: return "md:col-span-1 lg:col-span-1" // Square
    case 2: return "md:col-span-1 lg:col-span-1" // Square
    case 3: return "md:col-span-1 lg:col-span-1" // Square
    case 4: return "md:col-span-2 lg:col-span-1" // Square
    case 5: return "md:col-span-2 lg:col-span-3" // Wide bottom spanning card
    default: return ""
  }
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md text-sm font-medium text-gray-800 dark:text-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Powerful Capabilities</span>
          </div>
          {/* <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500">
              Features
            </span>
          </h2> */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to understand, navigate and build in the world of decentralized technologies.
          </p>
        </div>

        {/* Bento Box Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative group ${getBentoLayout(index)}`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              <div className={`relative h-full bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 ${feature.glow} shadow-lg hover:shadow-2xl`}>
                
                <div className="flex items-start justify-between mb-8">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 shadow-lg group-hover:rotate-3 transition-all duration-500`}>
                    <div className="flex items-center justify-center w-full h-full bg-white/90 dark:bg-neutral-900 rounded-[14px] backdrop-blur-sm">
                      <feature.icon className={`w-6 h-6 text-gray-900 dark:text-white`} />
                    </div>
                  </div>
                  
                  <span className="text-gray-300 dark:text-gray-700 font-mono text-sm font-medium">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
          {/* <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
            
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
                Ready to Start Your Web3 Journey?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Join thousands of learners exploring the decentralized future today. Gain a personal mentor and navigate the Web3 ecosystem safely.
              </p>
            </div>

            <button
              onClick={() => window.open("https://t.me/onchainwiki_bot", "_blank")}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-transform active:scale-95 shrink-0"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get Started Now
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}