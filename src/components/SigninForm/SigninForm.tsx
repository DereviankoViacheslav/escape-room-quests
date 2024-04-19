'use client';
import { z } from 'zod';
import { Form } from '@/components/Form/Form';
import { TFormField } from '@/components/FormField/FormField';
import { signIn } from '@/actions/auth';
import { useRouter } from 'next/navigation';

const ValidationSchema = z.object({
    email: z
        .string({ required_error: 'Обязательное поле' })
        .email({ message: 'Невалидный email' }),
    password: z
        .string({ required_error: 'Обязательное поле' })
        .min(4, { message: 'Минимальная длина 4 символа' })
        .max(16, { message: 'Максимальная длина 16 символов' }),
});

const formFields: TFormField[] = [
    {
        name: 'email',
        type: 'text',
        label: 'Почта',
        placeholder: 'Email',
    },
    {
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: 'Пароль',
    },
];

export function SigninForm() {
    const router = useRouter();

    return (
        <Form
            onSubmit={async (data) => {
                const res = await signIn({
                    email: data.email,
                    password: data.password,
                });
                if (res === 201) {
                    router.push('/');
                }
            }}
            formFields={formFields}
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ValidationSchema}
            formTitle="Вход"
            btnTitle="войти"
        />
    );
}
