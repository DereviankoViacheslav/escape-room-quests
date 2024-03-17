import Link from 'next/link';
import Image from 'next/image';

import { Quest } from '@/actions/getQuests';

export default function QuestsList({ quests }: { quests: Quest[] | null }) {
    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {quests?.map(
                ({ previewImg, peopleCount, title, level, id, type }) => {
                    return (
                        <Link href={`detailed-quest/${id}`} key={id}>
                            <Image
                                src={`/${previewImg}`}
                                alt="Image"
                                width={344}
                                height={232}
                            />
                            <p>{title}</p>
                            <p>
                                {peopleCount[0]}-{peopleCount[1]} чел
                            </p>
                            <p>{level}</p>
                        </Link>
                    );
                },
            )}
        </div>
    );
}
