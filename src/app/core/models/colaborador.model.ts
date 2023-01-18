export class Colaborador {
  constructor(
    public nombre: string,
    public descripcion: string,
    public diminutivo?: string,
    public rol?: string,
    public enlace?: string,
  ){ }
}

export class Proyecto {
  constructor(
    public nombre: string,
    public descripcion: string,
    public desarrolladores: string[],
    public estado: string,
    public rol?: string,
    public enlace?: string,
  ){ }
}