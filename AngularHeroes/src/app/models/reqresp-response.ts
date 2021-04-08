import { Heroe } from "../servicios/heroes.service";

export interface ReqResResponse{
    page: number;
    per_page:number;
    total:number;
    total_pages:number;
    data:Heroe[];
    ad:Ad;
}

interface Ad{
    company: string;
    url: string;
    text: string;
}