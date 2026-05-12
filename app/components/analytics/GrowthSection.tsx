// 'use client'

// import type { PlatformAnalytics } from './types'

// interface Props {
//     growth: PlatformAnalytics['growth']
// }

// function MiniBar({
//     data,
//     label,
//     color,
// }: {
//     data: { label: string; count: number }[]
//     label: string
//     color: string
// }) {
//     const max = Math.max(...data.map(d => d.count), 1)

//     return (
//         <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//             <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">{label}</p>
//             <div className="flex items-end gap-1.5 h-24">
//                 {data.map((d, i) => (
//                     <div key={i} className="flex-1 flex flex-col items-center gap-1">
//                         <div
//                             className={`w-full rounded-t-sm ${color} transition-all duration-500`}
//                             style={{ height: `${Math.max((d.count / max) * 100, 4)}%` }}
//                             title={`${d.label}: ${d.count}`}
//                         />
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-between mt-2">
//                 <span className="text-[10px] text-gray-400">{data[0]?.label}</span>
//                 <span className="text-[10px] text-gray-400">{data[data.length - 1]?.label}</span>
//             </div>
//         </div>
//     )
// }

// export function GrowthSection({ growth }: Props) {
//     // Shorten labels for display
//     const usersData = growth.newUsersPerWeek.map(d => ({
//         label: d.week.split('-W')[1] ? `W${d.week.split('-W')[1]}` : d.week,
//         count: d.count,
//     }))

//     const lessonsData = growth.lessonsPerWeek.map(d => ({
//         label: d.week.split('-W')[1] ? `W${d.week.split('-W')[1]}` : d.week,
//         count: d.count,
//     }))

//     const txData = growth.transactionsPerDay.slice(-30).map(d => ({
//         label: d.date.slice(5),
//         count: d.count,
//     }))

//     return (
//         <div>
//             <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">
//                 Growth Trends
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <MiniBar
//                     data={usersData.length ? usersData : [{ label: 'No data', count: 0 }]}
//                     label="New Users per Week"
//                     color="bg-blue-400 dark:bg-blue-500"
//                 />
//                 <MiniBar
//                     data={lessonsData.length ? lessonsData : [{ label: 'No data', count: 0 }]}
//                     label="Lessons per Week"
//                     color="bg-green-400 dark:bg-green-500"
//                 />
//                 <MiniBar
//                     data={txData.length ? txData : [{ label: 'No data', count: 0 }]}
//                     label="Transactions per Day (30d)"
//                     color="bg-purple-400 dark:bg-purple-500"
//                 />
//             </div>
//         </div>
//     )
// }

'use client'

import { TrendingUp, BarChart3, Calendar } from 'lucide-react'
import type { PlatformAnalytics } from './types'

interface Props {
    growth: PlatformAnalytics['growth']
}

function MiniBar({
    data,
    label,
    color,
    accent,
}: {
    data: { label: string; count: number }[]
    label: string
    color: string
    accent: string
}) {
    const max = Math.max(...data.map(d => d.count), 1)

    return (
        <div className="group bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl transition-all duration-500 hover:shadow-indigo-500/5">
            <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                    {label}
                </p>
                <div className={`p-1.5 rounded-lg ${accent} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <TrendingUp className="w-3 h-3" />
                </div>
            </div>

            <div className="flex items-end gap-1 h-28 px-1">
                {data.map((d, i) => {
                    const isHighest = d.count === max && d.count > 0;
                    return (
                        <div 
                            key={i} 
                            className="flex-1 group/bar relative"
                        >
                            {/* Tooltip on Hover */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[9px] font-black rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                {d.count}
                            </div>

                            <div
                                className={`w-full rounded-t-md transition-all duration-700 ease-out 
                                    ${isHighest ? 'brightness-125 saturate-150 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]' : 'opacity-60 group-hover:opacity-100'} 
                                    ${color}`}
                                style={{ 
                                    height: `${Math.max((d.count / max) * 100, 6)}%`,
                                    transitionDelay: `${i * 30}ms` 
                                }}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-between mt-4 px-1">
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Start</span>
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">{data[0]?.label}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">End</span>
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">{data[data.length - 1]?.label}</span>
                </div>
            </div>
        </div>
    )
}

export function GrowthSection({ growth }: Props) {
    const usersData = growth.newUsersPerWeek.map(d => ({
        label: d.week.split('-W')[1] ? `W${d.week.split('-W')[1]}` : d.week,
        count: d.count,
    }))

    const lessonsData = growth.lessonsPerWeek.map(d => ({
        label: d.week.split('-W')[1] ? `W${d.week.split('-W')[1]}` : d.week,
        count: d.count,
    }))

    const txData = growth.transactionsPerDay.slice(-30).map(d => ({
        label: d.date.slice(5),
        count: d.count,
    }))

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
                <BarChart3 className="w-4 h-4 text-gray-400" />
                <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                    Velocity & Growth
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MiniBar
                    data={usersData.length ? usersData : [{ label: 'N/A', count: 0 }]}
                    label="Weekly Onboarding"
                    color="bg-blue-500 dark:bg-blue-400"
                    accent="bg-blue-500/10 text-blue-600"
                />
                <MiniBar
                    data={lessonsData.length ? lessonsData : [{ label: 'N/A', count: 0 }]}
                    label="Knowledge Velocity"
                    color="bg-emerald-500 dark:bg-emerald-400"
                    accent="bg-emerald-500/10 text-emerald-600"
                />
                <MiniBar
                    data={txData.length ? txData : [{ label: 'N/A', count: 0 }]}
                    label="30D Transaction Flow"
                    color="bg-purple-500 dark:bg-purple-400"
                    accent="bg-purple-500/10 text-purple-600"
                />
            </div>
        </div>
    )
}