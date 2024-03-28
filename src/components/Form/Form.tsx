'use client';
import { z } from 'zod';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useRouter } from 'next/navigation';

const ValidationSchema = z.object({
    name: z
        .string({ required_error: 'Обязательное поле' })
        .min(4, { message: 'Должно быть больше 3 символов' })
        .max(16, { message: 'Должно быть не больше 16 символов' }),
    phone: z
        .string({ required_error: 'Обязательное поле' })
        .length(10, { message: 'Должно быть 10 символов' }),
    peopleCount: z.number({ required_error: 'Обязательное поле' }),
    isLegal: z.boolean({ required_error: 'Обязательное поле' }),
});

export type FormFields = z.infer<typeof ValidationSchema>;

type TFormField = {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
};

const formFields: TFormField[] = [
    {
        name: 'name',
        type: 'text',
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
    {
        name: 'isLegal',
        type: 'checkbox',
        label: 'Я согласен с правилами обработки персональных данных и пользовательским соглашением',
    },
];

export function Form({
    peopleCount,
    onSubmit,
}: {
    peopleCount: number[];
    onSubmit: (data: FormFields) => Promise<Error | 201>;
}) {
    const router = useRouter();

    return (
        <div className="flex flex-col max-w-[480px] p-8 rounded bg-[--home-background-color]">
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    peopleCount: peopleCount[0],
                    isLegal: true,
                }}
                validationSchema={toFormikValidationSchema(ValidationSchema)}
                onSubmit={async (values) => {
                    const result = await onSubmit(values);
                    if (result === 201) {
                        router.back();
                    }
                }}
            >
                {({ values }) => (
                    <FormikForm className="flex flex-col">
                        <h2 className="mb-6 font-bold text-3xl">
                            Оставить заявку
                        </h2>
                        {formFields.map(
                            ({ name, type, label, placeholder }) => {
                                return (
                                    <label
                                        key={name}
                                        className={`flex mb-6 text-base ${type === 'checkbox' ? 'flex-row' : 'flex-col'}`}
                                    >
                                        <span
                                            className={`${type === 'checkbox' ? 'order-2 mb-0' : 'mb-2'}`}
                                        >
                                            {label}
                                            <span className="ml-1 lowercase text-red-600">
                                                <ErrorMessage name={name} />
                                            </span>
                                        </span>
                                        <Field
                                            type={type}
                                            name={name}
                                            min={peopleCount[0]}
                                            max={peopleCount[1]}
                                            className={`py-4 px-6 border rounded bg-transparent ${type === 'checkbox' ? 'h-4 mr-2' : 'h-12'}`}
                                            placeholder={placeholder}
                                        />
                                    </label>
                                );
                            },
                        )}
                        <button
                            type="submit"
                            className="self-center py-4 px-9 rounded-3xl font-bold uppercase bg-[#B8B8B8] text-gray-700 disabled:opacity-50 disabled:text-white"
                            disabled={!values.isLegal}
                        >
                            отправить заявку
                        </button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
}
