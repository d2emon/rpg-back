export default {
    character: (slug: string) => `${process.env.API_URL}api/v1.0/dnd5/character/${slug}`,
    // race: (slug: string) => `${process.env.API_URL}api/v1.0/dnd5/race/${slug}`,
    // skill: (slug: string) => `${process.env.API_URL}api/v1.0/dnd5/skill/${slug}`,
    // trait: (slug: string) => `${process.env.API_URL}api/v1.0/dnd5/racial-trait/${slug}`,
}