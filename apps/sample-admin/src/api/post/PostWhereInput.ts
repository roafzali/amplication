import { StringFilter } from "../../util/StringFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  author?: StringFilter;
  authors?: AuthorWhereUniqueInput;
  comments?: CommentWhereUniqueInput;
  content?: StringNullableFilter;
  cover?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
