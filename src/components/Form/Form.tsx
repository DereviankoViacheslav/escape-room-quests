import { z } from 'zod';
import { FormField } from '@/components/FormField/FormField';

const formFields = [
    {
        name: 'name',
        label: 'Ваше имя',
        placeholder: 'Имя',
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
];

const validationSchema = z.object({
    name: z
        .string({ required_error: 'Обязательное поле' })
        .min(4, { message: 'Должно быть больше 3 символов' })
        .max(16, { message: 'Должно быть не больше 16 символов' }),
    phone: z
        .string({ required_error: 'Обязательное поле' })
        .length(10, { message: 'Должно быть 10 символов' }),
    peopleCount: z.number({ required_error: 'Обязательное поле' }),
});

export function Form({
    peopleCount,
    action,
}: {
    peopleCount: number[];
    action: (formData: FormData) => void;
}) {
    return (
        <form
            action={action}
            className="flex flex-col p-8 rounded bg-[--home-background-color]"
        >
            <h2 className="mb-10 font-bold text-3xl">Оставить заявку</h2>
            {formFields.map(({ name, type, label, placeholder }) => (
                <FormField
                    key={name}
                    name={name}
                    label={label}
                    type={type}
                    min={peopleCount[0]}
                    max={peopleCount[1]}
                    placeholder={placeholder}
                />
            ))}
            <input type="checkbox" name="isLegal" />
            <button
                type="submit"
                className="py-4 px-9 rounded-3xl font-bold uppercase bg-[#B8B8B8]"
            >
                отправить заявку
            </button>
        </form>
    );
}
