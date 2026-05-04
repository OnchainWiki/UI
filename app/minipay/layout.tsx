export default function MiniPayLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="minipay-root">
            {children}
        </div>
    );
}