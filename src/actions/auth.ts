'use server';
import { User } from '@prisma/client';
import { cookies } from 'next/headers';

type TUserData = Pick<User, 'email' | 'password'>;

export const signUp = async (data: TUserData): Promise<Error | 201> => {
    const path = `${process.env.API_BASE_PATH}/api/auth`;

    const res = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        return new Error('Ошибка при регистрации');
    }

    return 201;
};

export const signIn = async (data: TUserData): Promise<Error | 201> => {
    const params = new URLSearchParams();
    params.set('email', data.email);
    const path = `${process.env.API_BASE_PATH}/api/auth?${params.toString()}`;

    const res = await fetch(path, { cache: 'no-store' });

    if (!res.ok) {
        return new Error('Ошибка при входе');
    }

    const user = await res.json();
    cookies().set('userId', `${user.id}`);

    return 201;
};

export const logOut = () => {
    cookies().delete('userId');

    return 201;
};
