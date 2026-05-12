// export function AnalyticsSkeleton() {
//     return (
//         <div className="space-y-8 animate-pulse">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {[...Array(4)].map((_, i) => (
//                     <div key={i} className="h-28 bg-white/60 dark:bg-white/5 rounded-2xl" />
//                 ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, i) => (
//                     <div key={i} className="h-48 bg-white/60 dark:bg-white/5 rounded-2xl" />
//                 ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[...Array(2)].map((_, i) => (
//                     <div key={i} className="h-64 bg-white/60 dark:bg-white/5 rounded-2xl" />
//                 ))}
//             </div>
//         </div>
//     )
// }

export function AnalyticsSkeleton() {
  return (
    <div className="space-y-10">
      {/* 1. Floating Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            style={{ animationDelay: `${i * 100}ms` }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white/40 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-3xl p-6 h-36 relative overflow-hidden group"
          >
            {/* The Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20" />
              <div className="w-8 h-4 bg-gray-200/50 dark:bg-white/10 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-7 w-2/3 bg-gray-300/50 dark:bg-white/10 rounded-lg" />
              <div className="h-3 w-1/2 bg-gray-200/50 dark:bg-white/5 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Graph Placeholder (The "Neural" Look) */}
      <div className="relative h-[350px] bg-white/30 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2.5rem] p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-300/50 dark:bg-white/20 rounded-md" />
                <div className="h-3 w-48 bg-gray-200/50 dark:bg-white/10 rounded-md" />
            </div>
            <div className="flex gap-2">
                <div className="w-16 h-8 bg-gray-200/50 dark:bg-white/10 rounded-xl" />
                <div className="w-16 h-8 bg-gray-200/50 dark:bg-white/10 rounded-xl" />
            </div>
        </div>
        {/* Abstract "Wave" Skeleton - mimics a chart line */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20 dark:opacity-10">
            <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d">
                <path 
                    d="M0 80 Q 50 10, 100 70 T 200 40 T 300 80 T 400 20 V100 H0 Z" 
                    fill="url(#skeleton-gradient)"
                    className="animate-pulse"
                />
                <defs>
                    <linearGradient id="skeleton-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
      </div>

      {/* 3. Detailed Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            style={{ animationDelay: `${(i + 4) * 150}ms` }}
            className="animate-in fade-in zoom-in-95 duration-1000 p-6 rounded-3xl bg-white/20 dark:bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-blue-500/40 rounded-full" />
                <div className="h-4 w-24 bg-gray-300/50 dark:bg-white/20 rounded-md" />
            </div>
            <div className="space-y-6">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-20 bg-gray-200/50 dark:bg-white/10 rounded" />
                    <div className="h-3 w-8 bg-gray-200/50 dark:bg-white/10 rounded" />
                  </div>
                  <div className="h-2 w-full bg-gray-100/30 dark:bg-white/5 rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-500/10 w-1/3 animate-[shimmer_1.5s_infinite]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}