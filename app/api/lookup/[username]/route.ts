import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Minimal wallet schema — mirrors your bot's WalletModel
const WalletSchema = new mongoose.Schema({
    username: String,
    user_id: String,
    address: String,
}, { strict: false });

// Reuse connection across requests
let isConnected = false;

async function connectDB() {
    if (isConnected) return;
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI not set');
    await mongoose.connect(uri);
    isConnected = true;
}

function getWalletModel() {
    return mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);
}

export async function GET(
    req: NextRequest,
    { params }: { params: { username: string } }
) {
    try {
        const username = params.username?.toLowerCase().trim();
        if (!username) {
            return NextResponse.json({ error: 'Username required' }, { status: 400 });
        }

        await connectDB();
        const WalletModel = getWalletModel();

        const wallet = await WalletModel.findOne(
            { username: { $regex: new RegExp(`^${username}$`, 'i') } } as any,
            { address: 1, username: 1 }
        );

        if (!wallet) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({
            username: wallet.username,
            address: wallet.address,
        });

    } catch (error) {
        console.error('Lookup error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}