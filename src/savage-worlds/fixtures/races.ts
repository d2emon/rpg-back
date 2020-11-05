import Race, {IRaceDocument} from '../models/race';

const races: IRaceDocument[] = [
    new Race({
        slug: 'human',
        name: 'Человек',
        traits: [
            'free-edge',
        ],
    }),
];

export default races;
