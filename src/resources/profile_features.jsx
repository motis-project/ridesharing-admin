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
    SelectField,
    SelectInput,
    Show,
    SimpleShowLayout
} from "react-admin";

const profileFeatureFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const features = [
  { id: 0, name: "noSmoking" },
  { id: 1, name: "smoking" },
  { id: 2, name: "noVaping" },
  { id: 3, name: "vaping" },
  { id: 4, name: "noPetsAllowed" },
  { id: 5, name: "petsAllowed" },
  { id: 6, name: "noChildrenAllowed" },
  { id: 7, name: "childrenAllowed" },
  { id: 8, name: "talkative" },
  { id: 9, name: "music" },
  { id: 10, name: "quiet" },
  { id: 11, name: "speedyDrivingStyle" },
  { id: 12, name: "relaxedDrivingStyle" },
  { id: 13, name: "accessible" },
  { id: 14, name: "requires3G" },
];

export const ProfileFeatureList = () => (
  <List filters={profileFeatureFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="profile_id" reference="profiles" />
      <SelectField source="feature" choices={features} />
    </Datagrid>
  </List>
);

export const ProfileFeatureShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="profile_id" reference="profiles" />
      <SelectField source="feature" choices={features} />
    </SimpleShowLayout>
  </Show>
);

export const ProfileFeatureEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="profile_id" reference="profiles" />
      <SelectInput source="feature" choices={features} />
    </SimpleForm>
  </Edit>
);

export const ProfileFeatureCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="profile_id" reference="profiles" />
      <SelectInput source="feature" choices={features} />
    </SimpleForm>
  </Create>
);
