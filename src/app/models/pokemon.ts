export class Pokemon {
  pokeId: number;
  name: string;
  height: number;
  weight: number;
  exp: number;
  img: string;
  description: string;
  types: any[];

  constructor(
    pokeId?: number,
    name?: string,
    height?: number,
    weight?: number,
    exp?: number,
    img?: string,
    description?: string,
    types?: any[]
  ) {
    this.pokeId = pokeId;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.exp = exp;
    this.img = img;
    this.description = description;
    this.types = types;
  }
}
