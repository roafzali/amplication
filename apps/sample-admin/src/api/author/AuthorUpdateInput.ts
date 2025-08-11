import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  family?: string | null;
  name?: string | null;
  post?: PostUpdateManyWithoutAuthorsInput;
};
