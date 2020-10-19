export interface God {
    godId: number;
    name: string;
    alignment: string;
    ideology: string;
    symbol: string;
}

const gods: God[] = [
    {
        godId: 1,
        name: 'Имя Божества',
        alignment: 'Мировоззрение',
        ideology: 'Убеждения',
        symbol: 'Символ',
    },
]

export default gods;
