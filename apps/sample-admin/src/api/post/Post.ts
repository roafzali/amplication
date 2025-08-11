import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";

export type Post = {
  author: string;
  authors?: Author | null;
  comments?: Comment | null;
  content: string | null;
  cover: JsonValue;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
