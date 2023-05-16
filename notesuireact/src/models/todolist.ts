import { serializable, custom, object, deserialize } from "serializr";
import {Authlogin} from "./authlogin";
export class Todolist{
  @serializable
  id !: string;
  @serializable
  userId !: string;
  @serializable
  todoData !: string;
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Authlogin, input));
  }
}
