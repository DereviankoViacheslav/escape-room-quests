import Navigation from '../Navigation/Navigation';
import Logo from '../ui/Logo';

export default function Header() {
    return (
        <header className="absolute left-0 right-0 flex justify-between items-center h-[--header-height] w-full px-8 py-6 bg-slate-300 bg-opacity-0 font-semibold bg-gradient-to-b from-black">
            <Logo />
            <Navigation />
            <a href="tel:+380661234567">+380(66)-123-45-67</a>
        </header>
    );
}
