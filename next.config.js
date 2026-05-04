// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         esmExternals: 'loose'
//     },
//     webpack: (config) => {
//         config.resolve.fallback = {
//             ...config.resolve.fallback,
//             accounts: false,
//         };
//         return config;
//     },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: 'loose'
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            accounts: false,
            '@base-org/account': false,
            'coinbase-sdk': false,
            '@coinbase/wallet-sdk': false,
            '@metamask/connect-evm': false,
            'porto/internal': false,
            'porto': false,
            '@safe-global/safe-apps-sdk': false,
            '@safe-global/safe-apps-provider': false,
            '@walletconnect/ethereum-provider': false,
        };
        return config;
    },
}

module.exports = nextConfig