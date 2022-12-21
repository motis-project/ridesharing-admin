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
    Create,
    NumberField,
    NumberInput
} from "react-admin";
const profileFeatureFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const ProfileFeatureList = () => (
  <List filters={profileFeatureFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="profile_id" reference="profiles" />
      <NumberField source="feature" />
    </Datagrid>
  </List>
);

export const ProfileFeatureEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="created_at" disabled />
        <ReferenceInput source="profile_id" reference="profiles" />
        <NumberInput source="feature" />
      </SimpleForm>
    </Edit>
  );

export const ProfileFeatureCreate = () => (
  <Create>
    <SimpleForm>
    <ReferenceInput source="profile_id" reference="profiles" />
    <NumberInput source="feature" />
    </SimpleForm>
  </Create>
)
