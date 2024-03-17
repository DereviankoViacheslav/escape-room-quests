import { getQuests, getQuestById } from '@/actions/getQuests';
import { notFound } from 'next/navigation';
import { Categories } from '@/constants';
import Image from 'next/image';
import Button from '@/components/ui/Butoon';

export async function generateStaticParams() {
    const data = await getQuests();
    if (data) {
        return data.map(({ id }) => ({ quest: `${id}` })) as any[];
    }
    return [];
}

function InfoItem({
    children,
    src,
    w,
    h,
    alt,
}: Readonly<{
    children: React.ReactNode;
    w: number;
    h: number;
    alt: string;
    src: string;
}>) {
    return (
        <div className="flex items-center h-10 pr-5 mr-5 border-r-[1px] border-[#ffffff52] last:border-r-0 last:pr-0 last:mr-0">
            <Image src={src} alt={alt} width={w} height={h} className="mr-1" />
            <span>{children}</span>
        </div>
    );
}

export default async function Quest({
    params: { quest },
}: {
    params: { quest: string };
}) {
    const data = await getQuestById(quest);
    if (!data) {
        notFound();
    }
    const { coverImg, title, description, level, duration, peopleCount, type } =
        data;
    const categoryLabel = Categories.find(
        ({ type: name }) => name === type,
    )?.label;

    return (
        <div
            style={{ backgroundImage: `url(/${coverImg})` }}
            className="flex flex-col items-end h-full pt-[120px] bg-cover bg-center"
        >
            <div className="flex flex-col w-[780px] items-start">
                <p className="mb-2 text-[--text-color-secondary] lowercase">
                    {categoryLabel}
                </p>
                <p className="mb-6 text-[92px] leading-[87px] font-black uppercase">
                    {title}
                </p>
                <div className="pl-10">
                    <div className="mb-5 flex items-center">
                        <InfoItem
                            src="/icons/icon-clock.svg"
                            w={24}
                            h={24}
                            alt="Icon"
                        >
                            {duration} мин
                        </InfoItem>
                        <InfoItem
                            src="/icons/icon-person.svg"
                            w={19}
                            h={19}
                            alt="Icon"
                        >
                            {peopleCount[0]}-{peopleCount[1]} чел
                        </InfoItem>
                        <InfoItem
                            src="/icons/icon-puzzle.svg"
                            w={24}
                            h={24}
                            alt="Icon"
                        >
                            {level}
                        </InfoItem>
                    </div>
                    <p className="max-w-lg mb-8">{description}</p>
                    <Button>забронировать</Button>
                </div>
            </div>
        </div>
    );
}
