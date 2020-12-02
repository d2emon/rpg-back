import Race, { IRaceDocument } from '../models/race';

const races: IRaceDocument[] = [
    new Race({
        slug: 'dwarf',
        name: 'Dwarf',
    }),
];

export default races;
