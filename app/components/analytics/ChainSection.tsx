// import type { PlatformAnalytics } from './types'

// interface Props {
//     chains: PlatformAnalytics['chains']
// }

// export function ChainSection({ chains }: Props) {
//     if (!chains || chains.length === 0) return null

//     const max = Math.max(...chains.map(c => c.userCount), 1)

//     return (
//         <div>
//             <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">
//                 Users by Network
//             </h2>
//             <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {chains.map(chain => (
//                         <div key={chain.chainId} className="flex items-center gap-3">
//                             <div className="flex-1">
//                                 <div className="flex items-center justify-between mb-1">
//                                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300 truncate">
//                                         {chain.chainName}
//                                     </span>
//                                     <span className="text-xs font-black text-gray-500 ml-2">
//                                         {chain.userCount.toLocaleString()}
//                                     </span>
//                                 </div>
//                                 <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-700"
//                                         style={{ width: `${(chain.userCount / max) * 100}%` }}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

import type { PlatformAnalytics } from './types'

interface Props {
    chains: PlatformAnalytics['chains']
}

// Map chain IDs to emojis for a more visual UX
const CHAIN_EMOJIS: Record<number, string> = {
    42220: '🌿', // Celo
    11142220: '🌿', // Celo Sepolia
    1135: '🔷', // Lisk
    4202: '🔷', // Lisk Sepolia
    8453: '🔵', // Base
    1: '⬡', // Ethereum
}

export function ChainSection({ chains }: Props) {
    if (!chains || chains.length === 0) return null

    const max = Math.max(...chains.map(c => c.userCount), 1)

    return (
        <div className="space-y-4">
            <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] px-1">
                Users by Network
            </h2>
            
            <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-2xl shadow-blue-500/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chains.map((chain) => {
                        const percentage = (chain.userCount / max) * 100;
                        
                        return (
                            <div 
                                key={chain.chainId} 
                                className="group relative flex flex-col gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-transparent hover:border-blue-500/20 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <span className="text-lg" role="img" aria-label="chain icon">
                                            {CHAIN_EMOJIS[chain.chainId] || '⛓️'}
                                        </span>
                                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                                            {chain.chainName}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                                            {chain.userCount.toLocaleString()}
                                        </span>
                                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                                            Users
                                        </span>
                                    </div>
                                </div>

                                <div className="relative w-full h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    {/* Subtle background glow on bar hover */}
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative"
                                        style={{ width: `${percentage}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                    </div>
                                </div>
                                
                                {/* Hover background decorative element */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-3xl -z-10 transition-colors" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}