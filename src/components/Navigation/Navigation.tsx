'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type NavLink = {
    name: string;
    href: string;
};

const BOOKS: NavLink[] = [
    { href: '/', name: 'quests' },
    { href: '/beginner', name: 'beginner' },
    { href: '/feedbacks', name: 'feedbacks' },
    { href: '/promotions', name: 'promotions' },
    { href: '/contacts', name: 'contacts' },
];

export default function Navigation() {
    const pathName = usePathname();
    const { t } = useTranslation();

    return (
        <nav className="flex gap-12">
            {BOOKS.map(({ href, name }) => {
                const isActive = pathName === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`hover:[color:--text-color-secondary] ${isActive ? 'text-[--text-color-secondary]' : ''}`}
                    >
                        {t(`${name}`)}
                    </Link>
                );
            })}
        </nav>
    );
}
