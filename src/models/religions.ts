export interface Religion {
    religionId: number;
    name: string;
    location: string;
    members: string[];
    purposes: string[];
}

const religions: Religion[] = [
    {
        religionId: 1,
        name: 'Название',
        location: 'Местонахождение',
        members: [
            'Представители',
        ],
        purposes: [
            'Цели',
        ],
    },
]

export default religions;
