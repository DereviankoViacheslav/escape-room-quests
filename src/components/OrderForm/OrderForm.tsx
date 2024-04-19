'use client';
import { z } from 'zod';
import { Form } from '@/components/Form/Form';
import { TFormField } from '@/components/FormField/FormField';
import { createOrder } from '@/actions/orders';
import { useRouter } from 'next/navigation';

const ValidationSchema = z.object({
    phone: z
        .string({ required_error: 'Обязательное поле' })
        .length(10, { message: 'Должно быть 10 символов' }),
    peopleCount: z.number({ required_error: 'Обязательное поле' }),
    isLegal: z.boolean({ required_error: 'Обязательное поле' }),
    questId: z.number(),
});

const formFields: TFormField[] = [
    {
        name: 'questId',
        type: 'hidden',
    },
    {
        name: 'phone',
        type: 'tel',
        label: 'Контактный телефон',
        placeholder: 'Телефон',
    },
    {
        name: 'peopleCount',
        type: 'number',
        label: 'Количество участников',
        placeholder: 'Количество участников',
    },
    {
        name: 'isLegal',
        type: 'checkbox',
        label: 'Я согласен с правилами обработки персональных данных и пользовательским соглашением',
    },
];

export function OrderForm({
    peopleCount,
    questId,
}: {
    peopleCount: number[];
    questId: number;
}) {
    const router = useRouter();

    return (
        <Form
            initialValues={{
                phone: '',
                peopleCount: peopleCount[0],
                isLegal: true,
                questId,
            }}
            onSubmit={async (values) => {
                const { questId, isLegal, phone, peopleCount } = values;
                const result = await createOrder({
                    questId,
                    isLegal,
                    phone,
                    peopleCount,
                });
                if (result === 201) {
                    router.back();
                }
            }}
            formFields={formFields}
            validationSchema={ValidationSchema}
            formTitle="Оставить заявку"
            btnTitle="отправить заявку"
        />
    );
}
