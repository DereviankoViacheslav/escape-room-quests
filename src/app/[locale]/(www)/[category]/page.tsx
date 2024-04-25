import { notFound } from 'next/navigation';
import { getQuests } from '@/actions/quests';
import { Categories } from '@/constants';
import QuestsList from '@/components/QuestsList/QuestsList';

export async function generateStaticParams() {
    return Categories.map(({ category: href }) => ({ category: href })) as any[];
}

export default async function Category({
    params: { category },
}: {
    params: { category: string };
}) {
    const categoryItem = Categories.find(({ category }) => category === category);
    if (!categoryItem) {
        notFound();
    }
    const quests = await getQuests({ category });

    return (
        <>
            {quests?.length ? (
                <QuestsList quests={quests} />
            ) : (
                <p>В этой категории пока нет квестов!</p>
            )}
        </>
    );
}
