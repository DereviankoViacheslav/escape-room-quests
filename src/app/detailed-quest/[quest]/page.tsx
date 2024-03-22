import { getQuests, getQuestById } from '@/actions/getQuests';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Categories } from '@/constants';
import { InfoItem } from '@/components/InfoItem/InfoItem';
import { Modal } from '@/components/Modal/Modal';
import { Form } from '@/components/Form/Form';
import { registration } from '@/actions/registration';

export async function generateStaticParams() {
    const data = await getQuests();
    if (data) {
        return data.map(({ id }) => ({ quest: `${id}` })) as any[];
    }
    return [];
}

export default async function Quest({
    params: { quest },
    searchParams: { show },
}: {
    params: { quest: string };
    searchParams: { show: string };
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
    const open = show === 'true' ? true : false;

    return (
        <>
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
                        <Link
                            href={`${quest}?show=true`}
                            className="py-6 px-12 rounded-[65px] bg-[--text-color-secondary] uppercase font-bold"
                        >
                            забронировать
                        </Link>
                    </div>
                </div>
            </div>
            {open && (
                <Modal backUrl={`${quest}`}>
                    <Form peopleCount={peopleCount} action={registration} />
                </Modal>
            )}
        </>
    );
}
