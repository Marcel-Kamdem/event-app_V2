export class Evenement{
    titre: string;
    description: string;
    date: string;
    lieu: string;
    categorie: string;
    capacite: number

    constructor(titre: string, description: string, date: string, lieu: string, categorie: string, capacite: number){
        this.titre = titre;
        this.description = description;
        this.date = date;
        this.lieu = lieu;
        this.categorie = categorie;
        this.capacite = capacite;
    }
}