export default {
    character: (slug: string) => `${process.env.API_URL}api/v1.0/sw/character/${slug}`,
    skill: (slug: string) => `${process.env.API_URL}api/v1.0/sw/skill/${slug}`,
    hindrance: (slug: string) => `${process.env.API_URL}api/v1.0/sw/hindrance/${slug}`,
    edge: (slug: string) => `${process.env.API_URL}api/v1.0/sw/edge/${slug}`,
}