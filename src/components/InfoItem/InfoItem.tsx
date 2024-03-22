import Image from 'next/image';

export function InfoItem({
    children,
    src,
    w,
    h,
    alt,
    borderHeight = 10,
}: Readonly<{
    children: React.ReactNode;
    w: number;
    h: number;
    alt: string;
    src: string;
    borderHeight?: number;
}>) {
    return (
        <div
            className={`flex items-center h-${borderHeight} pr-5 mr-5 border-r-[1px] border-[#ffffff52] last:border-r-0 last:pr-0 last:mr-0`}
        >
            <Image src={src} alt={alt} width={w} height={h} className="mr-1" />
            <span>{children}</span>
        </div>
    );
}
