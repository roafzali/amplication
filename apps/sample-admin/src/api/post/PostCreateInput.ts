import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author: string;
  authors?: AuthorWhereUniqueInput | null;
  comments?: CommentWhereUniqueInput | null;
  content?: string | null;
  cover: InputJsonValue;
  title?: string | null;
};
