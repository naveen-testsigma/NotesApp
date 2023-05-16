import { deserialize, serializable,serialize } from "serializr";
export class Notes{

  @serializable
  public id !: string;
  @serializable
  public userId !: number;
  @serializable
  public  noteHeading !: string;
  @serializable
  public noteBody !: string;
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Notes, input));
  }
}

export default Notes;