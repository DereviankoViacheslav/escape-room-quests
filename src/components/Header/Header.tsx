import { cookies } from 'next/headers';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import Navigation from '@/components/Navigation/Navigation';
import Logo from '@/components/ui/Logo';

export default function Header() {
    const userId = cookies().get('userId')?.value;

    return (
        <header className="absolute left-0 right-0 flex justify-between items-center h-[--header-height] w-full px-8 py-6 bg-slate-300 bg-opacity-0 font-semibold bg-gradient-to-b from-black">
            <Logo />
            <Navigation />
            {userId && <LogoutButton />}
            <a href="tel:+380661234567">+380(66)-123-45-67</a>
        </header>
    );
}
