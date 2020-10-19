export interface Holiday {
    holidayId: number;
    name: string;
    description: string;
    date: string;
}

const holidays: Holiday[] = [
    {
        holidayId: 1,
        name: 'Праздник',
        description: 'Значение',
        date: 'Дата',
    },
]

export default holidays;
