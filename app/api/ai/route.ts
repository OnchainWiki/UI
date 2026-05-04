import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { question } = await req.json();
        if (!question) {
            return NextResponse.json({ error: 'Question required' }, { status: 400 });
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'meta-llama/llama-3.1-8b-instruct:free',
                messages: [
                    {
                        role: 'system',
                        content: 'You are OnchainWiki, a Web3 and blockchain assistant. Answer questions clearly and concisely. Focus on Celo, DeFi, stablecoins, and crypto education.'
                    },
                    { role: 'user', content: question }
                ],
                max_tokens: 500,
            }),
        });

        const data = await response.json();
        const answer = data.choices?.[0]?.message?.content || 'No response received.';

        return NextResponse.json({ answer });

    } catch (error) {
        console.error('AI API error:', error);
        return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 });
    }
}