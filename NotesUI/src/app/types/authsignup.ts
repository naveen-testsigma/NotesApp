import { deserialize, serializable,serialize } from "serializr";
export class Authsignup{
  @serializable
  public  name !: string;
  @serializable
  @serializable
  public  emailId !: string;
  @serializable
  public  password !: string;
  public serialize():JSON{
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Authsignup, input));
  }
}
