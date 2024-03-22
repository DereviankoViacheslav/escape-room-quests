import Link from 'next/link';
import Image from 'next/image';

import { Quest } from '@/actions/getQuests';
import { InfoItem } from '@/components/InfoItem/InfoItem';

export default function QuestItem({ quest }: { quest: Quest }) {
    const { previewImg, peopleCount, title, level, id } = quest;
    return (
        <Link
            href={`detailed-quest/${id}`}
            key={id}
            className="relative w-[344px] h-[232px] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-4/5 after:bg-gradient-to-t after:from-black after:rounded-md"
        >
            <Image
                src={`/${previewImg}`}
                alt="Quest image"
                fill
                className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 z-10">
                <p className="text-2xl font-bold">{title}</p>
                <div className="flex items-center">
                    <InfoItem
                        src="/icons/icon-person.svg"
                        w={14}
                        h={14}
                        alt="Icon"
                        borderHeight={5}
                    >
                        {peopleCount[0]}-{peopleCount[1]} чел
                    </InfoItem>
                    <InfoItem
                        src="/icons/icon-puzzle.svg"
                        w={16}
                        h={16}
                        alt="Icon"
                    >
                        {level}
                    </InfoItem>
                </div>
            </div>
        </Link>
    );
}
