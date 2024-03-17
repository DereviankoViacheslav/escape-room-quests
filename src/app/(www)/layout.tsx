import CategoryNavigation from '@/components/CategoryNavigation/CategoryNavigation';
import { Categories } from '@/constants';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pt-[120px] px-[136px] pb-10">
            <h1 className="mb-1 text-[--text-color-secondary]">
                квесты в Санкт-Петербурге
            </h1>
            <p className="mb-12 text-6xl font-bold">Выберите тематику</p>
            <CategoryNavigation categories={Categories} />
            {children}
        </div>
    );
}
