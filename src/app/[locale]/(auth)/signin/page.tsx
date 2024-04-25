import Link from 'next/link';
import { SigninForm } from '@/components/SigninForm/SigninForm';

export default async function Signin() {
    return (
        <div className="h-full flex justify-center pt-[--header-height]">
            <div className="w-[480px] p-8">
                <SigninForm />
                <div className="flex justify-center mt-4">
                    <Link
                        href="/signup"
                        className="text-[--text-color-secondary] font-bold underline"
                    >
                        Зарегистрируйтесь если нет аккаунта
                    </Link>
                </div>
            </div>
        </div>
    );
}
