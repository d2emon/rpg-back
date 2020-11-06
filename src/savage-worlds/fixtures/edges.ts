import Edge, {IEdgeDocument} from '../models/edge';

const edges: IEdgeDocument[] = [
    // Background Edges
    new Edge({
        slug: 'alertness',
        name: 'Alertness',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'ambidextrous',
        name: 'Ambidextrous',
        group: 'background',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'arcane-background',
        name: 'Arcane Background',
        group: 'background',
        requirements: {
            rank: 'novice',
            special: true,
        },
    }),
    new Edge({
        slug: 'arcane-resistance',
        name: 'Arcane Resistance',
        group: 'background',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-arcane-resistance',
        name: 'Improved Arcane Resistance',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['arcane-resistance'],
        },
    }),
    new Edge({
        slug: 'attractive',
        name: 'Attractive',
        group: 'background',
        requirements: {
            rank: 'novice',
            vigor: 'd6',
        },
    }),
    new Edge({
        slug: 'very-attractive',
        name: 'Very Attractive',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['attractive'],
        },
    }),
    new Edge({
        slug: 'berserk',
        name: 'Berserk',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'brawny',
        name: 'Brawny',
        group: 'background',
        requirements: {
            rank: 'novice',
            any: [
                {
                    strength: 'd6',
                },
                {
                    vigor: 'd6',
                },
            ],
        },
    }),
    new Edge({
        slug: 'fast-healer',
        name: 'Fast Healer',
        group: 'background',
        requirements: {
            rank: 'novice',
            vigor: 'd8',
        },
    }),
    new Edge({
        slug: 'luck',
        name: 'Luck',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'great-luck',
        name: 'Great Luck',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['luck'],
        },
    }),
    new Edge({
        slug: 'noble',
        name: 'Noble',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'quick',
        name: 'Quick',
        group: 'background',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'rich',
        name: 'Rich',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'filty-rich',
        name: 'Filthy Rich',
        group: 'background',
        requirements: {
            rank: 'novice',
            any: [
                { edges: ['rich'] },
                { edges: ['noble'] },
            ],
        },
    }),

    // Combat Edges
    new Edge({
        slug: 'block',
        name: 'Block',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            skills: {
                fighting: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'improved-block',
        name: 'Improved Block',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['block'],
        },
    }),
    new Edge({
        slug: 'combat-reflexes',
        name: 'Combat Reflexes',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'dodge',
        name: 'Dodge',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-dodge',
        name: 'Improved Dodge',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['dodge'],
        },
    }),
    new Edge({
        slug: 'first-strike',
        name: 'First Strike',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-first-strike',
        name: 'Improved First Strike',
        group: 'combat',
        requirements: {
            rank: 'heroic',
            edges: ['first-strike'],
        },
    }),
    new Edge({
        slug: 'fleet-footed',
        name: 'Fleet-Footed',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd6',
        },
    }),
    new Edge({
        slug: 'florentine',
        name: 'Florentine',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
            skills: {
                fighting: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'frenzy',
        name: 'Frenzy',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            skills: {
                fighting: 'd10',
            },
        },
    }),
    new Edge({
        slug: 'improved-frenzy',
        name: 'Improved Frenzy',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['frenzy'],
        },
    }),
    new Edge({
        slug: 'giant-killer',
        name: 'Giant Killer',
        group: 'combat',
        requirements: {
            rank: 'veteran',
        },
    }),
    new Edge({
        slug: 'hard-to-kill',
        name: 'Hard to Kill',
        group: 'combat',
        requirements: {
            wildCard: true,
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'harder-to-kill',
        name: 'Harder to Kill',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['hard-to-kill'],
        },
    }),
    new Edge({
        slug: 'level-headed',
        name: 'Level Headed',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            smarts: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-level-headed',
        name: 'Improved Level Headed',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            edges: ['level-headed'],
        },
    }),
    new Edge({
        slug: 'marksman',
        name: 'Marksman',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'nerves-of-steel',
        name: 'Nerves of Steel',
        group: 'combat',
        requirements: {
            wildCard: true,
            rank: 'novice',
            vigor: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-nerves-of-steel',
        name: 'Improved Nerves of Steel',
        group: 'combat',
        requirements: {
            rank: 'novice',
            edges: ['nerves-of-steel'],
        },
    }),
    new Edge({
        slug: 'no-mercy',
        name: 'No Mercy',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'quick-draw',
        name: 'Quick Draw',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'rock-and-roll',
        name: 'Rock and Roll!',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            skills: {
                shooting: 'd8'
            },
        },
    }),
    new Edge({
        slug: 'steady-hands',
        name: 'Steady Hands',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'sweep',
        name: 'Sweep',
        group: 'combat',
        requirements: {
            rank: 'novice',
            strength: 'd8',
            skills: {
                fighting: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'improved-sweep',
        name: 'Improved Sweep',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['sweep'],
        },
    }),
    new Edge({
        slug: 'trademark-weapon',
        name: 'Trademark Weapon',
        group: 'combat',
        requirements: {
            rank: 'novice',
            any: [
                {
                    skills: {
                        fighting: 'd10',
                    },
                },
                {
                    skills: {
                        shooting: 'd10',
                    },
                },
            ],
        },
    }),
    new Edge({
        slug: 'improved-trademark-weapon',
        name: 'Improved Trademark Weapon',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['trademark-weapon'],
        },
    }),
    new Edge({
        slug: 'two-fisted',
        name: 'Two Fisted',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),

    // Leadership Edges
    new Edge({
        slug: 'command',
        name: 'Command',
        group: 'leadership',
        requirements: {
            rank: 'novice',
            smarts: 'd6',
        },
    }),
    new Edge({
        slug: 'fervor',
        name: 'Fervor',
        group: 'leadership',
        requirements: {
            rank: 'veteran',
            spirit: 'd8',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'hold-the-line',
        name: 'Hold the Line!',
        group: 'leadership',
        requirements: {
            rank: 'seasoned',
            smarts: 'd8',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'inspire',
        name: 'Inspire',
        group: 'leadership',
        requirements: {
            rank: 'seasoned',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'natural-leader',
        name: 'Natural Leader',
        group: 'leadership',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
            edges: ['command'],
        },
    }),

    // Power Edges
    new Edge({
        slug: 'new-power',
        name: 'New Power',
        group: 'power',
        requirements: {
            rank: 'novice',
            edges: ['arcane-background'],
        },
    }),
    new Edge({
        slug: 'power-points',
        name: 'Power Points',
        group: 'power',
        requirements: {
            rank: 'novice',
            edges: ['arcane-background'],
        },
    }),
    new Edge({
        slug: 'rapid-recharge',
        name: 'Rapid Recharge',
        group: 'power',
        requirements: {
            rank: 'seasoned',
            spirit: 'd6',
            edges: ['arcane-background'],
        },
    }),
    new Edge({
        slug: 'improved-rapid-recharge',
        name: 'Improved Rapid Recharge',
        group: 'power',
        requirements: {
            rank: 'veteran',
            edges: ['rapid-recharge'],
        },
    }),
    new Edge({
        slug: 'soul-drain',
        name: 'Soul Drain',
        group: 'power',
        requirements: {
            rank: 'seasoned',
            knowledge: 'd10', // Arcana
            edges: ['arcane-background'], // Not Weird science
        },
    }),

    // Professional Edges
    new Edge({
        slug: 'ace',
        name: 'Ace',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'acrobat',
        name: 'Acrobat',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
            strength: 'd6',
        },
    }),
    new Edge({
        slug: 'champion',
        name: 'Champion',
        group: 'professional',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
            strength: 'd6',
            vigor: 'd8',
            edges: ['arcane-background'], // Miracles
            skills: {
                fighting: 'd8',
                faith: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'gadgeteer',
        name: 'Gadgeteer',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd8',
            strength: 'd6',
            edges: ['arcane-background'], // Weird Science
            skills: {
                repair: 'd8',
                'weird-science': 'd8',
                // Two scientific knowledge d6
            },
        },
    }),
    new Edge({
        slug: 'holy-warrior',
        name: 'Holy/Unholy Warrior',
        group: 'professional',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
            edges: ['arcane-background'], // Miracles
            skills: {
                faith: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'investigator',
        name: 'Investigator',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd8',
            skills: {
                investigation: 'd8',
                streetwise: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'jack-of-all-trades',
        name: 'Jack-of-All-Trades',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd10',
        },
    }),
    new Edge({
        slug: 'mc-gyver',
        name: 'McGyver',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd6',
            skills: {
                repair: 'd6',
                notice: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'mentalist',
        name: 'Mentalist',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd8',
            edges: ['arcane-background'], // Psionics
            skills: {
                psionics: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'mr-fix-it',
        name: 'Mr. Fix It',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd10',
            edges: ['arcane-background'], // Weird Science
            skills: {
                repair: 'd8',
                'weird-science': 'd8',
                // Two scientific knowledge d6
            },
        },
    }),
    new Edge({
        slug: 'scholar',
        name: 'Scholar',
        group: 'professional',
        requirements: {
            rank: 'novice',
            skills: {
                // Affected skill d8
            },
        },
    }),
    new Edge({
        slug: 'thief',
        name: 'Thief',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
            skills: {
                climb: 'd6',
                lockpick: 'd6',
                stealth: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'wizard',
        name: 'Wizard',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd8',
            edges: ['arcane-background'], // Magic
            skills: {
                knowledge: 'd8', // Arcana
                spellcasting: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'woodsman',
        name: 'Woodsman',
        group: 'professional',
        requirements: {
            rank: 'novice',
            spirit: 'd6',
            skills: {
                survival: 'd8',
                tracking: 'd8',
            },
        },
    }),

    // Social Edges
    new Edge({
        slug: 'charismatic',
        name: 'Charismatic',
        group: 'social',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'common-bond',
        name: 'Common Bond',
        group: 'social',
        requirements: {
            wildCard: true,
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'connections',
        name: 'Connections',
        group: 'social',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'strong-willed',
        name: 'Strong Willed',
        group: 'social',
        requirements: {
            rank: 'novice',
            skills: {
                intimidate: 'd6',
                taunt: 'd6',
            },
        },
    }),

    // Weird Edges
    new Edge({
        slug: 'beast-bond',
        name: 'Beast Bond',
        group: 'weird',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'beast-master',
        name: 'Beast Master',
        group: 'weird',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'danger-sense',
        name: 'danger Sense',
        group: 'weird',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'healer',
        name: 'Healer',
        group: 'weird',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),

    // Wild Card Edges
    new Edge({
        slug: 'dead-shot',
        name: 'Dead Shot',
        group: 'wild-card',
        requirements: {
            wildCard: true,
            rank: 'seasoned',
            any: [
                {
                    skills: { shooting: 'd10' },
                },
                {
                    skills: { throwing: 'd10' },
                },
            ],
        },
    }),
    new Edge({
        slug: 'mighty-blow',
        name: 'Mighty Blow',
        group: 'wild-card',
        requirements: {
            wildCard: true,
            rank: 'seasoned',
            skills: {
                fighting: 'd10',
            },
        },
    }),
    new Edge({
        slug: 'power-surge',
        name: 'Power Surge',
        group: 'wild-card',
        requirements: {
            wildCard: true,
            rank: 'seasoned',
            skills: {
                'arcane-skill': 'd10',
            },
        },
    }),

    // Legendary Edges
    new Edge({
        slug: 'followers',
        name: 'Followers',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'professional',
        name: 'Professional',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            // Affected trait 'd12
        },
    }),
    new Edge({
        slug: 'expert',
        name: 'Expert',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['professional'],
        },
    }),
    new Edge({
        slug: 'master',
        name: 'Master',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
            edges: ['expert'],
        },
    }),
    new Edge({
        slug: 'sidekick',
        name: 'Sidekick',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'tough-as-nails',
        name: 'Tough as Nails',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'improved-tough-as-nails',
        name: 'Improved Tough as Nails',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['tough-as-nails'],
        },
    }),
    new Edge({
        slug: 'weapon-master',
        name: 'Weapon Master',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            skills: {
                fighting: 'd12',
            },
        },
    }),
    new Edge({
        slug: 'master-of-arms',
        name: 'Master of Arms',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['weapon-master'],
        },
    }),

];

export default edges;
