'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export function AskAI() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages update
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    async function handleAsk() {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setLoading(true);

        try {
            const res = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMessage }),
            });
            const data = await res.json();
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.answer || 'Sorry, I could not process that.'
            }]);
        } catch {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Something went wrong. Please try again.'
            }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-4 flex flex-col h-[500px] shadow-xl transition-all">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                        <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="font-bold text-gray-900 dark:text-white tracking-tight">OnchainWiki</h2>
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                    Beta
                </div>
            </div>

            {/* Messages Area */}
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar scroll-smooth"
            >
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                        <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-4">
                            <Bot className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-[200px]">
                            Ask me anything about Web3, Celo or OnchainWiki 🌿
                        </p>
                    </div>
                )}
                
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                        <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${
                                msg.role === 'user' 
                                ? 'bg-gray-900 border-gray-800 text-white' 
                                : 'bg-green-500/10 border-green-500/20 text-green-600'
                            }`}>
                                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            <div className={`p-3.5 text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user'
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl rounded-tr-none'
                                    : 'bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-none border border-gray-200/50 dark:border-white/5'
                            }`}>
                                {msg.content}
                            </div>
                        </div>
                    </div>
                ))}
                
                {loading && (
                    <div className="flex justify-start animate-pulse">
                        <div className="flex gap-3 max-w-[85%]">
                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                <Loader2 className="w-4 h-4 animate-spin" />
                            </div>
                            <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none border border-gray-200/50 dark:border-white/5">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce" />
                                    <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Bar */}
            <div className="relative flex items-center gap-2 p-2 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 focus-within:ring-2 focus-within:ring-green-500/20 transition-all">
                <input
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAsk()}
                    className="flex-1 bg-transparent border-none px-2 py-1 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none"
                />
                <button
                    onClick={handleAsk}
                    disabled={loading || !input.trim()}
                    className="bg-gray-900 dark:bg-green-500 text-white p-2 rounded-xl transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}