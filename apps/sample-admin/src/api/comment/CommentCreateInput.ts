import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  comment: string;
  pid?: PostWhereUniqueInput | null;
};
