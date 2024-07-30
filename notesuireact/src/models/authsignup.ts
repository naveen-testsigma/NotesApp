import { deserialize, serializable,serialize } from "serializr";
export class Authsignup{
  @serializable
  public  name !: string;
  @serializable
  public  emailId !: string;
  @serializable
  public  password !: string;
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Authsignup, input));
  }
}
