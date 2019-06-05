export interface CarreraI {
    id?: string;
    genero?: string;
    categoria?: string;
    embarcacion?: string;
    distancia?: string;
}
export interface DetalleCarreraI {
    id?: string;
    idCarrera?: string;
    dni?: string;
    palista?: string;
    apellido?: string;
    nombre?: string;
    fnacimiento?: string;
    genero?: string;
    categoria?: string;
    seguro?: string;
    club?: string;
    embarcacion?: string;
    distancia?: string;
    tiempo?: string;
    nTiempo?: number;
}