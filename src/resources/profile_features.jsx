import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateTimeInput,
    Create,
    SelectField,
    SelectInput
} from "react-admin";

const profileFeatureFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const features = [
  { id: 1, name: "noSmoking" },
  { id: 2, name: "smoking" },
  { id: 3, name: "noVaping" },
  { id: 4, name: "vaping" },
  { id: 5, name: "noPetsAllowed" },
  { id: 6, name: "petsAllowed" },
  { id: 7, name: "noChildrenAllowed" },
  { id: 8, name: "childrenAllowed" },
  { id: 9, name: "talkative" },
  { id: 10, name: "music" },
  { id: 11, name: "quiet" },
  { id: 12, name: "luxury" },
  { id: 13, name: "speedyDrivingStyle" },
  { id: 14, name: "relaxedDrivingStyle" },
  { id: 15, name: "requires3G" },
];

export const ProfileFeatureList = () => (
  <List filters={profileFeatureFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="profile_id" reference="profiles" />
      <SelectField source="feature" choices={features} />
    </Datagrid>
  </List>
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
