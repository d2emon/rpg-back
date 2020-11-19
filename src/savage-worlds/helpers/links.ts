export default {
    character: (slug: string) => `${process.env.API_URL}api/v1.0/sw/character/${slug}`,
    characterTemplate: (slug: string) => `${process.env.API_URL}api/v1.0/sw/template/${slug}`,
    edge: (slug: string) => `${process.env.API_URL}api/v1.0/sw/edge/${slug}`,
    hindrance: (slug: string) => `${process.env.API_URL}api/v1.0/sw/hindrance/${slug}`,
    origin: (slug: string) => `${process.env.API_URL}api/v1.0/sw/origin/${slug}`,
    race: (slug: string) => `${process.env.API_URL}api/v1.0/sw/race/${slug}`,
    skill: (slug: string) => `${process.env.API_URL}api/v1.0/sw/skill/${slug}`,
    trait: (slug: string) => `${process.env.API_URL}api/v1.0/sw/racial-trait/${slug}`,
}