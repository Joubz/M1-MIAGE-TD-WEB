export class RendezVous {
  id: number;
  name: string;
  mail: string;
  type: string;
  date: string;


  constructor() {
  }

  public toString(): string {
    return ('Nom : ' + this.name + ', Mail : ' + this.mail + ', Type : ' + this.type + ' & Date : ' + this.date);
  }
}
