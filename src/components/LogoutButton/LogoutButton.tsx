'use client';
import { useRouter } from 'next/navigation';
import { logOut } from '@/actions/auth';
import { useTranslation } from 'react-i18next';

export default function LogoutButton() {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <button
            className=""
            onClick={() => {
                logOut();
                router.replace('/signin');
            }}
        >
            {t('logOutBtn')}
        </button>
    );
}
