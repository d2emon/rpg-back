import CharacterTemplate , {ICharacterTemplateDocument} from '../models/characterTemplate';

const templates: ICharacterTemplateDocument[] = [
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
];

export default templates;
