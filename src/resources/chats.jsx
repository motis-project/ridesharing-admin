import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create,
    DateTimeInput
} from "react-admin";

const chatFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const ChatList = () => (
  <List filters={chatFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="driver_id" reference="profiles" />
      <ReferenceField source="rider_id" reference="profiles" />
    </Datagrid>
  </List>
);

export const ChatEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="driver_id" reference="profiles" />
      <ReferenceInput source="rider_id" reference="profiles" />
    </SimpleForm>
  </Edit>
);

export const ChatCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="driver_id" reference="profiles" />
      <ReferenceInput source="rider_id" reference="profiles" />
    </SimpleForm>
  </Create>
);