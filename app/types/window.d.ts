interface Window {
    ethereum?: {
        isMiniPay?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, handler: (...args: any[]) => void) => void;
        removeListener: (event: string, handler: (...args: any[]) => void) => void;
        [key: string]: any;
    };
}