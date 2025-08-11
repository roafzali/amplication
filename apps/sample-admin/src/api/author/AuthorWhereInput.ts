import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type AuthorWhereInput = {
  family?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  post?: PostListRelationFilter;
};
