import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const raleway = Raleway({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Escape Room - Quests',
    description: 'Escape Room - Quests',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`relative text-sm text-[--text-color-primary] bg-[--home-background-color] ${raleway.className}`}
            >
                <Header />
                <main className="h-full">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
