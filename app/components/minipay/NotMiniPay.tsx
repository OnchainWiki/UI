// // export function NotMiniPay() {
// //     return (
// //         <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
// //             <div className="text-6xl mb-4">🌿</div>
// //             <h1 className="text-2xl font-bold text-gray-800 mb-2">
// //                 Open in MiniPay
// //             </h1>
// //             <p className="text-gray-500 mb-6 max-w-xs">
// //                 This page is designed to run inside the MiniPay wallet app.
// //             </p>
// //             <a
// //                 href="https://minipay.opera.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold"
// //             >
// //                 Get MiniPay
// //             </a>
// //             <div className="mt-8 text-sm text-gray-400">
// //                 Already have MiniPay? Open this link inside the MiniPay browser.
// //             </div>
// //             <a
// //                 href="https://t.me/OnchainWiki_bot"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="mt-4 text-indigo-500 text-sm underline"
// //             >
// //                 Or use OnchainWiki on Telegram →
// //             </a>
// //         </div>
// //     );
// // }

// export function NotMiniPay() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 flex flex-col items-center justify-center p-6 text-center transition-colors duration-300">
//       <div className="text-6xl mb-4 animate-bounce">🌿</div>
//       <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//         Open in MiniPay
//       </h1>
//       <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xs text-sm leading-relaxed">
//         This page is designed to run inside the MiniPay wallet app.
//       </p>
//       <a
//         href="https://minipay.opera.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all active:scale-95"
//       >
//         Get MiniPay
//       </a>
//       <div className="mt-8 text-sm text-gray-400 dark:text-gray-500 max-w-xs">
//         Already have MiniPay? Open this link inside the MiniPay browser.
//       </div>
//       <a
//         href="https://t.me/OnchainWiki_bot"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
//       >
//         Or use OnchainWiki on Telegram →
//       </a>
//     </div>
//   )
// }

"use client"

import { Sparkles, ArrowRight, ExternalLink, Bot } from "lucide-react"

export function NotMiniPay() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Ambient Glow - consistent with the Features scheme */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 dark:bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        {/* Main Bento-style Card */}
        <div className="bg-white/70 dark:bg-neutral-900/40 backdrop-blur-2xl border border-white dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all">
          
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-bold text-green-700 dark:text-green-400 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>OnchainWiki on MiniPay</span>
            </div>
          </div>

          {/* Icon & Title */}
          <div className="text-center space-y-4">
            <div className="text-7xl mb-6 inline-block transform hover:scale-110 transition-transform duration-300">
              🌿
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Open in <span className="text-green-600 dark:text-green-500">MiniPay</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
              You have found something special. <br/>This experience is designed to live inside the 
              <span className="font-semibold text-gray-900 dark:text-gray-200"> MiniPay App</span> for seamless Web3 interactions.
            </p>
          </div>

          {/* Action Area */}
          <div className="mt-10 space-y-4">
            <a
              href='https://link.minipay.xyz/invite?ref=oN9Azjjy'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full bg-gray-900 dark:bg-white text-white dark:text-neutral-900 py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-500/20 transition-all active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white">Get MiniPay</span>
              <ExternalLink className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
              <div className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                Already have the app? 
              </div>
              <a
                href="https://t.me/OnchainWiki_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
              >
                <Bot className="w-4 h-4" />
                Use OnchainWiki on Telegram
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Footer hint */}
        <p className="text-center mt-8 text-xs font-medium text-gray-400 dark:text-gray-600 tracking-widest uppercase">
          OnchainWiki • The Decentralized Knowledge Layer and secure digital asset management platform.
        </p>
      </div>
    </div>
  )
}