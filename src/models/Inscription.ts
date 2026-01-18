import { Evenement } from './Evenement.js';
import { Utilisateur } from './Utilisateur.js';

class Inscription{
   evenement: Evenement;
   utilisateur: Utilisateur;
   dateInscription: string;

   constructor(evenement: Evenement, utilisateur: Utilisateur){
    this.evenement = evenement;
    this.utilisateur = utilisateur;
    this.dateInscription = new Date().toLocaleDateString();
   }
}