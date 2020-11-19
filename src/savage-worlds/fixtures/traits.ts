import RacialTrait, {IRacialTraitDocument} from '../models/racialTrait';

const d4 = 1;
const d6 = 2;
const d8 = 3;
const d10 = 4;
const d12 = 5;

const racialTraits: IRacialTraitDocument[] = [
    // Race
    new RacialTrait({
        slug: 'free-edge',
        name: 'Бесплатная черта',
    }),
    // Origin
    new RacialTrait({
        slug: 'alien',
        name: 'Чужак',
        hindrance: 'alien',
    }),
    new RacialTrait({
        slug: 'aura-of-danger',
        name: 'Аура опасности',
        //
    }),
    new RacialTrait({
        slug: 'child-of-nature',
        name: 'Дитя природы',
        skills: {
            survival: d6,
            tracking: d6,
        },
    }),
    new RacialTrait({
        slug: 'child-of-street',
        name: 'Дитя улиц',
        skills: {
            stealth: d6,
            streetwise: d6,
        },
    }),
    new RacialTrait({
        slug: 'city-dweller',
        name: 'Городской житель',
        //
    }),
    new RacialTrait({
        slug: 'class-enemy',
        name: 'Классовый враг',
        //
    }),
    new RacialTrait({
        slug: 'cossack-school',
        name: 'Казачья выучка',
        skills: {
            fighting: d6,
            riding: d6,
        },
    }),
    new RacialTrait({
        slug: 'craft',
        name: 'Ремесло',
        //
    }),
    new RacialTrait({
        slug: 'education',
        name: 'Образованный',
        edge: 'education',
    }),
    new RacialTrait({
        slug: 'encyclopedist',
        name: 'Энциклопедист',
        skills: {
            investigation: d6,
        },
    }),
    new RacialTrait({
        slug: 'habit',
        name: 'Привычка',
        hindrance: 'habit',
    }),
    new RacialTrait({
        slug: 'healthy',
        name: 'Крепкое здоровье',
        stats: {
            vigor: d6,
        },
    }),
    new RacialTrait({
        slug: 'honor',
        name: 'Дворянская честь',
        //
    }),
    new RacialTrait({
        slug: 'hunted',
        name: 'Преследуемый',
        //
    }),
    new RacialTrait({
        slug: 'ignorant',
        name: 'Невежда',
        //
    }),
    new RacialTrait({
        slug: 'illiterate',
        name: 'Неграмотный',
        hindrance: 'illiterate',
    }),
    new RacialTrait({
        slug: 'loon',
        name: 'Неотесанный',
        //
    }),
    new RacialTrait({
        slug: 'not-of-this-world',
        name: 'Не от мира сего',
        //
    }),
    new RacialTrait({
        slug: 'old-file',
        name: 'Тертый калач',
        skills: {
            streetwise: d6,
            persuasion: d6,
        },
    }),
    new RacialTrait({
        slug: 'spirituality',
        name: 'Духовность',
        stats: {
            spirit: d6,
        },
    }),
    new RacialTrait({
        slug: 'unreliable',
        name: 'Неблагонадежный',
        //
    }),
    new RacialTrait({
        slug: 'useful-connections',
        name: 'Полезные связи',
        edge: 'useful-connections',
    }),
    new RacialTrait({
        slug: 'rich',
        name: 'Богатство',
        edge: 'rich',
    }),
    new RacialTrait({
        slug: 'worker',
        name: 'Рабочие руки',
        skills: {
            craft: d6,
        },
    }),
];

export default racialTraits;
