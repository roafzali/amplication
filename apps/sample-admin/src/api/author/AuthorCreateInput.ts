import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  family?: string | null;
  name?: string | null;
  post?: PostCreateNestedManyWithoutAuthorsInput;
};
