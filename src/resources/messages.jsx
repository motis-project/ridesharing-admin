import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateInput,
    Create
} from "react-admin";
const messageFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const MessageList = () => (
  <List filters={messageFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="chat_id" reference="chats" />
      <ReferenceField source="user_id" reference="profiles" />
      <TextField source="content" />
    </Datagrid>
  </List>
);

export const MessageEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="created_at" disabled />
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
)