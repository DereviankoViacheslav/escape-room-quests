import { Quest } from '@prisma/client';
import QuestItem from '@/components/QuestItem/QuestItem';

export default function QuestsList({ quests }: { quests: Quest[] | null }) {
    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {quests?.map((quest) => <QuestItem key={quest.id} quest={quest} />)}
        </div>
    );
}
