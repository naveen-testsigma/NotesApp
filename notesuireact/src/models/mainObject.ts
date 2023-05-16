import { deserialize, serializable,serialize } from "serializr";
export class MainObject{
  @serializable
  public id !: number;
  @serializable
  public name !: string;
  deserialize(input: any): this {
    return Object.assign(this, deserialize(MainObject, input));
  }
}
