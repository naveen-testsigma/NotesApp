import { deserialize, serializable,serialize } from "serializr";
export class Authlogin{
  @serializable
  public emailId !: string;
  @serializable
  public password !: string;
  public serialize():JSON{
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Authlogin, input));
  }

}
