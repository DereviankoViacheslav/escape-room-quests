'use client';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
// import { usePathname } from 'next/navigation';
// import { i18nConfig } from '@/configs/i18nConfig';

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    // const currentPathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

        // redirect to the new locale path
        // if (
        //     currentLocale === i18nConfig.defaultLocale &&
        //     !i18nConfig.prefixDefault
        // ) {
        //     router.push('/' + newLocale + currentPathname);
        // } else {
        //     router.push(
        //         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        //     );
        // }

        router.refresh();
    };

    return (
        <select onChange={handleChange} value={currentLocale}>
            <option value="ru">ru</option>
            <option value="en">en</option>
        </select>
    );
}

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { i18nConfig, type Locale } from '@/configs/i18nConfig';

// export function LS() {
//     const pathName = usePathname();
//     const redirectedPathName = (locale: Locale) => {
//         if (!pathName) return '/';
//         const segments = pathName.split('/');
//         segments[1] = locale;
//         return segments.join('/');
//     };

//     return (
//         <div>
//             <ul>
//                 {i18nConfig.locales.map((locale) => {
//                     return (
//                         <li key={locale}>
//                             <Link href={redirectedPathName(locale)}>
//                                 {locale}
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }
