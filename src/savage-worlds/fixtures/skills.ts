import Skill, {ISkillDocument} from '../models/skill';

const skills: ISkillDocument[] = [
    new Skill({
        slug: 'gambling',
        name: 'Азартные игры',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'riding',
        name: 'Верховая езда',
        trait: 'agility',
    }),
    new Skill({
        slug: 'lockpicking',
        name: 'Взлом',
        trait: 'agility',
    }),
    new Skill({
        slug: 'notice',
        name: 'Внимание',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'driving',
        name: 'Вождение',
        trait: 'agility',
    }),
    new Skill({
        slug: 'survival',
        name: 'Выживание',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'tracking',
        name: 'Выслеживание',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'fighting',
        name: 'Драка',
        trait: 'agility',
    }),
    new Skill({
        slug: 'intimidation',
        name: 'Запугивание',
        trait: 'spirit',
    }),
    new Skill({
        slug: 'knowledge',
        name: 'Знание',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'climbing',
        name: 'Лазание',
        trait: 'strength',
    }),
    new Skill({
        slug: 'healing',
        name: 'Лечение',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'stealth',
        name: 'Маскировка',
        trait: 'agility',
    }),
    new Skill({
        slug: 'throwing',
        name: 'Метание',
        trait: 'agility',
    }),
    new Skill({
        slug: 'piloting',
        name: 'Пилотирование',
        trait: 'agility',
    }),
    new Skill({
        slug: 'swimming',
        name: 'Плавание',
        trait: 'agility',
    }),
    new Skill({
        slug: 'taunt',
        name: 'Провокация',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'investigation',
        name: 'Расследование',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'repair',
        name: 'Ремонт',
        trait: 'smarts',
    }),
    new Skill({
        slug: 'shooting',
        name: 'Стрельба',
        trait: 'agility',
    }),
    new Skill({
        slug: 'boating',
        name: 'Судовождение',
        trait: 'agility',
    }),
    new Skill({
        slug: 'persuasion',
        name: 'Убеждение',
        trait: 'spirit',
    }),
    new Skill({
        slug: 'streetwise',
        name: 'Уличное чутье',
        trait: 'smarts',
    }),
];

export default skills;
