import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/icons/logo.svg"
                alt="Logo icon"
                width={134}
                height={50}
            />
        </Link>
    );
}
