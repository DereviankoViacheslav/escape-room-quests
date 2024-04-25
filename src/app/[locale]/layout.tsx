import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { dir } from 'i18next';
import { Locale, i18nConfig } from '@/configs/i18nConfig';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const raleway = Raleway({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Escape Room - Quests',
    description: 'Escape Room - Quests',
};

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    return (
        <html lang={locale} dir={dir(locale)}>
            <body
                className={`relative text-sm text-[--text-color-primary] bg-[--home-background-color] ${raleway.className}`}
            >
                <Header locale={locale} />
                <main className="h-full">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
