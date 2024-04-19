'use client';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { FormField, TFormField } from '@/components/FormField/FormField';

export function Form({
    formFields,
    onSubmit,
    initialValues,
    validationSchema,
    formTitle,
    btnTitle,
}: {
    formFields: TFormField[];
    initialValues: FormikValues;
    validationSchema: z.Schema;
    formTitle: string;
    btnTitle: string;
    onSubmit: (data: FormikValues) => void;
}) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={toFormikValidationSchema(validationSchema)}
            onSubmit={(values) => onSubmit(values)}
        >
            {() => (
                <FormikForm className="flex flex-col">
                    <h2 className="mb-6 font-bold text-3xl">{formTitle}</h2>
                    {formFields.map(
                        ({ name, type, label, placeholder, min, max }) => {
                            return (
                                <FormField
                                    key={name}
                                    type={type}
                                    name={name}
                                    label={label || ''}
                                    placeholder={placeholder || ''}
                                    min={min}
                                    max={max}
                                />
                            );
                        },
                    )}
                    <button
                        type="submit"
                        className="self-center py-4 px-9 rounded-3xl font-bold uppercase bg-[#B8B8B8] text-gray-700 disabled:opacity-50 disabled:text-white"
                    >
                        {btnTitle}
                    </button>
                </FormikForm>
            )}
        </Formik>
    );
}
