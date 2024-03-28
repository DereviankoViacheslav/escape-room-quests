'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function CloseIconModal() {
    const router = useRouter();

    return (
        <Image
            src="/icons/icon-close.svg"
            alt="Close icon"
            width={30}
            height={30}
            className="absolute top-20 right-20 cursor-pointer"
            onClick={router.back}
        />
    );
}
