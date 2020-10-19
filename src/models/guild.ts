export interface Guild {
    guildId: number;
    name: string;
    location: string;
    members: string[];
    purposes: string[];
}

const guilds: Guild[] = [
    {
        guildId: 1,
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

export default guilds;
