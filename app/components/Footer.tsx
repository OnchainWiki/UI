import { Github, Twitter, MessageCircle, Mail, Zap, X } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 border-t border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">OnchainWiki</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Your comprehensive guide to blockchain technology and the decentralized web. <br/>Learn, explore 
              and master Web3 with OnchianWiki.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/onchainwiki_"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a> */}
              <a
                href="https://t.me/onchainwiki_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:etokoffice@gmail.com"
                target="_blank"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/onchainwiki_bot"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Getting Started
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  DeFi Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  NFT Basics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Smart Contracts
                </a>
              </li> */}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2">
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  API Reference
                </a>
              </li> */}
              <li>
                <a
                  href="https://t.me/+1PfrQe7g5u1hZjY0"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+1PfrQe7g5u1hZjY0"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} OnchainWiki. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            {/* <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
