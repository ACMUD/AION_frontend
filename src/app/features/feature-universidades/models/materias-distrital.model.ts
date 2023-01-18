import { Horario } from './horario.model';

export class GrupoDistrital {
  constructor(
    public id: string,
    public facultad: string,
    public proyecto_curricular: string,
    public horarios: Horario[],
  ) { }
}

export class MateriaDistrital {
  public color = {
    primario: '',
    secundario: ''
  };

  constructor(
    public codigo: number,
    public nombre: string,
    public grupos: { [id: string]: GrupoDistrital},
  ) {
    this.setColor('');
  }

  randint (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randcolor (): string {
    return "#" +
      this.randint(16,255).toString(16) +
      this.randint(16,255).toString(16) +
      this.randint(16,255).toString(16);
  }

  setColor (color: string) {
    if (color.startsWith('#')) {
      this.color.primario = color + '4f';
      this.color.secundario = color;
    } else {
      this.setColor(this.randcolor());
    }
  }
}