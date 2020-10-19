export interface Plot {
    plotId: number;
    title: string;
    heroicStage?: string;
    perfectStage?: string;
    epicStage?: string;
}

const plots: Plot[] = [
    {
        plotId: 1,
        title: 'Сюжет',
        heroicStage: '',
        perfectStage: '',
        epicStage: '',
    },
]

export default plots;
