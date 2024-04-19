'use server';
import { Quest } from '@prisma/client';

const revalidate = 60 * 60 * 24;

export const getQuests = async (filters?: {
    category?: string;
}): Promise<Quest[] | null> => {
    const params = new URLSearchParams();
    if (filters?.category) {
        params.set('type', filters.category);
    }
    const path = `${process.env.API_BASE_PATH}/api/quests?${params.toString()}`;

    const res = await fetch(path, { next: { revalidate } });

    if (!res.ok) {
        return null;
    }

    const data: Quest[] = await res.json();

    return data;
};

export const getQuestById = async (id: string): Promise<Quest | null> => {
    const params = new URLSearchParams();
    params.set('id', id);

    const res = await fetch(
        `${process.env.API_BASE_PATH}/api/quests?${params.toString()}`,
        {
            next: { revalidate },
        },
    );

    if (!res.ok) {
        return null;
    }

    const data: Quest = await res.json();

    return data;
};
