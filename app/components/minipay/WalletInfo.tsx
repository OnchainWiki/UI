'use client';

import { useAccount, useBalance, useReadContract } from 'wagmi';
import { celo } from 'wagmi/chains';
import { formatUnits } from 'viem';
import { Wallet, Copy, ExternalLink, ShieldCheck, PieChart, TrendingUp } from 'lucide-react';

// Celo mainnet token addresses
const USDT_CELO = '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e' as `0x${string}`;
const USDC_CELO = '0xcebA9300f2b948710d2653dD7B07f33A8B32118C' as `0x${string}`;

const ERC20_BALANCE_ABI = [
    {
        name: 'balanceOf',
        type: 'function',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
    },
] as const;

function TokenRow({
    label,
    emoji,
    tokenAddress,
    address,
}: {
    label: string;
    emoji: string;
    tokenAddress?: `0x${string}`;
    address: `0x${string}`;
}) {
    // Native CELO balance
    const { data: nativeData, isLoading: nativeLoading } = useBalance({
        address,
        chainId: celo.id,
        query: { enabled: !tokenAddress },
    });

    // ERC20 token balance
    const { data: tokenBalance, isLoading: tokenLoading } = useReadContract({
        address: tokenAddress!,
        abi: ERC20_BALANCE_ABI,
        functionName: 'balanceOf',
        args: [address],
        chainId: celo.id,
        query: { enabled: !!tokenAddress },
    });

    const isLoading = tokenAddress ? tokenLoading : nativeLoading;

    let formatted = '0.0000';
    if (tokenAddress && tokenBalance !== undefined) {
        // Standardizing to 6 decimals for stablecoins as per original logic
        formatted = parseFloat(formatUnits(tokenBalance as bigint, 6)).toFixed(4);
    } else if (!tokenAddress && nativeData) {
        formatted = parseFloat(formatUnits(nativeData.value, nativeData.decimals)).toFixed(4);
    }

    return (
        <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all group">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 flex items-center justify-center text-xl shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                    {emoji}
                </div>
                <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{label}</div>
                    <div className="text-sm font-black text-gray-900 dark:text-white">Onchain Asset</div>
                </div>
            </div>
            <div className="text-right">
                <div className={`font-mono font-bold text-gray-900 dark:text-white ${isLoading ? 'animate-pulse' : ''}`}>
                    {isLoading ? '••••' : formatted}
                </div>
                <div className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest flex items-center justify-end gap-1">
                    <TrendingUp className="w-2.5 h-2.5" /> Live
                </div>
            </div>
        </div>
    );
}

export function WalletInfo() {
    const { address } = useAccount();

    if (!address) return null;

    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* The Main Digital Card */}
            <div className="relative overflow-hidden bg-gray-900 dark:bg-neutral-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
                {/* Abstract Background Shapes */}
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Verified Account</span>
                        </div>
                        <button 
                            onClick={copyToClipboard}
                            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors active:scale-90"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Active Wallet</p>
                        <h3 className="text-2xl font-mono font-bold tracking-tight">{shortAddress}</h3>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Celo Mainnet</span>
                        </div>
                        <a 
                            href={`https://celoscan.io/address/${address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:text-green-400 transition-colors"
                        >
                            Explorer <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Asset Breakdown Section */}
            <div className="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-6 px-2">
                    <PieChart className="w-4 h-4 text-green-600" />
                    <h2 className="font-black text-gray-900 dark:text-white uppercase text-xs tracking-[0.15em]">Portfolio Distribution</h2>
                </div>
                
                <div className="space-y-3">
                    <TokenRow emoji="🌿" label="CELO" address={address} />
                    <TokenRow emoji="💵" label="USDT" tokenAddress={USDT_CELO} address={address} />
                    <TokenRow emoji="💰" label="USDC" tokenAddress={USDC_CELO} address={address} />
                </div>
            </div>
        </div>
    );
}