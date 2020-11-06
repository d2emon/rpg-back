import Edge, {IEdgeDocument} from '../models/edge';

const edges: IEdgeDocument[] = [
    // Background Edges
    new Edge({
        slug: 'ambidextrous',
        name: 'Амбидекстр',
        group: 'background',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'noble',
        name: 'Аристократ',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'alertness',
        name: 'Бдительность',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'berserk',
        name: 'Берсерк',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'rich',
        name: 'Богатство',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'filty-rich',
        name: 'Богатство +',
        group: 'background',
        requirements: {
            rank: 'novice',
            any: [
                { edges: ['rich'] },
                { edges: ['noble'] },
            ],
        },
    }),
    new Edge({
        slug: 'brawny',
        name: 'Бугай',
        group: 'background',
        requirements: {
            rank: 'novice',
            strength: 'd6',
            vigor: 'd6',
        },
    }),
    new Edge({
        slug: 'quick',
        name: 'Быстроногий',
        group: 'background',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'luck',
        name: 'Везение',
        group: 'background',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'great-luck',
        name: 'Везение +',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['luck'],
        },
    }),
    new Edge({
        slug: 'arcane-resistance',
        name: 'Защита от серхъестественного',
        group: 'background',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-arcane-resistance',
        name: 'Защита от серхъестественного +',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['arcane-resistance'],
        },
    }),
    new Edge({
        slug: 'fast-healer',
        name: 'Здоров как бык',
        group: 'background',
        requirements: {
            rank: 'novice',
            vigor: 'd8',
        },
    }),
    new Edge({
        slug: 'linguist', // ?
        name: 'Лингвист',
        group: 'background',
        requirements: {
            rank: 'novice',
            smarts: 'd6',
        },
    }),
    new Edge({
        slug: 'arcane-background',
        name: 'Мистический дар',
        group: 'background',
        requirements: {
            rank: 'novice',
            special: true,
        },
    }),
    new Edge({
        slug: 'attractive',
        name: 'Привлекательность',
        group: 'background',
        requirements: {
            rank: 'novice',
            vigor: 'd6',
        },
    }),
    new Edge({
        slug: 'very-attractive',
        name: 'Привлекательность +',
        group: 'background',
        requirements: {
            rank: 'novice',
            edges: ['attractive'],
        },
    }),
    new Edge({
        slug: 'guts', // ?
        name: 'Смелость',
        group: 'background',
        requirements: {
            rank: 'novice',
            spirit: 'd6',
        },
    }),
    new Edge({
        slug: 'swift', // ?
        name: 'Стремительный',
        group: 'background',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),

    // Combat Edges
    new Edge({
        slug: 'two-fisted',
        name: 'Атака с двух рук',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'no-mercy',
        name: 'Беспощадный',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'block',
        name: 'Блок',
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
        name: 'Блок +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['block'],
        },
    }),
    new Edge({
        slug: 'combat-reflexes',
        name: 'Боевая закалка',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'frenzy',
        name: 'Боевая ярость',
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
        name: 'Боевая ярость +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['frenzy'],
        },
    }),
    new Edge({
        slug: 'improvisor', // ?
        name: 'Боец-импровизатор',
        group: 'combat',
        requirements: {
            rank: 'novice',
            smarts: 'd6',
        },
    }),
    new Edge({
        slug: 'quick-draw',
        name: 'Быстрая реакция',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'win-will', // ?
        name: 'Воля к победе',
        group: 'combat',
        requirements: {
            rank: 'heroic',
        },
    }),
    new Edge({
        slug: 'trademark-weapon',
        name: 'Именное оружие',
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
        name: 'Именное оружие +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['trademark-weapon'],
        },
    }),
    new Edge({
        slug: 'counter-strike', // ?
        name: 'Контратака',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            skills: {
                fighting: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'improved-counter-strike', // ?
        name: 'Контратака +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['counter-strike'],
        },
    }),
    new Edge({
        slug: 'hard-to-kill',
        name: 'Крепкий орешек',
        group: 'combat',
        requirements: {
            wildCard: true,
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'harder-to-kill',
        name: 'Крепкий орешек +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['hard-to-kill'],
        },
    }),
    new Edge({
        slug: 'sweep',
        name: 'Круговой удар',
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
        name: 'Круговой удар +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['sweep'],
        },
    }),
    new Edge({
        slug: 'martial-arts', // ?
        name: 'Мастер боевых искусств',
        group: 'combat',
        requirements: {
            rank: 'novice',
            skills: {
                fighting: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'improved-martial-arts', // ?
        name: 'Мастер боевых искусств +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['martial-arts'],
            skills: {
                fighting: 'd10',
            },
        },
    }),
    new Edge({
        slug: 'marksman',
        name: 'Меткий стрелок',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
        },
    }),
    new Edge({
        slug: 'keep-distance', // ?
        name: 'Разрыв дистанции',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-keep-distance', // ?
        name: 'Разрыв дистанции +',
        group: 'combat',
        requirements: {
            rank: 'novice',
            edges: ['keep-distance'],
        },
    }),
    new Edge({
        slug: 'rock-and-roll',
        name: 'Рок-н-ролл!',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            skills: {
                shooting: 'd8'
            },
        },
    }),
    new Edge({
        slug: 'nerves-of-steel',
        name: 'Стальные нервы',
        group: 'combat',
        requirements: {
            wildCard: true,
            rank: 'novice',
            vigor: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-nerves-of-steel',
        name: 'Стальные нервы +',
        group: 'combat',
        requirements: {
            rank: 'novice',
            edges: ['nerves-of-steel'],
        },
    }),
    new Edge({
        slug: 'steady-hands',
        name: 'Твёрдая рука',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'hard-hand', // ?
        name: 'Тяжелая рука',
        group: 'combat',
        requirements: {
            rank: 'novice',
            strength: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-hard-hand', // ?
        name: 'Тяжелая рука +',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            edges: ['hard-hand'],
        },
    }),
    new Edge({
        slug: 'giant-killer',
        name: 'Убийца великанов',
        group: 'combat',
        requirements: {
            rank: 'veteran',
        },
    }),
    new Edge({
        slug: 'dodge',
        name: 'Уклонение',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-dodge',
        name: 'Уклонение +',
        group: 'combat',
        requirements: {
            rank: 'veteran',
            edges: ['dodge'],
        },
    }),
    new Edge({
        slug: 'uporstvo', // ?
        name: 'Упорство',
        group: 'combat',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'first-strike',
        name: 'Упреждающий удар',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-first-strike',
        name: 'Упреждающий удар +',
        group: 'combat',
        requirements: {
            rank: 'heroic',
            edges: ['first-strike'],
        },
    }),
    new Edge({
        slug: 'florentine',
        name: 'Флорентийская школа',
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
        slug: 'level-headed',
        name: 'Хладнокровие',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            smarts: 'd8',
        },
    }),
    new Edge({
        slug: 'improved-level-headed',
        name: 'Хладнокровие +',
        group: 'combat',
        requirements: {
            rank: 'seasoned',
            edges: ['level-headed'],
        },
    }),
    /*
    new Edge({
        slug: 'fleet-footed',
        name: 'Fleet-Footed',
        group: 'combat',
        requirements: {
            rank: 'novice',
            agility: 'd6',
        },
    }),
    */

    // Leadership Edges
    new Edge({
        slug: 'fervor',
        name: 'Боевой пыл',
        group: 'leadership',
        requirements: {
            rank: 'veteran',
            spirit: 'd8',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'inspire',
        name: 'Воодушевление',
        group: 'leadership',
        requirements: {
            rank: 'seasoned',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'hold-the-line',
        name: 'Держать строй!',
        group: 'leadership',
        requirements: {
            rank: 'seasoned',
            smarts: 'd8',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'command',
        name: 'Командный голос',
        group: 'leadership',
        requirements: {
            rank: 'novice',
            smarts: 'd6',
        },
    }),
    new Edge({
        slug: 'leader', // ?
        name: 'Предводитель',
        group: 'leadership',
        requirements: {
            rank: 'veteran',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'natural-leader',
        name: 'Прирожденный лидер',
        group: 'leadership',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'personality-force', // ?
        name: 'Сила личности',
        group: 'leadership',
        requirements: {
            rank: 'novice',
            edges: ['command'],
        },
    }),
    new Edge({
        slug: 'tactic', // ?
        name: 'Тактик',
        group: 'leadership',
        requirements: {
            wildCard: true,
            rank: 'seasoned',
            smarts: 'd8',
            edges: ['command'],
            skills: {
                knowledge: 'd6', // Army
            }
        },
    }),

    // Power Edges
    new Edge({
        slug: 'rapid-recharge',
        name: 'Восстановление силы',
        group: 'power',
        requirements: {
            rank: 'seasoned',
            spirit: 'd6',
            edges: ['arcane-background'],
        },
    }),
    new Edge({
        slug: 'improved-rapid-recharge',
        name: 'Восстановление силы +',
        group: 'power',
        requirements: {
            rank: 'veteran',
            edges: ['rapid-recharge'],
        },
    }),
    new Edge({
        slug: 'soul-drain',
        name: 'Иссушение духа',
        group: 'power',
        requirements: {
            rank: 'seasoned',
            knowledge: 'd10', // Arcana
            edges: ['arcane-background'], // Not Weird science
        },
    }),
    new Edge({
        slug: 'new-power',
        name: 'Новая сила',
        group: 'power',
        requirements: {
            rank: 'novice',
            edges: ['arcane-background'],
        },
    }),
    new Edge({
        slug: 'power-points',
        name: 'Пункты силы',
        group: 'power',
        requirements: {
            rank: 'novice',
            edges: ['arcane-background'],
        },
    }),

    // Professional Edges
    new Edge({
        slug: 'adept', // ?
        name: 'Адепт',
        group: 'professional',
        requirements: {
            rank: 'novice',
            edges: ['arcane-background'], // Miracles
            skills: {
                fighting: 'd8',
                faith: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'acrobat',
        name: 'Акробат',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
            strength: 'd6',
        },
    }),
    new Edge({
        slug: 'ace',
        name: 'Ас',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
        },
    }),
    new Edge({
        slug: 'holy-warrior',
        name: 'Воин света / Воин тьмы',
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
        slug: 'thief',
        name: 'Вор',
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
        slug: 'woodsman',
        name: 'Егерь',
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
    new Edge({
        slug: 'mr-fix-it',
        name: 'Золотые руки',
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
        slug: 'champion',
        name: 'Избранный',
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
        name: 'Изобретатель',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd8',
            edges: ['arcane-background'], // Weird Science
            skills: {
                repair: 'd8',
                'weird-science': 'd8',
                // Two scientific knowledge d6
            },
        },
    }),
    new Edge({
        slug: 'investigator',
        name: 'Исследователь',
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
        name: 'Мастер на все руки',
        group: 'professional',
        requirements: {
            rank: 'novice',
            smarts: 'd10',
        },
    }),
    new Edge({
        slug: 'mentalist',
        name: 'Менталист',
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
        slug: 'mc-gyver',
        name: 'Народный умелец',
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
        slug: 'assassin', // ?
        name: 'Убийца',
        group: 'professional',
        requirements: {
            rank: 'novice',
            agility: 'd8',
            skills: {
                climb: 'd6',
                fighting: 'd6',
                stealth: 'd8',
            },
        },
    }),
    new Edge({
        slug: 'scholar',
        name: 'Ученый',
        group: 'professional',
        requirements: {
            rank: 'novice',
            skills: {
                // Affected skill d8
            },
        },
    }),
    new Edge({
        slug: 'wizard',
        name: 'Чародей',
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

    // Social Edges
    new Edge({
        slug: 'strong-willed',
        name: 'Железная воля',
        group: 'social',
        requirements: {
            rank: 'novice',
            skills: {
                intimidate: 'd6',
                taunt: 'd6',
            },
        },
    }),
    new Edge({
        slug: 'common-bond',
        name: 'Мы команда',
        group: 'social',
        requirements: {
            wildCard: true,
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'connections',
        name: 'Полезные связи',
        group: 'social',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'charismatic',
        name: 'Харизматичный',
        group: 'social',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),

    // Weird Edges
    new Edge({
        slug: 'beast-bond',
        name: 'Верный зверь',
        group: 'weird',
        requirements: {
            rank: 'novice',
        },
    }),
    new Edge({
        slug: 'courage', // ?
        name: 'Глоток мужества',
        group: 'weird',
        requirements: {
            rank: 'novice',
            vigor: 'd8',
        },
    }),
    new Edge({
        slug: 'zapaslivy', // ?
        name: 'Запасливый',
        group: 'weird',
        requirements: {
            rank: 'novice',
            edges: ['luck'],
        },
    }),
    new Edge({
        slug: 'beast-master',
        name: 'Укротитель',
        group: 'weird',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'healer',
        name: 'Целитель',
        group: 'weird',
        requirements: {
            rank: 'novice',
            spirit: 'd8',
        },
    }),
    new Edge({
        slug: 'danger-sense',
        name: 'Шестое чувство',
        group: 'weird',
        requirements: {
            rank: 'novice',
        },
    }),

    // Wild Card Edges
    new Edge({
        slug: 'mighty-blow',
        name: 'Могучий удар',
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
        name: 'Прилив силы',
        group: 'wild-card',
        requirements: {
            wildCard: true,
            rank: 'seasoned',
            skills: {
                'arcane-skill': 'd10',
            },
        },
    }),
    new Edge({
        slug: 'dead-shot',
        name: 'Смертельный выстрел',
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

    // Legendary Edges
    new Edge({
        slug: 'weapon-master',
        name: 'Искусный воин',
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
        name: 'Искусный воин +',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['weapon-master'],
        },
    }),
    new Edge({
        slug: 'master',
        name: 'Мастер',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
            edges: ['expert'],
        },
    }),
    //
    new Edge({
        slug: 'tough-as-nails',
        name: 'Несгибаемый',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'improved-tough-as-nails',
        name: 'Несгибаемый +',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['tough-as-nails'],
        },
    }),
    new Edge({
        slug: 'sidekick',
        name: 'Помощник',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'followers',
        name: 'Верные спутники',
        group: 'legendary',
        requirements: {
            wildCard: true,
            rank: 'legendary',
        },
    }),
    new Edge({
        slug: 'professional',
        name: 'Профессионал',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            // Affected trait 'd12
        },
    }),
    new Edge({
        slug: 'expert',
        name: 'Эксперт',
        group: 'legendary',
        requirements: {
            rank: 'legendary',
            edges: ['professional'],
        },
    }),
];

export default edges;
