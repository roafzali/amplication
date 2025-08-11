import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  family: string | null;
  id: string;
  name: string | null;
  post?: Array<Post>;
  updatedAt: Date;
};
