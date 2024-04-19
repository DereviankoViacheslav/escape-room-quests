'use client';
import { z } from 'zod';
import { Form } from '@/components/Form/Form';
import { TFormField } from '@/components/FormField/FormField';
import { signUp } from '@/actions/auth';
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

export function SignupForm() {
    const router = useRouter();

    return (
        <Form
            onSubmit={async (data) => {
                const res = await signUp({
                    email: data.email,
                    password: data.password,
                });
                if (res === 201) {
                    router.push('/signin');
                }
            }}
            formFields={formFields}
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={ValidationSchema}
            formTitle="Регистрация"
            btnTitle="зарегистрироваться"
        />
    );
}
