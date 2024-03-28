'use server';

import { FormFields } from '@/components/Form/Form';

export const registration = async (data: FormFields): Promise<Error | 201> => {
    const payload: RequestInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await fetch(`${process.env.API_BASE_PATH}/orders`, payload);
        const resJson = await res.json();
        console.log('resJson--->>', resJson);
        if (resJson === 201) {
            return 201;
        }
        throw new Error(`Ошибка при регистрации!`);
    } catch (error) {
        return new Error(`Ошибка при регистрации: ${error}`);
    }
};
