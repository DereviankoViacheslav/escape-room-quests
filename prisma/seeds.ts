import { PrismaClient, Quest } from '@prisma/client';

const db = new PrismaClient();

const initialQuests: Quest[] = [
    {
        id: 1,
        title: 'Склеп',
        description:
            'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
        previewImg: 'img/preview-sklep.jpg',
        coverImg: 'img/cover-sklep.jpg',
        type: 'horror',
        level: 'hard',
        peopleCount: [2, 5],
        duration: 120,
    },
    {
        id: 2,
        title: 'Маньяк',
        description:
            'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
        previewImg: 'img/preview-maniac.jpg',
        coverImg: 'img/cover-maniac.jpg',
        type: 'horror',
        level: 'medium',
        peopleCount: [3, 6],
        duration: 90,
    },
    {
        id: 3,
        title: 'Ритуал',
        description:
            'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
        previewImg: 'img/preview-ritual.jpg',
        coverImg: 'img/cover-ritual.jpg',
        type: 'mystic',
        level: 'hard',
        peopleCount: [3, 5],
        duration: 120,
    },
    {
        id: 4,
        title: 'Тайны старого особняка',
        description:
            'Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.',
        previewImg: 'img/preview-final-frontier.jpg',
        coverImg: 'img/cover-final-frontier.jpg',
        type: 'detective',
        level: 'easy',
        peopleCount: [2, 5],
        duration: 60,
    },
    {
        id: 5,
        title: 'Хижина в лесу',
        description:
            'Вы с друзьями оказались в заброшенной хижине. Какую тайну она скрывает и как из неё выбраться? На эти вопросы вам предстоит найти ответ, чтобы вернуться домой.',
        previewImg: 'img/preview-house-in-the-woods.jpg',
        coverImg: 'img/cover-house-in-the-woods.jpg',
        type: 'mystic',
        level: 'medium',
        peopleCount: [4, 7],
        duration: 90,
    },
    {
        id: 6,
        title: 'Фатальный эксперимент',
        description:
            'Вы стоите на пороге нового научного открытия, которое перевернет судьбу человечества. Но что-то идёт не так, и ядерный реактор, который работает на полную мощность, сигнализирует о скорой поломке. Удастся ли вам починить его в отведенное время и предотвратить гибель людей в этом фатальном эксперименте?',
        previewImg: 'img/preview-fatal-exp.jpg',
        coverImg: 'img/cover-fatal-exp.jpg',
        type: 'adventures',
        level: 'hard',
        peopleCount: [5, 8],
        duration: 120,
    },
    {
        id: 7,
        title: 'Метро 2033',
        description:
            'Мир погрузился в хаус постапокалипсиса после ядерного взрыва. Все крупные города были стёрты с лица земли и только в метро на глубине осталась жизнь. Но и здесь творится хаус. У вас и вашей команды есть только одна цель — выжить.',
        previewImg: 'img/preview-metro2033.jpg',
        coverImg: 'img/cover-metro2033.jpg',
        type: 'sci-fi',
        level: 'medium',
        peopleCount: [6, 8],
        duration: 90,
    },
    {
        id: 8,
        title: 'Старый чердак',
        description:
            'Какую тайну хранит старый чердак? Каждая вещь здесь имеет свой тайный смысл и приближает к вас к раскрытию главной тайны. Почувствуйте себя настоящими детективами и докопайтесь до истины.',
        previewImg: 'img/preview-old-ceil.jpg',
        coverImg: 'img/cover-old-ceil.jpg',
        type: 'detective',
        level: 'easy',
        peopleCount: [2, 3],
        duration: 60,
    },
    {
        id: 9,
        title: 'Марс-2056',
        description:
            '2055 год. Вы отправились на Марс в научно-исследовательскую экспедицию. Цель экспедиции колонизация планеты.  Вы прибыли на место, развернули временный лагерь, построили комплекс жизнеобеспечения и начали свою работу. У вас команда высококвалифицированных специалистов в своем деле. Но что-то идёт не так — теперь вам нужно улететь с красной планеты как можно быстрее, чтобы спасти свою жизнь.',
        previewImg: 'img/preview-mars-2056.jpg',
        coverImg: 'img/cover-mars-2056.jpg',
        type: 'sci-fi',
        level: 'easy',
        peopleCount: [2, 5],
        duration: 60,
    },
];

const seed = async () => {
    await db.quest.deleteMany();

    await db.quest.createMany({
        data: initialQuests,
    });
};

seed();
