import CategoryNavigation from '@/components/CategoryNavigation/CategoryNavigation';
import { Locale } from '@/configs/i18nConfig';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/Providers/TranslationsProvider';
import { Categories } from '@/constants';

const i18nNamespaces = ['Categories'];

export default async function HomeLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <div className="py-[120px] px-[136px] pb-10">
            <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}
            >
                <h1 className="mb-1 text-[--text-color-secondary]">
                    {t('title')}
                </h1>
                <p className="mb-12 text-6xl font-bold">{t('subTitle')}</p>
            </TranslationsProvider>
            <CategoryNavigation categories={Categories} />
            {children}
        </div>
    );
}
