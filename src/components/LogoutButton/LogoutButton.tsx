'use client';
import { useRouter } from 'next/navigation';
import { logOut } from '@/actions/auth';

export default function LogoutButton() {
    const router = useRouter();

    return (
        <button
            className=""
            onClick={() => {
                logOut();
                router.push('/signin');
            }}
        >
            Logout
        </button>
    );
}
