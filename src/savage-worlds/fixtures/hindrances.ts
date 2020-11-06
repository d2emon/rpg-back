import Hindrance, {IHindranceDocument} from '../models/hindrance';

const hindrances: IHindranceDocument[] = [
    new Hindrance({
        slug: 'anemic',
        name: 'Болезненность',
        major: false,
    }),
    new Hindrance({
        slug: 'phobia-minor',
        name: 'Боязнь (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'phobia-major',
        name: 'Боязнь (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'wanted-minor',
        name: 'В розыске (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'wanted-major',
        name: 'В розыске (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'loyal',
        name: 'Верный друг',
        major: false,
    }),
    new Hindrance({
        slug: 'enemy-minor',
        name: 'Враг (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'enemy-major',
        name: 'Враг (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'heroic',
        name: 'Герой',
        major: true,
    }),
    new Hindrance({
        slug: 'big-mouth',
        name: 'Длинный язык',
        major: false,
    }),
    new Hindrance({
        slug: 'habit-minor',
        name: 'Дурная привычка (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'habit-major',
        name: 'Дурная привычка (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'mean',
        name: 'Дурной характер',
        major: false,
    }),
    new Hindrance({
        slug: 'greedy-minor',
        name: 'Жадность (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'greedy-major',
        name: 'Жадность (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'bloodthirsty',
        name: 'Жажда крови',
        major: true,
    }),
    new Hindrance({
        slug: 'delusional-minor',
        name: 'Заблуждения (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'delusional-major',
        name: 'Заблуждения (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'arrogant',
        name: 'Заносчивость',
        major: true,
    }),
    new Hindrance({
        slug: 'vow-minor',
        name: 'Клятва (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'vow-major',
        name: 'Клятва (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'code-of-honor',
        name: 'Кодекс чести',
        major: true,
    }),
    new Hindrance({
        slug: 'small',
        name: 'Коротышка',
        major: true,
    }),
    new Hindrance({
        slug: 'all-thumbs',
        name: 'Кривые руки',
        major: false,
    }),
    new Hindrance({
        slug: 'curious',
        name: 'Любопытство',
        major: true,
    }),
    new Hindrance({
        slug: 'vengeful-minor',
        name: 'Мстительность (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'vengeful-major',
        name: 'Мстительность (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'clueless',
        name: 'Невежда',
        major: false,
    }),
    new Hindrance({
        slug: 'illiterate',
        name: 'Неграмотность',
        major: false,
    }),
    new Hindrance({
        slug: 'bad-luck',
        name: 'Неудачник',
        major: true,
    }),
    new Hindrance({
        slug: 'one-eye',
        name: 'Одноглазый',
        major: true,
    }),
    new Hindrance({
        slug: 'one-leg',
        name: 'Одноногий',
        major: true,
    }),
    new Hindrance({
        slug: 'one-arm',
        name: 'Однорукий',
        major: true,
    }),
    new Hindrance({
        slug: 'pacifist-minor',
        name: 'Пацифист (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'pacifist-major',
        name: 'Пацифист (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'cautious',
        name: 'Перестраховщик',
        major: false,
    }),
    new Hindrance({
        slug: 'bad-eyes-minor',
        name: 'Плохое зрение (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'bad-eyes-major',
        name: 'Плохое зрение (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'death-wish',
        name: 'Последнее желание',
        major: false,
    }),
    new Hindrance({
        slug: 'quirk',
        name: 'Причуда',
        major: false,
    }),
    new Hindrance({
        slug: 'overconfident',
        name: 'Самоуверенность',
        major: true,
    }),
    new Hindrance({
        slug: 'blind',
        name: 'Слепота',
        major: true,
    }),
    new Hindrance({
        slug: 'elderly',
        name: 'Старость',
        major: true,
    }),
    new Hindrance({
        slug: 'obese',
        name: 'Толстяк',
        major: false,
    }),
    new Hindrance({
        slug: 'poverty',
        name: 'Транжира',
        major: false,
    }),
    new Hindrance({
        slug: 'yellow',
        name: 'Трусость',
        major: true,
    }),
    new Hindrance({
        slug: 'hard-of-hearing-minor',
        name: 'Тугой на ухо (Мелкий)',
        major: false,
    }),
    new Hindrance({
        slug: 'hard-of-hearing-major',
        name: 'Тугой на ухо (Крупный)',
        major: true,
    }),
    new Hindrance({
        slug: 'stubborn',
        name: 'Упрямство',
        major: false,
    }),
    new Hindrance({
        slug: 'ugly',
        name: 'Уродство',
        major: false,
    }),
    new Hindrance({
        slug: 'doubting-thomas',
        name: 'Фома неверующий',
        major: false,
    }),
    new Hindrance({
        slug: 'lame',
        name: 'Хромота',
        major: true,
    }),
    new Hindrance({
        slug: 'outsider',
        name: 'Чужак',
        major: false,
    }),
    new Hindrance({
        slug: 'young',
        name: 'Юность',
        major: true,
    }),
];

export default hindrances;
