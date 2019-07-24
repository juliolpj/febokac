export interface CompetenciaI {
    id?: string;
    competencia: string;
    desde?: string;
    hasta?: string;
    club?: string;
    status?: string;
    distancia?: [
        {
            categoria: string;
            embarcacion: string;
            distancia: string;
        }
    ]
}
