import { Commande } from "./Commande";

export class Client {
    id: number;
    nom: string;
    balance: number;
    commandes: Commande[];
}