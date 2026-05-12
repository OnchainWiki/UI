export interface PlatformAnalytics {
    overview: {
        totalUsers: number
        totalLearners: number
        totalLessonsCompleted: number
        totalXPAwarded: number
        totalTransactions: number
        totalOnramps: number
        totalOfframps: number
    }
    growth: {
        newUsersPerWeek: { week: string; count: number }[]
        lessonsPerWeek: { week: string; count: number }[]
        transactionsPerDay: { date: string; count: number }[]
    }
    learning: {
        courseBreakdown: {
            courseId: string
            displayName: string
            emoji: string
            lessonsCompleted: number
            uniqueLearners: number
        }[]
        topLearners: {
            userId: string
            username?: string
            totalXP: number
            rank: number
        }[]
        badgeDistribution: { badgeId: string; count: number }[]
        streakStats: {
            usersWithActiveStreak: number
            avgStreak: number
            longestStreak: number
        }
    }
    transactions: {
        byType: { send: number; onramp: number; offramp: number }
        byChain: { chainId: number; count: number }[]
        byToken: { token: string; count: number }[]
    }
    chains: {
        chainId: number
        chainName: string
        userCount: number
    }[]
    generatedAt: string
}