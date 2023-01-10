import { 
    List, 
    TextField, 
    EmailField,
    DateField,
    Datagrid,
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    RadioButtonGroupInput,
    SelectField,
    Create,
    Show,
    SimpleShowLayout
} from "react-admin";

const profileFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const gender = [
  { id: 0, name: "male" },
  { id: 1, name: "female" },
  { id: 2, name: "divers" },
];

export const ProfileList = () => (
  <List filters={profileFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const ProfileShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id"  />
      <TextField source="auth_id"  />
      <DateField source="created_at" showTime />
      <TextField source="username" />
      <TextField source="email" />
      <TextField source="surname" />
      <TextField source="name" />
      <SelectField source="gender" choices={gender} />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
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
