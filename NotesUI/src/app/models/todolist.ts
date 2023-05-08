import { deserialize, serializable,serialize } from "serializr";
export class Todolist{
  @serializable
  id !: string;
  @serializable
  userId !: string;
  @serializable
  todoData !: string;
  public serialize():JSON{
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(Todolist, input));
  }
}
