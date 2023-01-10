import { 
    List, 
    ReferenceField,
    TextField, 
    DateField,
    Datagrid,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateTimeInput,
    Create,
    Show,
    SimpleShowLayout
} from "react-admin";

const messageFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const MessageList = () => (
  <List filters={messageFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="chat_id" reference="chats" />
      <ReferenceField source="user_id" reference="profiles" />
      <TextField source="content" />
    </Datagrid>
  </List>
);

export const MessageShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="chat_id" reference="chats" />
      <ReferenceField source="user_id" reference="profiles" />
      <TextField source="content" />
    </SimpleShowLayout>
  </Show>
);

export const MessageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="chat_id" reference="chats" />
      <ReferenceInput source="user_id" reference="profiles" />
      <TextInput source="content" />
    </SimpleForm>
  </Edit>
);

export const MessageCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="chat_id" reference="chats" />
      <ReferenceInput source="user_id" reference="profiles" />
      <TextInput source="content" />
    </SimpleForm>
  </Create>
);