import CharacterTemplate , {ICharacterTemplateDocument} from '../models/characterTemplate';

const templates: ICharacterTemplateDocument[] = [
    // Savage Worlds
    new CharacterTemplate({
        slug: 'mad-scientist',
        name: 'Безумный учёный',
        stats: {
            agility: { dice: 'd4' },
            smarts: { dice: 'd10' },
            spirit: { dice: 'd6' },
            strength: { dice: 'd6' },
            vigor: { dice: 'd6' },
        },
        skills: {
            investigation: { dice: 'd6' },
            knowledge: { dice: 'd10' }, // Science
            notice: { dice: 'd6' },
            repair: { dice: 'd8' },
        },
        additionalSkills: 4,
        edges: [
            'inventor',
            'mystical-gift', // Mad-Science
        ],
    }),
    new CharacterTemplate({
        slug: 'driver',
        name: 'Водитель',
        stats: {
            agility: { dice: 'd8' },
            smarts: { dice: 'd6' },
            spirit: { dice: 'd6' },
            strength: { dice: 'd6' },
            vigor: { dice: 'd6' },
        },
        skills: {
            driving: { dice: 'd8' },
            fighting: { dice: 'd4' },
            notice: { dice: 'd6' },
            shooting: { dice: 'd6' },
        },
        additionalSkills: 7,
        edges: [
            'ace',
            'swift',
        ],
    }),
    // Red Land
    new CharacterTemplate({
        slug: 'adventurer',
        name: 'Авантюрист',
        stats: {
            agility: { dice: 'd6' }, // 1
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd6' }, // 1
            strength: { dice: 'd4' },
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            lockPicking: { dice: 'd4' }, // 1
            notice: { dice: 'd6' }, // 2
            driving: { dice: 'd4' }, // 1
            survival: { dice: 'd4' }, // 1
            fighting: { dice: 'd4' }, // 1
            healing: { dice: 'd4' }, // 1
            stealth: { dice: 'd4' }, // 1
            taunt: { dice: 'd4' }, // 1
            investigation: { dice: 'd6' }, // 2
            persuasion: { dice: 'd6' }, // 2
            streetwise: { dice: 'd6' }, // 2
        },
        additionalSkills: 0,
        edges: [
            'danger-sense',
            'luck',
        ],
    }),
    /*
Персонажа ведёт по жизни жажда приключений и не-
поколебимая уверенность в собственных силах. Где бы
ни затевалась заварушка, персонаж тут как тут. Он привык
брать от жизни всё, и если он не может получить того, что
ему нужно, убеждением и красноречием, он, не задумыва-
ясь, пускает в ход оружие. Он сотни раз проворачивал ри-
скованные дела, то устраивая революции, то спасая остатки
золотого запаса Империи, то разоблачая заговоры, и каж-
дый раз выходил сухим из воды благодаря умению разби-
раться в людях и владению внушительным арсеналом на-
выков и знаний, без которых на Красной Земле пропадёшь.
    */
    new CharacterTemplate({
        slug: 'ataman',
        name: 'Атаман',
        stats: {
            agility: { dice: 'd8' }, // 2
            smarts: { dice: 'd4' },
            spirit: { dice: 'd6' }, // 1
            strength: { dice: 'd6' }, // 1
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            riding: { dice: 'd6' }, // 2
            war: { dice: 'd8' }, // 3
            fighting: { dice: 'd8' }, // 3
            intimidation: { dice: 'd4' }, // 1
            shooting: { dice: 'd6', modifier: 2 }, // 2
        },
        additionalSkills: 2,
        edges: [
            'command',
            'hold-the-line',
        ],
    }),
    /*
Для персонажа нет ничего желаннее, чем броситься
в гущу боя во главе отряда лихих удальцов. Бойцы без-
оговорочно признают его авторитет, потому что видят,
что в сече ему нет равных, а без его глубокого понимания
тактики и стратегии они бы пропали в первой же стычке.
На Красной Земле люди с такими талантами не останутся
без дела!
Характеристики: Ловкость d8, Смекалка d4, Характер d6,
Сила d6, Выносливость d6;
Навыки: Верховая езда d6, Военное дело d8, Драка d8,
Запугивание d4, Стрельба d6, +2 дополнительных пункта
навыков;
Харизма: —; Шаг: 6; Защита: 6; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Командный голос, Держать строй!
    */
    new CharacterTemplate({
        slug: 'fighter',
        name: 'Боец',
        stats: {
            agility: { dice: 'd8' }, // 2
            smarts: { dice: 'd4' },
            spirit: { dice: 'd4' },
            strength: { dice: 'd8' }, // 2
            vigor: { dice: 'd8' }, // 2
        },
        skills: {
            notice: { dice: 'd4' }, // 1
            war: { dice: 'd4' }, // 1
            fighting: { dice: 'd10' }, // 4
            intimidation: { dice: 'd6' }, // 2
            shooting: { dice: 'd10' }, // 4
        },
        additionalSkills: 0,
        edges: [
            'nerves-of-steel',
            'brawny',
        ],
    }),
    /*
В хаосе Гражданской войны персонажа не раз выруча-
ла его боевая выучка и военные навыки. Он предпочитает
решать свои проблемы прямолинейно, ударом в лоб. Мо-
жет быть, в другом месте и в другое время это не слишком
удачный способ, но на Красной Земле нет ничего полезнее,
чем уметь метко стрелять из маузера и рубить шашкой!
Характеристики: Ловкость d8, Смекалка d4, Характер d4,
Сила d8, Выносливость d8;
Навыки: Внимание d4, Военное дело d4, Драка d10,
Запугивание d6, Стрельба d10;
Харизма: —; Шаг: 6; Защита: 6; Стойкость: 6;
Изъяны: два мелких или один крупный;
Черты: Стальные нервы, Бугай.
    */
    new CharacterTemplate({
        slug: 'warrior',
        name: 'Воитель',
        stats: {
            agility: { dice: 'd8' }, // 2
            smarts: { dice: 'd6' }, // 1
            spirit: { dice: 'd6' }, // 1
            strength: { dice: 'd6' }, // 1
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            fighting: { dice: 'd10', modifier: 1 }, // 4
            intimidation: { dice: 'd4' }, // 1
            education: { dice: 'd6' }, // 2
            mystic: { dice: 'd8' }, // 3
            shooting: { dice: 'd8' }, // 3
        },
        additionalSkills: 0,
        edges: [
            'arcane-background',
            'trademark-weapon',
        ],
    }),
    /*
Персонаж использует сверхъестественные силы, от-
крытые людям Переломом, чтобы добиться превосходства
в бою. Мистические знания делают его непобедимым, вну-
шая ужас противникам. Он по праву гордиться тем, что как
никто другой способствует победе своего движения, маги-
ческим огнём и мечом утверждая его идеалы на Красной
Земле.
Характеристики: Ловкость d8, Смекалка d6, Характер d6,
Сила d6, Выносливость d6;
Навыки: Драка d10+1, Запугивание d4, Образование d6,
Мистический навык d8, Стрельба d8;
Харизма: —; Шаг: 6; Защита: 6; Стойкость: 5;
Изъяны: два мелких, один крупный;
Черты: Мистический дар, Именное оружие.
    */
    new CharacterTemplate({
        slug: 'diplomat',
        name: 'Дипломат',
        stats: {
            agility: { dice: 'd4' },
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd8' }, // 2
            strength: { dice: 'd4' },
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            notice: { dice: 'd4' }, // 1
            intimidation: { dice: 'd4' }, // 1
            educationClassic: { dice: 'd6' }, // 2
            educationReal: { dice: 'd6' }, // 2
            taunt: { dice: 'd6' }, // 2
            investigation: { dice: 'd6' }, // 2
            persuasion: { dice: 'd8' }, // 3
            streetwise: { dice: 'd6' }, // 2
        },
        additionalSkills: 0,
        edges: [
            'common-bond',
            'connections',
        ],
    }),
    /*
Грубая сила решает далеко не всё даже на Красной
Земле. Персонаж умеет управлять людьми, но делает это
не напором, а убеждением, тонким пониманием чаяний
и желаний окружающих. Он отлично образован, его место
в кабинетах правительств гособразований, на съездах круп-
нейших партий, где за него стоят горой сотни сторонников.
Но и на войне он чувствует себя превосходно: ведь побеж-
дает чаще всего не самый храбрый, а самый прозорливый.
Характеристики: Ловкость d4, Смекалка d8, Характер d8,
Сила d4, Выносливость d6;
Навыки: Внимание d4, Запугивание d4,
Образование Классическое d6, Образование Реальное d6,
Провокация d6, Расследование d6, Убеждение d8,
Уличное чутьё d6;
Харизма: —; Шаг: 6; Защита: 2; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Мы команда, Полезные связи.
    */
    new CharacterTemplate({
        slug: 'idealist',
        name: 'Идеалист',
        stats: {
            agility: { dice: 'd4' },
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd6' }, // 1
            strength: { dice: 'd6' }, // 1
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            war: { dice: 'd6' }, // 2
            fighting: { dice: 'd4' }, // 1
            education: { dice: 'd6' }, // 2
            mystic: { dice: 'd10' }, // 4
            persuasion: { dice: 'd6' }, // 2
        },
        additionalSkills: 3,
        edges: [
            'command',
            'arcane-background',
        ],
    }),
    /*
Персонаж ведёт людей за собой не ради собственных
амбиций, а для воплощения идеалов его Движения. Сам
он является обладателем Мистического дара, его уста-
ми вещают силы Иного Мира. Для своих последователей
он является настоящим кумиром, а вот они для него — все-
го лишь средством достижения великой сверхчеловече-
ской Цели.
Характеристики: Ловкость d4, Смекалка d8, Характер d6,
Сила d6, Выносливость d6;
Навыки: Военное дело d6, Драка d4, Образование d6,
Мистический навык d10, Убеждение d6,
+3 дополнительных пункта навыков;
Харизма: —; Шаг: 6; Защита: 4; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Командный голос, Мистический дар.
    */
    new CharacterTemplate({
        slug: 'explorer',
        name: 'Исследователь',
        stats: {
            agility: { dice: 'd6' }, // 1
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd8' }, // 2
            strength: { dice: 'd4' },
            vigor: { dice: 'd4' },
        },
        skills: {
            notice: { dice: 'd4', modifier: 2 }, // 1
            fighting: { dice: 'd4' }, // 1
            climbing: { dice: 'd4' }, // 1
            stealth: { dice: 'd4' }, // 1
            education: { dice: 'd6' }, // 2
            mystic: { dice: 'd8' }, // 3
            investigation: { dice: 'd8', modifier: 2 }, // 3
            streetwise: { dice: 'd8', modifier: 2 }, // 3
        },
        additionalSkills: 0,
        edges: [
            'arcane-background',
            'investigator',
        ],
    }),
    /*
Для персонажа сверхъестественное — это, прежде все-
го, загадка, тайна, требующая раскрытия. Он прикладыва-
ет все свои обширные знания, чтобы разобраться в сути ма-
гии: бесконечно исследует и изобретает механизмы Новой
Науки или, сбившись с ног, разыскивает древние курганы,
расшифровывая начертанные на них петроглифы, или ва-
рит отвары из чародейских трав. Благодаря мистическому
дару его умения вышли далеко за пределы доступных чело-
веку, но он не собирается останавливаться на этом.
Характеристики: Ловкость d6, Смекалка d8, Характер d8,
Сила d4, Выносливость d4;
Навыки: Внимание d4+2, Драка d4, Лазанье d4,
Маскировка d4, Образование d6, Мистический навык d8,
Расследование d8+2, Уличное чутьё d8+2;
Харизма: —; Шаг: 6; Защита: 4; Стойкость: 4;
Изъяны: два мелких или один крупный;
Черты: Мистический дар, Исследователь.
    */
    new CharacterTemplate({
        slug: 'leader',
        name: 'Лидер',
        stats: {
            agility: { dice: 'd4' },
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd8' }, // 2
            strength: { dice: 'd4' },
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            war: { dice: 'd6' }, // 2
            fighting: { dice: 'd4' }, // 1
            intimidation: { dice: 'd6' }, // 2
            taunt: { dice: 'd6' }, // 2
            persuasion: { dice: 'd6' }, // 2
            streetwise: { dice: 'd6' }, // 2
        },
        additionalSkills: 4,
        edges: [
            'command',
            'common-bond',
        ],
    }),
    /*
Хаос и безвластие — лучшее время для тех, кто готов
повести за собой людей, не боясь ответственности и ри-
ска. Своей необычайной силой духа персонаж превращает
толпу в организованный коллектив. Он не только облада-
ет обширными знаниями и многочисленными навыками,
но и никогда не стесняется заявить об этом, объединяя во-
круг себя почитателей своего таланта. Где бы он ни оказал-
ся, вокруг него всегда появляются последователи, готовые
исполнять его приказы.
Характеристики: Ловкость d4, Смекалка d8, Характер d8,
Сила d4, Выносливость d6;
Навыки: Военное дело d6, Драка d4, Запугивание d6,
Провокация d6, Убеждение d6, Уличное чутьё d6,
+4 дополнительных пункта навыков;
Харизма: —; Шаг: 6; Защита: 4; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Командный голос, Мы команда!
    */
    new CharacterTemplate({
        slug: 'mystic',
        name: 'Мистик',
        stats: {
            agility: { dice: 'd4' },
            smarts: { dice: 'd10' }, // 3
            spirit: { dice: 'd6' }, // 1
            strength: { dice: 'd4' },
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            notice: { dice: 'd4' }, // 1
            classicEducation: { dice: 'd6' }, // 2
            mystic: { dice: 'd10' }, // 4
            investigation: { dice: 'd4' }, // 1
            persuasion: { dice: 'd4' }, // 1
        },
        additionalSkills: 6,
        edges: [
            'arcane-background',
            'rapid-recharge',
        ],
    }),
    /*
Перелом открыл в людях неведомые прежде сверхъе-
стественные способности. Персонаж овладел ими и посто-
янно совершенствует их, изучая древние оккультные ману-
скрипты, проникая в тайны Новой Науки или собирая за-
бытые народные обряды. В любой ситуации он призывает
на выручку силы Иного Мира, служащие ему безотказно.
Характеристики: Ловкость d4, Смекалка d10, Характер d6,
Сила d4, Выносливость d6;
Навыки: Внимание d4, Образование Классическое d6,
Мистический навык d10, Расследование d4, Убеждение d4,
+6 дополнительных пунктов навыков;
Харизма: —; Шаг: 6; Защита: 2; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Мистический дар, Восстановление силы.
    */
    new CharacterTemplate({
        slug: 'solo',
        name: 'Одиночка',
        stats: {
            agility: { dice: 'd8' }, // 2
            smarts: { dice: 'd6' }, // 1
            spirit: { dice: 'd4' },
            strength: { dice: 'd6' }, // 1
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            riding: { dice: 'd4' }, // 1
            notice: { dice: 'd6', modifier: 2 }, // 2
            survival: { dice: 'd4' }, // 1
            fighting: { dice: 'd8' }, // 3
            climbing: { dice: 'd4' }, // 1
            healing: { dice: 'd4' }, // 1
            stealth: { dice: 'd4' }, // 1
            swimming: { dice: 'd4' }, // 1
            repair: { dice: 'd4' }, // 1
            shooting: { dice: 'd6' }, // 2
            streetwise: { dice: 'd4' }, // 1
        },
        additionalSkills: 0,
        edges: [
            'luck',
            'alertness',
        ],
    }),
    /*
Персонаж привык полагаться только на свою голову,
свои руки и до предела обострённые чувства. Чтобы вы-
жить, ему не нужно общество. Он знает и умеет почти всё,
что может пригодиться человеку в его нелёгкой жизни
на Красной Земле, в том числе и мастерски убивать тех
глупцов, которые встанут на его пути.
Характеристики: Ловкость d8, Смекалка d6, Характер d4,
Сила d6, Выносливость d6;
Навыки: Верховая езда d4, Внимание d6+2, Выживание d4,
Драка d8, Лазанье d4, Лечение d4, Маскировка d4,
Плавание d4, Ремонт d4, Стрельба d6, Уличное чутьё d4;
Харизма: —; Шаг: 6; Защита: 6; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Везение, Бдительность.
    */
    new CharacterTemplate({
        slug: 'crafter',
        name: 'Умелец',
        stats: {
            agility: { dice: 'd6' }, // 1
            smarts: { dice: 'd10' }, // 3
            spirit: { dice: 'd4' },
            strength: { dice: 'd4' },
            vigor: { dice: 'd6' }, // 1
        },
        skills: {
            notice: { dice: 'd8' }, // 3
            fighting: { dice: 'd6' }, // 2
            climbing: { dice: 'd4' }, // 1
            healing: { dice: 'd4' }, // 1
            stealth: { dice: 'd4' }, // 1
            fix: { dice: 'd6' }, // 2
            shooting: { dice: 'd4' }, // 1
            persuasion: { dice: 'd4' }, // 1
        },
        additionalSkills: 0,
        edges: [
            'jack-of-all-trades',
            'mc-gyver',
        ],
    }),
    /*
Разрушенная войной Красная Земля всегда нуждается
в тех, кто может создавать что-то своими руками и головой.
Персонаж постоянно оттачивал свои профессиональные
навыки и умения, и это принесло плоды. В какой бы об-
ласти ни специализировался персонаж: технические и гу-
манитарные науки, ремесло или даже выживание в дикой
природе — он всегда сможет использовать свои знания,
чтобы помочь себе и своим товарищам.
Характеристики: Ловкость d6, Смекалка d10, Характер d4,
Сила d4, Выносливость d6;
Навыки: Внимание d8, Драка d6, Лазанье d4, Лечение d4,
Маскировка d4, Ремонт d6, Стрельба d4, Убеждение d4;
Харизма: —; Шаг: 6; Защита: 5; Стойкость: 5;
Изъяны: два мелких или один крупный;
Черты: Мастер на все руки, Народный умелец     */
    new CharacterTemplate({
        slug: 'dodger',
        name: 'Хитрец',
        stats: {
            agility: { dice: 'd6' }, // 1
            smarts: { dice: 'd8' }, // 2
            spirit: { dice: 'd8' }, // 2
            strength: { dice: 'd4' },
            vigor: { dice: 'd4' },
        },
        skills: {
            gambling: { dice: 'd6' }, // 2
            intimidation: { dice: 'd6', modifier: 2 }, // 2
            taunt: { dice: 'd4', modifier: 2 }, // 1
            investigation: { dice: 'd4' }, // 1
            persuasion: { dice: 'd8', modifier: 2 }, // 3
            streetwise: { dice: 'd8', modifier: 2 }, // 3
        },
        additionalSkills: 3,
        edges: [
            'charismatic',
            'strong-willed',
        ],
    }),
    /*
Хитрость и проницательность — вот что позволило
персонажу выжить на Красной Земле. Он читает мысли
людей, как открытую книгу, знает все их слабости и отлич-
но умеет извлечь из них свою выгоду. Он обладает букваль-
но сверхъестественным обаянием и сильной волей, про-
стому человеку не под силу сопротивляться его желаниям.
Что бы ни случилось, хитрец не пропадёт, будь рядом хоть
один человек, которого можно использовать.
Характеристики: Ловкость d6, Смекалка d8, Характер d8,
Сила d4, Выносливость d4;
Навыки: Азартные игры d6, Запугивание d6+2,
Провокация d4+2, Расследование d4, Убеждение d8+2,
Уличное чутьё d8+2, +3 дополнительных пунктов навыков;
Харизма: 2; Шаг: 6; Защита: 2; Стойкость: 4;
Изъяны: два мелких или один крупный;
Черты: Харизматичный, Железная воля.
     */
];

export default templates;
