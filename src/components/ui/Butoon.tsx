export function Button({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <button className="py-6 px-12 rounded-[65px] bg-[--text-color-secondary] uppercase font-bold">
            {children}
        </button>
    );
}
