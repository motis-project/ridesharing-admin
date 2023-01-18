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
    Create,
    DateTimeInput,
    Show,
    SimpleShowLayout
} from "react-admin";

const chatFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const ChatList = () => (
  <List filters={chatFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="drive_id" reference="drives" link="show" />
      <ReferenceField source="rider_id" reference="profiles" link="show" />
    </Datagrid>
  </List>
);

export const ChatShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="drive_id" reference="drives" link="show" />
      <ReferenceField source="rider_id" reference="profiles" link="show" />
    </SimpleShowLayout>
  </Show>
);

export const ChatEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="drive_id" reference="drives" />
      <ReferenceInput source="rider_id" reference="profiles" />
    </SimpleForm>
  </Edit>
);

export const ChatCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="drive_id" reference="drives" />
      <ReferenceInput source="rider_id" reference="profiles" />
    </SimpleForm>
  </Create>
);