'use client';

import { useEffect, useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Sparkles, Wallet, Send, MessageSquare, Bot, ArrowRight, Zap } from 'lucide-react';
import { MiniPayProvider } from '../components/minipay/MiniPayProvider';
import { NotMiniPay } from '../components/minipay/NotMiniPay';
import { WalletInfo } from '../components/minipay/WalletInfo';
import { SendCrypto } from '../components/minipay/SendCrypto';
import { AskAI } from '../components/minipay/AskAI';

type Tab = 'wallet' | 'send' | 'ask';

function MiniPayApp() {
    const { isConnected } = useAccount();
    const { connect } = useConnect();
    const [isMiniPay, setIsMiniPay] = useState<boolean | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('wallet');

    useEffect(() => {
        const checkMiniPay = () => {
            const detected = !!(window.ethereum && (window.ethereum as any).isMiniPay);
            setIsMiniPay(detected);

            if (detected && !isConnected) {
                connect({ connector: injected() });
            }
        };

        const timer = setTimeout(checkMiniPay, 100);
        return () => clearTimeout(timer);
    }, [isConnected, connect]);

    if (isMiniPay === null) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-950">
                <div className="relative">
                    <div className="w-14 h-14 border-4 border-green-500/20 border-t-green-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-sm select-none">🌿</div>
                </div>
                <p className="mt-5 text-gray-400 font-bold tracking-widest uppercase text-xs animate-pulse">
                    Initializing
                </p>
            </div>
        );
    }

  if (!isMiniPay) {
       return <NotMiniPay />;
    }

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-neutral-950 pb-32 transition-colors duration-500">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-6 py-4">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                            <span className="text-xl">🌿</span>
                        </div>
                        <div>
                            <h1 className="font-black text-gray-900 dark:text-white text-lg tracking-tight leading-none mb-1">
                                OnchainWiki
                            </h1>
                            <div className="flex items-center gap-1">
                                <Zap className="w-3 h-3 text-green-500 fill-current animate-pulse" />
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                                    <i>Powered by</i> EmClickz Labz
                                </p>
                            </div>
                        </div>
                    </div>
                    {isConnected && (
                        <div className="px-3.5 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-md shadow-sm">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black text-green-700 dark:text-green-400 uppercase tracking-wider">
                                    Live
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Content Area */}
            <main className="max-w-2xl mx-auto px-4 pt-6 space-y-6">
                <div className="min-h-[400px] transition-all duration-300">
                    {activeTab === 'wallet' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <WalletInfo />
                        </div>
                    )}
                    {activeTab === 'send' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <SendCrypto />
                        </div>
                    )}
                    {activeTab === 'ask' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <AskAI />
                        </div>
                    )}
                </div>

                <div className="relative group overflow-hidden bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 select-none">
                        <Bot className="w-28 h-28 text-blue-600" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Expansion</span>
                        </div>
                        <h3 className="text-gray-900 dark:text-white font-black text-lg tracking-tight mb-1">
                            Get the full experience
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 font-medium leading-relaxed">
                            Access real-time insights and premium AI mentorship.
                        </p>
                        <a
                            href="https://t.me/OnchainWiki_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-6 py-3.5 rounded-xl font-bold uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-blue-500/25"
                        >
                            Open in Telegram
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </main>

            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-50">
                <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 p-2 rounded-[2.5rem] shadow-2xl flex justify-around items-center ring-1 ring-black/5">
                    {([
                        { tab: 'wallet', icon: Wallet, label: 'Wallet' },
                        { tab: 'send', icon: Send, label: 'Send' },
                        { tab: 'ask', icon: MessageSquare, label: 'Ask AI' },
                    ] as { tab: Tab; icon: any; label: string }[]).map(({ tab, icon: Icon, label }) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative flex flex-col items-center py-3.5 px-6 rounded-[2rem] transition-all duration-300 flex-1 ${
                                    isActive 
                                        ? 'text-green-600 dark:text-green-400 font-extrabold' 
                                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 font-medium'
                                }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-green-500/10 dark:bg-green-500/20 rounded-[1.8rem] animate-in zoom-in duration-300" />
                                )}
                                <Icon className={`w-5 h-5 mb-1 relative z-10 ${isActive ? 'scale-110' : ''} transition-transform`} />
                                <span className="text-[10px] uppercase tracking-wider relative z-10">
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}

export default function MiniPayPage() {
    return (
        <MiniPayProvider>
            <MiniPayApp />
        </MiniPayProvider>
    );
}
