import { ErrorMessage, Field } from 'formik';

export type TFormField = {
    name: string;
    type: string;
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
};

export function FormField({
    name,
    label,
    placeholder,
    type,
    min = undefined,
    max = undefined,
}: TFormField) {
    return (
        <>
            <label
                className={`${type === 'hidden' ? 'hidden' : ''} flex mb-6 text-base ${type === 'checkbox' ? 'flex-row' : 'flex-col'}`}
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
                    min={min}
                    max={max}
                    className={`py-4 px-6 border rounded bg-transparent ${type === 'checkbox' ? 'h-4 mr-2' : 'h-12'}`}
                    placeholder={placeholder}
                />
            </label>
        </>
    );
}
