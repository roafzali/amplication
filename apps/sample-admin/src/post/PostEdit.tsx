import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";
import { CommentTitle } from "../comment/CommentTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="authors.id" reference="Author" label="authors">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="comments.id"
          reference="Comment"
          label="comments"
        >
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <TextInput label="content" source="content" />
        <div />
        <TextInput label="title" multiline source="title" />
      </SimpleForm>
    </Edit>
  );
};
