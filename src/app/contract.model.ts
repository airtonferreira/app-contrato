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
        public dtInicio: Date,
        public dtFim: Date,
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

