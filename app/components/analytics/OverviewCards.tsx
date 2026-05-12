// import { Users, BookOpen, Zap, ArrowRightLeft } from 'lucide-react'
// import type { PlatformAnalytics } from './types'

// interface Props {
//     overview: PlatformAnalytics['overview']
// }

// function StatCard({
//     icon: Icon,
//     label,
//     value,
//     sub,
//     color,
// }: {
//     icon: React.ElementType
//     label: string
//     value: string | number
//     sub?: string
//     color: string
// }) {
//     return (
//         <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
//                 <Icon className="w-5 h-5" />
//             </div>
//             <div>
//                 <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">
//                     {typeof value === 'number' ? value.toLocaleString() : value}
//                 </p>
//                 <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
//                     {label}
//                 </p>
//                 {sub && (
//                     <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// // export function OverviewCards({ overview }: Props) {
// //     return (
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             <StatCard
// //                 icon={Users}
// //                 label="Total Users"
// //                 value={overview.totalUsers}
// //                 sub={`${overview.totalLearners.toLocaleString()} learners`}
// //                 color="bg-blue-500/10 text-blue-600 dark:text-blue-400"
// //             />
// //             <StatCard
// //                 icon={BookOpen}
// //                 label="Lessons Completed"
// //                 value={overview.totalLessonsCompleted}
// //                 color="bg-green-500/10 text-green-600 dark:text-green-400"
// //             />
// //             <StatCard
// //                 icon={Zap}
// //                 label="Total XP Awarded"
// //                 value={overview.totalXPAwarded}
// //                 color="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
// //             />
// //             <StatCard
// //                 icon={ArrowRightLeft}
// //                 label="Transactions"
// //                 value={overview.totalTransactions}
// //                 sub={`${overview.totalOnramps} on-ramps · ${overview.totalOfframps} off-ramps`}
// //                 color="bg-purple-500/10 text-purple-600 dark:text-purple-400"
// //             />
// //         </div>
// //     )
// // }

// export function OverviewCards({ overview }: Props) {
//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <StatCard
//                 icon={Users}
//                 label="Total Users"
//                 value={overview.totalUsers}
//                 sub={`${overview.totalLearners} active learners`}
//                 color="bg-blue-500/10 text-blue-600 dark:text-blue-400"
//             />
//             <StatCard
//                 icon={BookOpen}
//                 label="Lessons"
//                 value={overview.totalLessonsCompleted}
//                 sub="Lessons completed"
//                 color="bg-green-500/10 text-green-600 dark:text-green-400"
//             />
//             <StatCard
//                 icon={Zap}
//                 label="XP Awarded"
//                 value={overview.totalXPAwarded}
//                 sub="Community points"
//                 color="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
//             />
//             <StatCard
//                 icon={ArrowRightLeft}
//                 label="Transactions"
//                 value={overview.totalTransactions}
//                 sub={`${overview.totalOnramps + overview.totalOfframps} ramp flows`}
//                 color="bg-purple-500/10 text-purple-600 dark:text-purple-400"
//             />
//         </div>
//     )
// }

import { Users, BookOpen, Zap, ArrowRightLeft, TrendingUp } from 'lucide-react'
import type { PlatformAnalytics } from './types'

interface Props {
    overview: PlatformAnalytics['overview']
}

function StatCard({
    icon: Icon,
    label,
    value,
    sub,
    color,
    trend = "+12%" // Example default trend
}: {
    icon: React.ElementType
    label: string
    value: string | number
    sub?: string
    color: string
    trend?: string
}) {
    return (
        <div className="group relative overflow-hidden bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* Background Decorative Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 ${color.split(' ')[0]}`} />
            
            <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                {/* Visual Trend Indicator */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black tracking-tighter">
                    <TrendingUp className="w-3 h-3" />
                    {trend}
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                        {typeof value === 'number' ? value.toLocaleString() : value}
                    </p>
                </div>
                
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mt-3 mb-1">
                    {label}
                </p>
                
                {sub && (
                    <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                        <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                            {sub}
                        </p>
                    </div>
                )}
            </div>

            {/* Bottom Accent Bar */}
            <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0 ${color.split(' ')[1] === 'text-blue-600' ? 'bg-blue-500' : color.split(' ')[1] === 'text-green-600' ? 'bg-green-500' : color.split(' ')[1] === 'text-yellow-600' ? 'bg-yellow-500' : 'bg-purple-500'}`} />
        </div>
    )
}

export function OverviewCards({ overview }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                icon={Users}
                label="Total Users"
                value={overview.totalUsers}
                sub={`${overview.totalLearners.toLocaleString()} active learners`}
                color="bg-blue-500/10 text-blue-600 dark:text-blue-400"
                trend="+8.2%"
            />
            <StatCard
                icon={BookOpen}
                label="Lessons"
                value={overview.totalLessonsCompleted}
                sub="Knowledge milestones"
                color="bg-green-500/10 text-green-600 dark:text-green-400"
                trend="+14.5%"
            />
            <StatCard
                icon={Zap}
                label="XP Awarded"
                value={overview.totalXPAwarded}
                sub="Community reputation"
                color="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                trend="+22.1%"
            />
            <StatCard
                icon={ArrowRightLeft}
                label="Transactions"
                value={overview.totalTransactions}
                sub={`${(overview.totalOnramps + overview.totalOfframps).toLocaleString()} ramp flows`}
                color="bg-purple-500/10 text-purple-600 dark:text-purple-400"
                trend="+5.4%"
            />
        </div>
    )
}