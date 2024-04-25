import { cookies } from 'next/headers';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/Providers/TranslationsProvider';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import Navigation from '@/components/Navigation/Navigation';
import Logo from '@/components/ui/Logo';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Locale } from '@/configs/i18nConfig';

const i18nNamespaces = ['Header', 'MenuList'];
// const i18nNamespaces = ['MenuList', 'Header'];

export default async function Header({ locale }: { locale: Locale }) {
    const userId = cookies().get('userId')?.value;
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <header className="absolute left-0 right-0 flex justify-between items-center h-[--header-height] w-full px-8 py-6 bg-slate-300 bg-opacity-0 font-semibold bg-gradient-to-b from-black">
                <Logo />
                <Navigation />
                {userId && <LogoutButton />}
                <a href="tel:+380661234567">+380(66)-123-45-67</a>
                <LocaleSwitcher />
            </header>
        </TranslationsProvider>
    );
}
