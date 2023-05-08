import { deserialize, serializable,serialize } from "serializr";
export class Notes{
  Notes(){

  }
  @serializable
  public id !: string;
  @serializable
  public userId !: number;
  @serializable
  public  noteHeading !: string;
  @serializable
  public noteBody !: string;
  public serialize():JSON{
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Notes, input));
  }
}
