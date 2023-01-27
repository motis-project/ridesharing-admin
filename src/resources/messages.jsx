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
    SimpleShowLayout,
    BooleanField,
    BooleanInput,
} from "react-admin";

const messageFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const MessageList = () => (
  <List filters={messageFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="chat_id" reference="chats" link="show" />
      <ReferenceField source="sender_id" reference="profiles" link="show" />
      <TextField source="content" />
    </Datagrid>
  </List>
);

export const MessageShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="chat_id" reference="chats" link="show" />
      <ReferenceField source="sender_id" reference="profiles" link="show" />
      <TextField source="content" />
      <BooleanField source="read" />
    </SimpleShowLayout>
  </Show>
);

export const MessageEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="chat_id" reference="chats" />
      <ReferenceInput source="sender_id" reference="profiles" />
      <TextInput source="content" />
      <BooleanInput source="read" />
    </SimpleForm>
  </Edit>
);

export const MessageCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="chat_id" reference="chats" />
      <ReferenceInput source="sender_id" reference="profiles" />
      <TextInput source="content" />
      <BooleanInput source="read" />
    </SimpleForm>
  </Create>
);