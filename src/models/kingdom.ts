export interface Kingdom {
    kingdomId: number;
    name: string;
    capital: string;
    ruler: string;
    governmentSystem: string;
    alignment: string;
    population: string;
    religion: string;
    notes?: string;
}

const kingdoms: Kingdom[] = [
    {
        kingdomId: 1,
        name: 'Название',
        capital: 'Столица',
        ruler: 'Правитель',
        governmentSystem: 'Политическая Система',
        alignment: 'Мировоззрение',
        population: 'Население',
        religion: 'Религия',
        notes: '',
    },
]

export default kingdoms;
