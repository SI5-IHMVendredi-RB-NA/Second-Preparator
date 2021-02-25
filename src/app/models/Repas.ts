import { Dessert } from './Dessert';
import { Sandwich } from './Sandwich';
import { Entree } from './Entree';
import { Boisson } from './Boisson';
export class Repas {
    id: number;
    prix: number;
    entree: Entree;
    plat: Sandwich;
    dessert: Dessert;
    boisson: Boisson;
}