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

const notificationFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const NotificationList = () => (
  <List filters={notificationFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="receiver_id" reference="profiles" link="show" />
      <TextField source="title" />
      <TextField source="body" />
      <TextField source="deep_link" />
    </Datagrid>
  </List>
);

export const NotificationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="chat_id" reference="chats" link="show" />
      <ReferenceField source="receiver_id" reference="profiles" link="show" />
      <TextField source="title" />
      <TextField source="body" />
      <TextField source="deep_link" />
    </SimpleShowLayout>
  </Show>
);

export const NotificationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="receiver_id" reference="profiles" />
      <TextInput source="title" />
      <TextInput source="body" />
      <TextInput source="deep_link" />
    </SimpleForm>
  </Edit>
);

export const NotificationCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="receiver_id" reference="profiles" />
      <TextInput source="title" />
      <TextInput source="body" />
      <TextInput source="deep_link" />
    </SimpleForm>
  </Create>
);