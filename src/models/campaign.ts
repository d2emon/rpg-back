import players, { Player } from './player';
import books, { Book } from './book';

export interface Campaign {
    campaignId: number;
    name: string;
    master: Player;
    players: Player[];
    books: Book[]
}

const campaigns: Campaign[] = [
    {
        campaignId: 1,
        name: 'Campaign Name',
        master: players.find(p => (p.playerId === 1)),
        players: [
            players.find(p => (p.playerId === 2)),
            players.find(p => (p.playerId === 3)),
        ],
        books: [
            books.find(b => (b.bookId === 1)),
            books.find(b => (b.bookId === 2)),
        ],
    },
]

export default campaigns;
