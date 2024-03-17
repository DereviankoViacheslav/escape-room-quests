'use server';

export type Quest = {
    id: number;
    title: string;
    description: string;
    previewImg: string;
    coverImg: string;
    type: string;
    level: string;
    peopleCount: number[];
    duration: number;
};

const revalidate = 60 * 60 * 24;

export const getQuests = async (filters?: {
    category?: string;
}): Promise<Quest[] | null> => {
    const params = new URLSearchParams();
    if (filters?.category) {
        params.set('type', filters.category);
    }

    const res = await fetch(
        `${process.env.API_BASE_PATH}/quests?${params.toString()}`,
        { next: { revalidate } },
    );

    if (!res.ok) {
        return null;
    }

    const data: Quest[] = await res.json();

    return data;
};

export const getQuestById = async (id: string): Promise<Quest | null> => {
    const res = await fetch(`${process.env.API_BASE_PATH}/quests/${id}`, {
        next: { revalidate },
    });

    if (!res.ok) {
        return null;
    }

    const data: Quest = await res.json();

    return data;
};
