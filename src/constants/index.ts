export type Category = {
    label: string;
    type: string;
    image: string;
};

export const Categories: Category[] = [
    { type: '', label: 'Все квесты', image: '/icons/icon-all-quests.svg' },
    {
        type: 'adventures',
        label: 'Приключения',
        image: '/icons/icon-adventures.svg',
    },
    { type: 'horror', label: 'Ужасы', image: '/icons/icon-horrors.svg' },
    { type: 'mystic', label: 'Мистика', image: '/icons/icon-mystic.svg' },
    {
        type: 'detective',
        label: 'Детектив',
        image: '/icons/icon-detective.svg',
    },
    { type: 'sci-fi', label: 'Sci-fi', image: '/icons/icon-scifi.svg' },
];
