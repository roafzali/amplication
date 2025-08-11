import { Post } from "../post/Post";

export type Comment = {
  comment: string;
  createdAt: Date;
  id: string;
  pid?: Post | null;
  updatedAt: Date;
};
