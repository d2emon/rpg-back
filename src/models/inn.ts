export interface Inn {
    innId: number;
    name: string;
    location: string;
    people: string[];
    notes?: string;
}

const inns: Inn[] = [
    {
        innId: 1,
        name: 'Название',
        location: 'Местонахождение',
        people: [
            'Представители',
        ],
    },
]

export default inns;
