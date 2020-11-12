import Origin, {IOriginDocument} from '../models/origin';

const origins: IOriginDocument[] = [
    new Origin({
        slug: 'bourgeois',
        name: 'Буржуа',
        traits: [
            'wealth',
            'education',
            'class-enemy',
            'hunted',
        ],
    }),
    new Origin({
        slug: 'noble',
        name: 'Дворянин',
        traits: [
            'spirituality',
            'education',
            'honor',
            'hunted',
        ],
    }),
    new Origin({
        slug: 'declassified',
        name: 'Деклассированный',
        traits: [
            'child-of-street',
            'illiterate',
            'habit',
        ],
    }),
    new Origin({
        slug: 'savage',
        name: 'Инородец',
        traits: [
            'child-of-nature',
            'illiterate',
            'alien',
        ],
    }),
    new Origin({
        slug: 'intellectual',
        name: 'Интиллигент',
        traits: [
            'encyclopedist',
            'education',
            'not-of-this-world',
        ],
    }),
    new Origin({
        slug: 'cossack',
        name: 'Казак',
        traits: [
            'cossack-school',
            'aura-of-danger',
        ],
    }),
    new Origin({
        slug: 'peasant',
        name: 'Крестьянин',
        traits: [
            'healthy',
            'loon',
            'illiterate',
        ],
    }),
    new Origin({
        slug: 'tradesman',
        name: 'Мещанин',
        traits: [
            'old-file',
            'city-dweller',
        ],
    }),
    new Origin({
        slug: 'proletarian',
        name: 'Пролетарий',
        traits: [
            'worker',
            'craft',
            'class-enemy',
            'unreliable',
        ],
    }),
    new Origin({
        slug: 'foreigner',
        name: 'Чужестранец',
        traits: [
            'useful-connections',
            'ignorant',
        ],
    }),
];

export default origins;
