import { Suspense } from 'react'
import { AnalyticsDashboard } from '../components/analytics/AnalyticsDashboard'
import { AnalyticsSkeleton } from '../components/analytics/AnalyticsSkeleton'

export const metadata = {
    title: 'Analytics — OnchainWiki',
    description: 'Live platform metrics for OnchainWiki. users, learners, transactions and more.',
}

// Revalidate every 5 minutes — matches backend cache TTL
export const revalidate = 300

// async function getAnalytics() {
//     const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
//     const res = await fetch(`${baseUrl}/api/analytics`, {
//         next: { revalidate: 300 },
//     })
//     if (!res.ok) throw new Error('Failed to fetch analytics')
//     return res.json()
// }
async function getAnalytics() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    if (!baseUrl) {
        console.error("API URL is not defined in environment variables");
        return null; 
    }

    try {
        const res = await fetch(`${baseUrl}/api/analytics`, {
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            console.error(`Fetch failed with status: ${res.status}`);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error("Network error fetching analytics:", error);
        return null;
    }
}

export default async function AnalyticsPage() {
    const data = await getAnalytics().catch(() => null)

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        Onchainwiki Analytics
                    </h1>
                    {/* <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                        Live metrics across users, learning, and transactions.
                        {data?.generatedAt && (
                            <span className="ml-2 text-gray-400 dark:text-gray-500">
                                Updated {new Date(data.generatedAt).toLocaleTimeString()}
                            </span>
                        )}
                    </p> */}
                </div>

                <Suspense fallback={<AnalyticsSkeleton />}>
                    {data ? (
                        <AnalyticsDashboard data={data} />
                    ) : (
                        <div className="text-center py-20 text-gray-400">
                            Could not load analytics. Please try again later.
                        </div>
                    )}
                </Suspense>
            </div>
        </main>
    )
}