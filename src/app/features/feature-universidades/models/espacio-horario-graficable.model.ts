export class EspacioHorarioGraficable {
  constructor(
    public id: {
      primario: string,
      secundario: string
    },
    public hora: number,
    public datos: string,
    public color: {
      primario: string,
      secundario: string
    },
  ) { }
}