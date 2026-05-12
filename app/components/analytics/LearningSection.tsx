// import { Trophy, Flame, Target } from 'lucide-react'
// import type { PlatformAnalytics } from './types'

// interface Props {
//     learning: PlatformAnalytics['learning']
// }

// const BADGE_NAMES: Record<string, string> = {
//     first_lesson: '🎯 First Step',
//     first_quiz: '🧠 Quiz Taker',
//     first_module: '📖 Module Complete',
//     first_course: '🎓 Graduate',
//     streak_3: '🔥 On Fire',
//     streak_7: '⚡ Week Warrior',
//     streak_30: '🏆 Unstoppable',
//     xp_100: '💫 Century',
//     xp_500: '🌟 Rising Star',
//     xp_1000: '👑 Legend',
//     perfect_quiz: '✨ Perfect Score',
// }

// export function LearningSection({ learning }: Props) {
//     const medals = ['🥇', '🥈', '🥉']

//     return (
//         <div>
//             <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">
//                 Learning
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//                 {/* Course Progress */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5 md:col-span-2 lg:col-span-1">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         Course Progress
//                     </p>
//                     <div className="space-y-4">
//                         {learning.courseBreakdown.map(course => (
//                             <div key={course.courseId}>
//                                 <div className="flex items-center justify-between mb-1">
//                                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
//                                         {course.emoji} {course.displayName}
//                                     </span>
//                                     <span className="text-xs text-gray-400 font-medium">
//                                         {course.lessonsCompleted.toLocaleString()} lessons
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="flex-1 h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
//                                             style={{
//                                                 width: `${Math.min(
//                                                     (course.lessonsCompleted /
//                                                         Math.max(
//                                                             ...learning.courseBreakdown.map(c => c.lessonsCompleted),
//                                                             1
//                                                         )) * 100,
//                                                     100
//                                                 )}%`
//                                             }}
//                                         />
//                                     </div>
//                                     <span className="text-[10px] text-gray-400 w-16 text-right">
//                                         {course.uniqueLearners} learners
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                         {learning.courseBreakdown.length === 0 && (
//                             <p className="text-sm text-gray-400">No course data yet.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Top Learners */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         Top Learners
//                     </p>
//                     <div className="space-y-3">
//                         {learning.topLearners.slice(0, 8).map((learner, i) => (
//                             <div key={learner.userId} className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <span className="text-base w-6">
//                                         {medals[i] ?? `${i + 1}.`}
//                                     </span>
//                                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300 truncate max-w-[120px]">
//                                         {learner.username ?? `User ${learner.userId.slice(-4)}`}
//                                     </span>
//                                 </div>
//                                 <span className="text-xs font-black text-yellow-600 dark:text-yellow-400">
//                                     {learner.totalXP.toLocaleString()} XP
//                                 </span>
//                             </div>
//                         ))}
//                         {learning.topLearners.length === 0 && (
//                             <p className="text-sm text-gray-400">No learners yet.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Streak & Badge Stats */}
//                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-5">
//                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
//                         Engagement
//                     </p>

//                     {/* Streak stats */}
//                     <div className="grid grid-cols-3 gap-2 mb-5">
//                         {[
//                             {
//                                 icon: <Flame className="w-4 h-4 text-orange-500" />,
//                                 value: learning.streakStats.usersWithActiveStreak,
//                                 label: 'Active streaks',
//                             },
//                             {
//                                 icon: <Target className="w-4 h-4 text-blue-500" />,
//                                 value: `${learning.streakStats.avgStreak}d`,
//                                 label: 'Avg streak',
//                             },
//                             {
//                                 icon: <Trophy className="w-4 h-4 text-yellow-500" />,
//                                 value: `${learning.streakStats.longestStreak}d`,
//                                 label: 'Longest',
//                             },
//                         ].map((stat, i) => (
//                             <div key={i} className="text-center">
//                                 <div className="flex justify-center mb-1">{stat.icon}</div>
//                                 <p className="text-lg font-black text-gray-900 dark:text-white leading-none">
//                                     {stat.value}
//                                 </p>
//                                 <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">
//                                     {stat.label}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Badge distribution */}
//                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">
//                         Badges Awarded
//                     </p>
//                     <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
//                         {learning.badgeDistribution.map(badge => (
//                             <div key={badge.badgeId} className="flex items-center justify-between">
//                                 <span className="text-xs text-gray-600 dark:text-gray-300 truncate">
//                                     {BADGE_NAMES[badge.badgeId] ?? badge.badgeId}
//                                 </span>
//                                 <span className="text-xs font-black text-gray-500 dark:text-gray-400 ml-2">
//                                     ×{badge.count}
//                                 </span>
//                             </div>
//                         ))}
//                         {learning.badgeDistribution.length === 0 && (
//                             <p className="text-xs text-gray-400">No badges awarded yet.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Trophy, Flame, Target, Award, Star } from 'lucide-react'
import type { PlatformAnalytics } from './types'

interface Props {
    learning: PlatformAnalytics['learning']
}

const BADGE_NAMES: Record<string, string> = {
    first_lesson: '🎯 First Step',
    first_quiz: '🧠 Quiz Taker',
    first_module: '📖 Module Complete',
    first_course: '🎓 Graduate',
    streak_3: '🔥 On Fire',
    streak_7: '⚡ Week Warrior',
    streak_30: '🏆 Unstoppable',
    xp_100: '💫 Century',
    xp_500: '🌟 Rising Star',
    xp_1000: '👑 Legend',
    perfect_quiz: '✨ Perfect Score',
}

export function LearningSection({ learning }: Props) {
    const medals = ['🥇', '🥈', '🥉']

    return (
        <div className="space-y-6">
            <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] px-1">
                Platform Education & Mastery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* 1. Course Progress - "The Track" */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl lg:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                            Popular Courses
                        </p>
                    </div>
                    
                    <div className="space-y-5">
                        {learning.courseBreakdown.map(course => {
                            const maxLessons = Math.max(...learning.courseBreakdown.map(c => c.lessonsCompleted), 1);
                            return (
                                <div key={course.courseId} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                                                {course.emoji} {course.displayName}
                                            </span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">
                                                {course.uniqueLearners.toLocaleString()} Active Learners
                                            </span>
                                        </div>
                                        <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded-md">
                                            {course.lessonsCompleted} Done
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 group-hover:brightness-110"
                                            style={{ width: `${Math.min((course.lessonsCompleted / maxLessons) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 2. Top Learners - "The Hall of Fame" */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                            <Trophy className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                            Top Contributors
                        </p>
                    </div>

                    <div className="space-y-2">
                        {learning.topLearners.slice(0, 7).map((learner, i) => (
                            <div key={learner.userId} className="flex items-center justify-between p-2 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 text-sm font-black text-gray-400 group-hover:text-yellow-500 transition-colors">
                                        {medals[i] ?? `${i + 1}`}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 truncate max-w-[100px]">
                                            {learner.username ?? `User...${learner.userId.slice(-4)}`}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs font-black text-gray-900 dark:text-white">
                                        {learner.totalXP.toLocaleString()}
                                    </span>
                                    <span className="text-[9px] font-bold text-yellow-600 uppercase tracking-tighter">XP Points</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Engagement - "The Pulse" */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            <Award className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                            Global Engagement
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {[
                            { icon: <Flame />, val: learning.streakStats.usersWithActiveStreak, lab: 'Active', col: 'text-orange-500' },
                            { icon: <Target />, val: `${learning.streakStats.avgStreak}d`, lab: 'Avg', col: 'text-blue-500' },
                            { icon: <Trophy />, val: `${learning.streakStats.longestStreak}d`, lab: 'Best', col: 'text-purple-500' }
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/10">
                                <div className={`${s.col} mb-1 opacity-80`}>{s.icon}</div>
                                <span className="text-sm font-black text-gray-900 dark:text-white">{s.val}</span>
                                <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">{s.lab}</span>
                            </div>
                        ))}
                    </div>

                    {/* Badge List with custom scrollbar */}
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3 px-1">
                        Recent Badges
                    </p>
                    <div className="space-y-2 h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                        {learning.badgeDistribution.map(badge => (
                            <div key={badge.badgeId} className="flex items-center justify-between p-2 bg-white/30 dark:bg-white/5 rounded-lg border border-white/10 hover:scale-[1.02] transition-transform">
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                                    {BADGE_NAMES[badge.badgeId] ?? badge.badgeId}
                                </span>
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    ×{badge.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}