export interface City {
    cityId: number;
    name: string;
    population: string[];
    notes?: string;
}

const cities: City[] = [
    {
        cityId: 1,
        name: 'Название',
        population: [
            'Жители',
        ],
    },
]

export default cities;
