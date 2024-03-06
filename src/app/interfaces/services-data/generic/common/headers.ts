import { Paginado } from "./paginado";

export interface Header {
    ip: string;
    uuid: string;
    horaRequest: string;
    llavesimetrica: string;
    paginado: Paginado;
}