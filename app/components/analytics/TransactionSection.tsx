// import { Send, ArrowDownLeft, ArrowUpRight } from 'lucide-react'
// import type { PlatformAnalytics } from './types'

// interface Props {
//     transactions: PlatformAnalytics['transactions']
// }

// const CHAIN_NAMES: Record<number, string> = {
//     42220: '🌿 Celo',
//     11142220: '🌿 Celo Sepolia',
//     1135: '🔷 Lisk',
//     4202: '🔷 Lisk Sepolia',
//     8453: '🔵 Base',
//     84532: '🔵 Base Sepolia',
//     1: '⬡ Ethereum',
// }

// // export function TransactionSection({ transactions }: Props) {
// //     const total = transactions.byType.send + transactions.byType.onramp + transactions.byType.offramp || 1

// //     const typeData = [
// //         {
// //             icon: <Send className="w-4 h-4" />,
// //             label: 'Sends',
// //             count: transactions.byType.send,
// //             color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
// //             bar: 'bg-blue-400',
// //         },
// //         {
// //             icon: <ArrowDownLeft className="w-4 h-4" />,
// //             label: 'On-Ramps',
// //             count: transactions.byType.onramp,
// //             color: 'bg-green-500/10 text-green-600 dark:text-green-400',
// //             bar: 'bg-green-400',
// //         },
// //         {
// //             icon: <ArrowUpRight className="w-4 h-4" />,
// //             label: 'Off-Ramps',
// //             count: transactions.byType.offramp,
// //             color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
// //             bar: 'bg-orange-400',
// //         },
// //     ]

// //     return (
// //         <div>
// //             <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">
// //                 Transactions
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// //                 {/* By Type */}
// //                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
// //                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
// //                         By Type
// //                     </p>
// //                     <div className="space-y-4">
// //                         {typeData.map(item => (
// //                             <div key={item.label}>
// //                                 <div className="flex items-center justify-between mb-1">
// //                                     <div className={`flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-bold ${item.color}`}>
// //                                         {item.icon}
// //                                         {item.label}
// //                                     </div>
// //                                     <span className="text-sm font-black text-gray-700 dark:text-gray-300">
// //                                         {item.count.toLocaleString()}
// //                                     </span>
// //                                 </div>
// //                                 <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
// //                                     <div
// //                                         className={`h-full ${item.bar} rounded-full transition-all duration-700`}
// //                                         style={{ width: `${(item.count / total) * 100}%` }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {/* By Chain */}
// //                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
// //                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
// //                         By Chain
// //                     </p>
// //                     <div className="space-y-3">
// //                         {transactions.byChain.length === 0 && (
// //                             <p className="text-sm text-gray-400">No transaction data yet.</p>
// //                         )}
// //                         {transactions.byChain.map(item => {
// //                             const chainMax = Math.max(...transactions.byChain.map(c => c.count), 1)
// //                             return (
// //                                 <div key={item.chainId}>
// //                                     <div className="flex items-center justify-between mb-1">
// //                                         <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
// //                                             {CHAIN_NAMES[item.chainId] ?? `Chain ${item.chainId}`}
// //                                         </span>
// //                                         <span className="text-xs font-black text-gray-500">
// //                                             {item.count}
// //                                         </span>
// //                                     </div>
// //                                     <div className="h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
// //                                         <div
// //                                             className="h-full bg-indigo-400 dark:bg-indigo-500 rounded-full"
// //                                             style={{ width: `${(item.count / chainMax) * 100}%` }}
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             )
// //                         })}
// //                     </div>
// //                 </div>

// //                 {/* By Token */}
// //                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
// //                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
// //                         By Token
// //                     </p>
// //                     <div className="space-y-3">
// //                         {transactions.byToken.length === 0 && (
// //                             <p className="text-sm text-gray-400">No token data yet.</p>
// //                         )}
// //                         {transactions.byToken.map(item => {
// //                             const tokenMax = Math.max(...transactions.byToken.map(t => t.count), 1)
// //                             return (
// //                                 <div key={item.token}>
// //                                     <div className="flex items-center justify-between mb-1">
// //                                         <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
// //                                             {item.token}
// //                                         </span>
// //                                         <span className="text-xs font-black text-gray-500">
// //                                             {item.count}
// //                                         </span>
// //                                     </div>
// //                                     <div className="h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
// //                                         <div
// //                                             className="h-full bg-emerald-400 dark:bg-emerald-500 rounded-full"
// //                                             style={{ width: `${(item.count / tokenMax) * 100}%` }}
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             )
// //                         })}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// export function TransactionSection({ transactions }: Props) {
//     // Fix: Use actual total or fallback to 1 to avoid division by zero
//     const totalTransactions = transactions.byType.send + transactions.byType.onramp + transactions.byType.offramp
//     const displayTotal = totalTransactions || 0

//     const typeData = [
//         {
//             icon: <Send className="w-4 h-4" />,
//             label: 'Sends',
//             count: transactions.byType.send,
//             color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
//             bar: 'bg-blue-400',
//         },
//         {
//             icon: <ArrowDownLeft className="w-4 h-4" />,
//             label: 'On-Ramps',
//             count: transactions.byType.onramp,
//             color: 'bg-green-500/10 text-green-600 dark:text-green-400',
//             bar: 'bg-green-400',
//         },
//         {
//             icon: <ArrowUpRight className="w-4 h-4" />,
//             label: 'Off-Ramps',
//             count: transactions.byType.offramp,
//             color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
//             bar: 'bg-orange-400',
//         },
//     ]

//     return (
//         <div>
//             <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">
//                     Transactions
//                 </h2>
//                 <span className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-gray-500">
//                     Total: {displayTotal}
//                 </span>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {/* By Type */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         By Type
//                     </p>
//                     <div className="space-y-4">
//                         {typeData.map(item => (
//                             <div key={item.label}>
//                                 <div className="flex items-center justify-between mb-1">
//                                     <div className={`flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-bold ${item.color}`}>
//                                         {item.icon}
//                                         {item.label}
//                                     </div>
//                                     <span className="text-sm font-black text-gray-700 dark:text-gray-300">
//                                         {item.count.toLocaleString()}
//                                     </span>
//                                 </div>
//                                 <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
//                                     <div
//                                         className={`h-full ${item.bar} rounded-full transition-all duration-700`}
//                                         style={{ width: `${displayTotal > 0 ? (item.count / displayTotal) * 100 : 0}%` }}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* By Chain */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         By Chain
//                     </p>
//                     <div className="space-y-3">
//                         {transactions.byChain.length === 0 ? (
//                             <p className="text-sm text-gray-400 py-2">No transaction data yet.</p>
//                         ) : (
//                             transactions.byChain.map(item => {
//                                 const chainMax = Math.max(...transactions.byChain.map(c => c.count), 1)
//                                 return (
//                                     <div key={item.chainId}>
//                                         <div className="flex items-center justify-between mb-1">
//                                             <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
//                                                 {CHAIN_NAMES[item.chainId] ?? `Chain ${item.chainId}`}
//                                             </span>
//                                             <span className="text-xs font-black text-gray-500">
//                                                 {item.count}
//                                             </span>
//                                         </div>
//                                         <div className="h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
//                                             <div
//                                                 className="h-full bg-indigo-400 dark:bg-indigo-500 rounded-full"
//                                                 style={{ width: `${(item.count / chainMax) * 100}%` }}
//                                             />
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         )}
//                     </div>
//                 </div>

//                 {/* By Token */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         By Token
//                     </p>
//                     <div className="space-y-3">
//                         {transactions.byToken.length === 0 ? (
//                             <p className="text-sm text-gray-400 py-2">No token data yet.</p>
//                         ) : (
//                             transactions.byToken.map(item => {
//                                 const tokenMax = Math.max(...transactions.byToken.map(t => t.count), 1)
//                                 return (
//                                     <div key={item.token}>
//                                         <div className="flex items-center justify-between mb-1">
//                                             <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
//                                                 {item.token}
//                                             </span>
//                                             <span className="text-xs font-black text-gray-500">
//                                                 {item.count}
//                                             </span>
//                                         </div>
//                                         <div className="h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
//                                             <div
//                                                 className="h-full bg-emerald-400 dark:bg-emerald-500 rounded-full"
//                                                 style={{ width: `${(item.count / tokenMax) * 100}%` }}
//                                             />
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Send, ArrowDownLeft, ArrowUpRight, Activity, Layers, Coins } from 'lucide-react'
import type { PlatformAnalytics } from './types'

interface Props {
    transactions: PlatformAnalytics['transactions']
}

const CHAIN_NAMES: Record<number, string> = {
    42220: '🌿 Celo',
    11142220: '🌿 Celo Sepolia',
    1135: '🔷 Lisk',
    4202: '🔷 Lisk Sepolia',
    8453: '🔵 Base',
    84532: '🔵 Base Sepolia',
    1: '⬡ Ethereum',
}

export function TransactionSection({ transactions }: Props) {
    const totalTransactions = transactions.byType.send + transactions.byType.onramp + transactions.byType.offramp
    const displayTotal = totalTransactions || 0

    const typeData = [
        {
            icon: <Send className="w-3.5 h-3.5" />,
            label: 'Sends',
            count: transactions.byType.send,
            color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
            bar: 'bg-gradient-to-r from-blue-400 to-indigo-500',
        },
        {
            icon: <ArrowDownLeft className="w-3.5 h-3.5" />,
            label: 'On-Ramps',
            count: transactions.byType.onramp,
            color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
            bar: 'bg-gradient-to-r from-emerald-400 to-teal-500',
        },
        {
            icon: <ArrowUpRight className="w-3.5 h-3.5" />,
            label: 'Off-Ramps',
            count: transactions.byType.offramp,
            color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
            bar: 'bg-gradient-to-r from-orange-400 to-red-500',
        },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                        Network Activity
                    </h2>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-white/5 border border-white/20 rounded-full shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-tighter">
                        {displayTotal.toLocaleString()} Total Txns
                    </span>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Transaction Types */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-6">
                        <Layers className="w-4 h-4 text-blue-500" />
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Classification</p>
                    </div>
                    
                    <div className="space-y-6">
                        {typeData.map(item => (
                            <div key={item.label} className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${item.color}`}>
                                        {item.icon}
                                        {item.label}
                                    </div>
                                    <span className="text-sm font-black text-gray-900 dark:text-white">
                                        {item.count.toLocaleString()}
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${item.bar} rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                                        style={{ width: `${displayTotal > 0 ? (item.count / displayTotal) * 100 : 0}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Chain Distribution */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <Activity className="w-4 h-4 text-indigo-500" />
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Settlement Chains</p>
                    </div>
                    <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        {transactions.byChain.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-8 opacity-40">
                                <Activity className="w-8 h-8 mb-2" />
                                <p className="text-[10px] font-bold uppercase">Awaiting Data...</p>
                            </div>
                        ) : (
                            transactions.byChain.map(item => {
                                const chainMax = Math.max(...transactions.byChain.map(c => c.count), 1)
                                return (
                                    <div key={item.chainId} className="group">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                                                {CHAIN_NAMES[item.chainId] ?? `Chain ${item.chainId}`}
                                            </span>
                                            <span className="text-[10px] font-black text-gray-400">
                                                {item.count}
                                            </span>
                                        </div>
                                        <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500"
                                                style={{ width: `${(item.count / chainMax) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>

                {/* 3. Token Analytics */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <Coins className="w-4 h-4 text-emerald-500" />
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Asset Flow</p>
                    </div>
                    <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        {transactions.byToken.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-8 opacity-40">
                                <Coins className="w-8 h-8 mb-2" />
                                <p className="text-[10px] font-bold uppercase">No Tokens Detected</p>
                            </div>
                        ) : (
                            transactions.byToken.map(item => {
                                const tokenMax = Math.max(...transactions.byToken.map(t => t.count), 1)
                                return (
                                    <div key={item.token} className="group">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-xs font-black text-gray-700 dark:text-gray-200 tracking-tight">
                                                ${item.token}
                                            </span>
                                            <span className="text-[10px] font-black text-emerald-500/80">
                                                {item.count} txs
                                            </span>
                                        </div>
                                        <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500"
                                                style={{ width: `${(item.count / tokenMax) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}