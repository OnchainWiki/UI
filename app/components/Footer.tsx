// import { Github, Twitter, MessageCircle, Mail, Zap, X } from "lucide-react"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="relative py-16 px-4 border-t border-white/20 dark:border-white/10">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
//                 <Zap className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold gradient-text">OnchainWiki</span>
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
//               Your comprehensive guide to blockchain technology and the decentralized web. <br/>Learn, explore 
//               and master Web3 with OnchianWiki.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://x.com/onchainwiki_"
//                 className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </a>
//               {/* <a
//                 href="#"
//                 className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
//               >
//                 <Github className="w-5 h-5" />
//               </a> */}
//               <a
//                 href="https://t.me/onchainwiki_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//               <a
//                 href="mailto:etokoffice@gmail.com"
//                 target="_blank"
//                 className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
//               >
//                 <Mail className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="https://t.me/onchainwiki_bot"
//                   target="_blank"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   Getting Started
//                 </a>
//               </li>
//               {/* <li>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   DeFi Guides
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   NFT Basics
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   Smart Contracts
//                 </a>
//               </li> */}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Resources</h3>
//             <ul className="space-y-2">
//               {/* <li>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   API Reference
//                 </a>
//               </li> */}
//               <li>
//                 <a
//                   href="https://t.me/+1PfrQe7g5u1hZjY0"
//                   target="_blank"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   Community
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://t.me/+1PfrQe7g5u1hZjY0"
//                   target="_blank"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
//             © {currentYear} OnchainWiki. All rights reserved.
//           </p>
//           <div className="flex space-x-6 text-sm">
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               Terms of Service
//             </a>
//             {/* <a
//               href="#"
//               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               Cookie Policy
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


'use client';

import { Github, Twitter, MessageCircle, Mail, Zap, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 md:py-10 px-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/20">
                <span className="text-lg">🌿</span>
              </div>
              <div>
                <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight leading-none">
                  OnchainWiki
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Zap className="w-2.5 h-2.5 text-green-500 fill-current" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Next-Gen Web3 Hub
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Your comprehensive guide to blockchain technology and the decentralized web. Learn, explore and master Web3 with OnchainWiki.
            </p>
            
            {/* Glassmorphic Social Media Navigation */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://x.com/onchainwiki_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
              >
                <X className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://t.me/onchainwiki_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:etokoffice@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Bento Block */}
          <div>
            <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/onchainwiki_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Bento Block */}
          <div>
            <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/+1PfrQe7g5u1hZjY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+1PfrQe7g5u1hZjY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-tight">
            © {currentYear} OnchainWiki. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}