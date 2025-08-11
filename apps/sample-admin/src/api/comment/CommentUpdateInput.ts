import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  comment?: string;
  pid?: PostWhereUniqueInput | null;
};
