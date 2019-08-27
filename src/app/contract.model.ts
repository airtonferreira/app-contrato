export class Contract {
    constructor(
        public id: number,
        public numContrato: string,
        public numLicitacao: string,
        public modalidade: string,
        public tipoContrato: string,
        public objetoContrato: string,
        public favorecido: string,
        public valorContrato: string,
        public dtInicio: string,
        public dtFim: string,
        public quantDias: string,
        public status: string
    ) { }


}

export interface Page {
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
}

