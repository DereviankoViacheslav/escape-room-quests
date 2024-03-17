'use client';
import { usePathname } from 'next/navigation';
import { Category } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryNavigation({
    categories,
}: {
    categories: Category[];
}) {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between mb-10 font-bold">
            {categories.map(({ image, label, type }) => {
                const href = `/${type}`;
                const isActive = pathname === href;

                return (
                    <Link
                        key={href}
                        href={href}
                        className="flex justify-center items-center  h-10 pr-11 border-r-[1px] border-[#ffffff52] last:border-r-0 last:pr-0"
                    >
                        <Image
                            src={image}
                            alt="Category icon"
                            width={30}
                            height={30}
                            className="mr-3"
                        />
                        <span
                            className={`border-b-2 border-[--text-color-secondary] ${isActive ? '' : 'border-transparent'} hover:border-[--text-color-secondary]`}
                        >
                            {label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
