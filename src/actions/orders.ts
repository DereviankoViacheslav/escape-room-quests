'use server';
import { Order } from '@prisma/client';
import { cookies } from 'next/headers';

type TOrderData = Omit<Order, 'id' | 'userId'>;

export const createOrder = async (order: TOrderData): Promise<Error | 201> => {
    const path = `${process.env.API_BASE_PATH}/api/orders`;
    const userId = cookies().get('userId');

    try {
        if (!userId || Number.isNaN(userId.value)) {
            return new Error(`Пользователь не авторизован`);
        }
        const data = {
            ...order,
            userId: +userId.value,
        };
        const res = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        console.log(res);

        return 201;
    } catch (error) {
        return new Error(`Ошибка при регистрации на квест: ${error}`);
    }
};
