import { 
    List, 
    TextField, 
    EmailField,
    Datagrid,
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    RadioButtonGroupInput,
    Create
} from "react-admin";

const profileFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const gender = [
  { id: 1, name: "male" },
  { id: 2, name: "female" },
  { id: 3, name: "divers" },
];

export const ProfileList = () => (
  <List filters={profileFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const ProfileEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="auth_id" disabled />
      <DateTimeInput source="created_at" disabled />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <RadioButtonGroupInput source="gender" choices={gender} />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const ProfileCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="auth_id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <RadioButtonGroupInput source="gender" choices={gender} />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
