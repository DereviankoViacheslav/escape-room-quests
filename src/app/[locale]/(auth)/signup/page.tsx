import Link from 'next/link';
import { SignupForm } from '@/components/SignupForm/SignupForm';

export default async function Signup() {
    return (
        <div className="h-full flex justify-center pt-[--header-height]">
            <div className="w-[480px] p-8">
                <SignupForm />
                <div className="flex justify-center mt-4">
                    <Link
                        href="/signin"
                        className="text-[--text-color-secondary] font-bold underline"
                    >
                        Войдите если уже есть аккаунт
                    </Link>
                </div>
            </div>
        </div>
    );
}
