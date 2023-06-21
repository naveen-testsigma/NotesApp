import { deserialize, serializable,serialize } from "serializr";
export class Search{
  @serializable
  userId !: string;
  @serializable
  noteHeading !: string;
deserialize(input: any): this {
  return Object.assign(this, deserialize(Search, input));
}
}
