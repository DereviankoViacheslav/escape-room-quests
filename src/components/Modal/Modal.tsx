import Link from 'next/link';
import Image from 'next/image';

export function Modal({
    children,
    backUrl,
}: {
    children: React.ReactNode;
    backUrl: string;
}) {
    return (
        <div className="fixed z-50 top-0 flex justify-center items-center min-w-full min-h-full bg-black bg-opacity-80">
            <Link href={backUrl}>
                <Image
                    src="/icons/icon-close.svg"
                    alt="Close icon"
                    width={30}
                    height={30}
                    className="absolute top-20 right-20 cursor-pointer"
                />
            </Link>
            {children}
        </div>
    );
}
