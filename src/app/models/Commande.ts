import { Status } from './Status';
import { Client } from './Client';
import { Repas } from './Repas';
export class Commande {
    id: number;
    repas: Repas;
    client: Client;
    status: Status;
}