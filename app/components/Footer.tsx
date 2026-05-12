// 'use client';

// import { Github, Twitter, MessageCircle, Mail, Zap, X } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative py-8 md:py-10 px-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          
//           {/* Brand & Description */}
//           <div className="col-span-1 md:col-span-2 space-y-3.5">
//             <div className="flex items-center gap-3">
//               <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/20">
//                 <span className="text-lg">🌿</span>
//               </div>
//               <div>
//                 <span className="text-lg font-black text-gray-900 dark:text-white tracking-tight leading-none">
//                   OnchainWiki
//                 </span>
//                 <div className="flex items-center gap-1 mt-0.5">
//                   <Zap className="w-2.5 h-2.5 text-green-500 fill-current" />
//                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
//                     Next-Gen Web3 Hub
//                   </span>
//                 </div>
//               </div>
//             </div>
            
//             <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
//               Your comprehensive guide to blockchain technology and the decentralized web. Learn, explore and master Web3 with OnchainWiki.
//             </p>
            
//             <div className="flex items-center gap-2 pt-1">
//               <a
//                 href="https://x.com/onchainwiki_"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
//               >
//                 <X className="w-3.5 h-3.5" />
//               </a>
//               <a
//                 href="https://t.me/onchainwiki_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
//               >
//                 <MessageCircle className="w-3.5 h-3.5" />
//               </a>
//               <a
//                 href="mailto:etokoffice@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 dark:hover:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/5 transition-all duration-300"
//               >
//                 <Mail className="w-3.5 h-3.5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-3">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="https://t.me/onchainwiki_bot"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//                 >
//                   Getting Started
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-3">
//               Resources
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="https://t.me/+1PfrQe7g5u1hZjY0"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//                 >
//                   Community
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://t.me/+1PfrQe7g5u1hZjY0"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//                 >
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </div>

//         </div>

//         <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
//           <p className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-tight">
//             © {currentYear} OnchainWiki. All rights reserved.
//           </p>
//           <div className="flex space-x-5">
//             <a
//               href="#"
//               className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import { MessageCircle, Mail, Zap, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 px-6 bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            {/* <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 shadow-lg shadow-emerald-500/20">
              <span className="text-base">🌿</span>
            </div> */}
            <span className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
              OnchainWiki
            </span>
          </div>
          
          <div className="hidden sm:block h-5 w-px bg-gray-300 dark:bg-white/20" />
          
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Center: Main Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          <a href="https://t.me/onchainwiki_bot" target="_blank" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
            Guide
          </a>
          <a href="https://t.me/+1PfrQe7g5u1hZjY0" target="_blank" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
            Community
          </a>
          <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">
            Terms
          </a>
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: <X className="w-5 h-5" />, href: "https://x.com/onchainwiki_", label: "Twitter" },
            { icon: <MessageCircle className="w-5 h-5" />, href: "https://t.me/onchainwiki_bot", label: "Telegram" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:etokoffice@gmail.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-emerald-500 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}