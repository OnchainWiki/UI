'use client';

import { useState } from 'react';
import { useAccount, useSendTransaction, useWriteContract } from 'wagmi';
import { parseUnits, isAddress } from 'viem';
import { celo } from 'wagmi/chains';
import { Coins, User, ArrowUpRight, ExternalLink, RefreshCcw, CheckCircle2, AlertCircle } from 'lucide-react';

const USDT_CELO = '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e' as `0x${string}`;
const USDC_CELO = '0xcebA9300f2b948710d2653dD7B07f33A8B32118C' as `0x${string}`;

const ERC20_ABI = [
    {
        name: 'transfer',
        type: 'function',
        inputs: [
            { name: 'to', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        outputs: [{ type: 'bool' }],
        stateMutability: 'nonpayable',
    },
] as const;

type Token = 'CELO' | 'USDT' | 'USDC';

export function SendCrypto() {
    const { address } = useAccount();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [token, setToken] = useState<Token>('USDT');
    const [status, setStatus] = useState<'idle' | 'resolving' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [txHash, setTxHash] = useState('');

    const { sendTransactionAsync } = useSendTransaction();
    const { writeContractAsync } = useWriteContract();

    async function resolveRecipient(input: string): Promise<`0x${string}` | null> {
        const trimmed = input.trim();

        if (isAddress(trimmed)) return trimmed as `0x${string}`;

        const username = trimmed.startsWith('@') ? trimmed.slice(1) : trimmed;
        try {
            const res = await fetch(`/api/lookup/${username}`);
            if (!res.ok) return null;
            const data = await res.json();
            return data.address as `0x${string}`;
        } catch {
            return null;
        }
    }

    async function handleSend() {
        if (!address || !recipient || !amount) return;

        setStatus('resolving');
        setErrorMsg('');

        const toAddress = await resolveRecipient(recipient);
        if (!toAddress) {
            setErrorMsg('User not found or invalid address');
            setStatus('error');
            return;
        }

        setStatus('sending');

        try {
            let hash: `0x${string}`;

            if (token === 'CELO') {
                hash = await sendTransactionAsync({
                    to: toAddress,
                    value: parseUnits(amount, 18),
                    chainId: celo.id,
                });
            } else {
                const tokenAddress = token === 'USDT' ? USDT_CELO : USDC_CELO;
                
                // Fixed previous nested useAccount() declaration error here
                hash = await writeContractAsync({
                    address: tokenAddress,
                    abi: ERC20_ABI,
                    functionName: 'transfer',
                    args: [toAddress, parseUnits(amount, 6)],
                    chainId: celo.id,
                    chain: celo,
                    account: address,
                });
            }

            setTxHash(hash);
            setStatus('success');
            setRecipient('');
            setAmount('');
        } catch (error: any) {
            setErrorMsg(error.message || 'Transaction failed');
            setStatus('error');
        }
    }

    return (
        <div className="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-6 shadow-xl transition-all">
            
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 px-1">
                <div className="p-2.5 bg-green-500/10 rounded-xl text-green-600 dark:text-green-400">
                    <Coins className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white leading-none mb-1">Send Assets</h2>
                    <p className="text-xs text-gray-400 font-medium">Instantly move funds over the Celo network</p>
                </div>
            </div>

            {/* Token Selector Grid */}
            <div className="grid grid-cols-3 gap-2 mb-5">
                {(['CELO', 'USDT', 'USDC'] as Token[]).map(t => (
                    <button
                        key={t}
                        onClick={() => setToken(t)}
                        className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                            token === t
                                ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/20'
                                : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                        }`}
                    >
                        <span className="text-base">{t === 'CELO' ? '🌿' : t === 'USDT' ? '💵' : '🔵'}</span>
                        {t}
                    </button>
                ))}
            </div>

            {/* Recipient Input Card */}
            <div className="relative group mb-3">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition-colors">
                    <User className="w-4 h-4" />
                </div>
                <input
                    type="text"
                    placeholder="@username or 0x address"
                    value={recipient}
                    onChange={e => setRecipient(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                />
            </div>

            {/* Amount Input Card */}
            <div className="relative group mb-5">
                <input
                    type="number"
                    placeholder={`0.00`}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest bg-white dark:bg-white/10 px-2 py-1 rounded-md border border-gray-100 dark:border-white/5">
                        {token}
                    </span>
                </div>
            </div>

            {/* Send Button */}
            <button
                onClick={handleSend}
                disabled={status === 'resolving' || status === 'sending' || !recipient || !amount}
                className="w-full bg-gray-900 dark:bg-green-500 text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.98] disabled:opacity-30 flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-green-600 shadow-lg dark:shadow-green-500/20"
            >
                {status === 'resolving' && <RefreshCcw className="w-4 h-4 animate-spin" />}
                {status === 'sending' && <RefreshCcw className="w-4 h-4 animate-spin" />}
                
                <span className="font-bold">
                    {status === 'resolving' ? 'Looking up user...' :
                     status === 'sending' ? 'Executing Transaction...' :
                     `Send ${token}`}
                </span>
                
                {status === 'idle' && <ArrowUpRight className="w-4 h-4" />}
            </button>

            {/* Status Feedback Messages */}
            {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-500/10 border border-green-200/50 dark:border-green-500/20 rounded-xl flex items-start gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-bold text-green-800 dark:text-green-300">Transaction Successful</p>
                        <a
                            href={`https://celoscan.io/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-green-700 dark:text-green-400 hover:underline mt-1 cursor-pointer"
                        >
                            View on explorer
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200/50 dark:border-red-500/20 rounded-xl flex items-start gap-3 animate-in fade-in duration-300">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-red-800 dark:text-red-300">Transaction Failed</p>
                        <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-0.5 font-medium">{errorMsg}</p>
                    </div>
                </div>
            )}
        </div>
    );
}