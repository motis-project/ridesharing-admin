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

const pushTokenFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const PushTokenList = () => (
  <List filters={pushTokenFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="user_id" reference="profiles" link="show" />
      <TextField source="token" />
      <BooleanField source="disabled" />
    </Datagrid>
  </List>
);

export const PushTokenShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="user_id" reference="profiles" link="show" />
      <TextField source="token" />
      <BooleanField source="disabled" />
    </SimpleShowLayout>
  </Show>
);

export const PushTokenEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="user_id" reference="profiles" />
      <TextInput source="token" />
      <BooleanInput source="disabled" />
    </SimpleForm>
  </Edit>
);

export const PushTokenCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="user_id" reference="profiles" />
      <TextInput source="token" />
      <BooleanInput source="disabled" />
    </SimpleForm>
  </Create>
);