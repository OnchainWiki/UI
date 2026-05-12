'use client'

import { OverviewCards } from './OverviewCards'
import { LearningSection } from './LearningSection'
import { TransactionSection } from './TransactionSection'
import { GrowthSection } from './GrowthSection'
import { ChainSection } from './ChainSection'
import type { PlatformAnalytics } from './types'

interface Props {
    data: PlatformAnalytics
}

export function AnalyticsDashboard({ data }: Props) {
    return (
        <div className="space-y-8">
            <OverviewCards overview={data.overview} />
            {/* <GrowthSection growth={data.growth} /> */}
            <LearningSection learning={data.learning} />
            <TransactionSection transactions={data.transactions} />
            {/* <ChainSection chains={data.chains} /> */}
        </div>
    )
}