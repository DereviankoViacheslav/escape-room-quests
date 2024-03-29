import { Field, FormikErrors } from 'formik';

export function FormField<T>({
    name,
    label,
    placeholder,
    type = 'text',
    min = undefined,
    max = undefined,
}: {
    label: string;
    name: string;
    placeholder: string;
    error: FormikErrors<T>;
    type?: string;
    min?: number;
    max?: number;
}) {
    return (
        <>
            <label className="flex flex-col mb-8 text-base">
                <span className="mb-4">{label}</span>
                <Field
                    type={type}
                    name={name}
                    min={min}
                    max={max}
                    className="w-96 h-12 py-4 px-6 border rounded bg-transparent"
                    placeholder={placeholder}
                />
            </label>
        </>
    );
}
