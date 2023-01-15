export class Colaborador {
  constructor(
    public nombre: string,
    public descripcion: string,
    public diminutivo?: string,
    public rol?: string,
    public enlace?: string,
  ){ }
}