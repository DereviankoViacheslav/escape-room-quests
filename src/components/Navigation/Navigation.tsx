'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
    label: string;
    href: string;
};

const BOOKS: NavLink[] = [
    { href: '/', label: 'квесты' },
    { href: '/beginner', label: 'новичкам' },
    { href: '/feedbacks', label: 'отзывы' },
    { href: '/promotions', label: 'акции' },
    { href: '/contacts', label: 'контакты' },
];

export default function Navigation() {
    const pathName = usePathname();

    return (
        <nav className="flex gap-12">
            {BOOKS.map(({ href, label }) => {
                const isActive = pathName === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`hover:[color:--text-color-secondary] ${isActive ? 'text-[--text-color-secondary]' : ''}`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
