import { deserialize, serializable,serialize } from "serializr";
export class MainObject{
  @serializable
  public id !: number;
  @serializable
  public name !: string;
  public serialize():JSON{
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(MainObject, input));
  }
}
