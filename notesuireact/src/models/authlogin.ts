import { deserialize, serializable,serialize } from "serializr";
export class Authlogin{

  @serializable
  public username : string ="";
  @serializable
  public password : string ="";
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Authlogin, input));
  }

}