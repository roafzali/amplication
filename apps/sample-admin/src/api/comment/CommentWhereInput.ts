import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  comment?: StringFilter;
  id?: StringFilter;
  pid?: PostWhereUniqueInput;
};
