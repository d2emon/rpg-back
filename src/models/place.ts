export interface Place {
    placeId: number;
    name: string;
    location: string;
    people: string[];
    notes?: string;
}

const places: Place[] = [
    {
        placeId: 1,
        name: 'Название',
        location: 'Местонахождение',
        people: [
            'Представители',
        ],
    },
]

export default places;
