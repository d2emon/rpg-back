import kingdoms, {Kingdom} from './kingdom';
import money, {Money} from './money';
import gods, {God} from './god';
import holidays, {Holiday} from './holiday';
import guilds, {Guild} from './guild';
import religions, {Religion} from './religions';
import cities, {City} from "./city";
import inns, {Inn} from "./inn";
import places, {Place} from "./place";

export interface World {
    worldId: number;
    name: string;

    kingdoms: Kingdom[];
    money: Money[];
    gods: God[];
    holidays: Holiday[];

    geography: string;
    guilds: Guild[];
    religions: Religion[];

    cities: City[];
    inns: Inn[];
    places: Place[];
}

const worlds: World[] = [
    {
        worldId: 1,
        name: 'Forgotten Realms',

        kingdoms: [
            kingdoms.find(k => (k.kingdomId === 1)),
        ],
        money: [
            money.find(m => (m.moneyId === 1)),
            money.find(m => (m.moneyId === 2)),
            money.find(m => (m.moneyId === 3)),
            money.find(m => (m.moneyId === 4)),
        ],
        gods: [
            gods.find(g => (g.godId === 1)),
        ],
        holidays: [
            holidays.find(h => (h.holidayId === 1)),
        ],

        geography: 'География мира',
        guilds: [
            guilds.find(g => (g.guildId === 1)),
        ],
        religions: [
            religions.find(r => (r.religionId === 1)),
        ],

        cities: [
            cities.find(c => (c.cityId === 1)),
        ],
        inns: [
            inns.find(i => (i.innId === 1)),
        ],
        places: [
            places.find(p => (p.placeId === 1)),
        ],
    },
]

export default worlds;
