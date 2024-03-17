import { getQuests } from '@/actions/getQuests';
import QuestsList from '@/components/QuestsList/QuestsList';

export default async function Home() {
    const quests = await getQuests();

    return (
        <>
            <QuestsList quests={quests} />
        </>
    );
}
