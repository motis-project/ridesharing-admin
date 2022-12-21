import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    DateField,
    ReferenceInput,
    TextInput,
    DateInput,
    BooleanField,
    BooleanInput,
    NumberInput,
    Create,
    NumberField
} from "react-admin";
const rideFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const RideList = () => (
  <List filters={rideFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="drive_id" reference="drives" />
      <DateField source="start_time" />
      <TextField source="start" />
      <DateField source="end_time" />
      <TextField source="end" />
      <NumberField source="status" />
    </Datagrid>
  </List>
);

export const RideEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="created_at" disabled />
        <ReferenceInput source="drive_id" reference="drives" />
        <DateInput source="start_time" />
        <TextInput source="start" />
        <DateInput source="end_time" />
        <TextInput source="end" />
        <NumberInput source="status" />
        <NumberInput source="seats" min={1} max={10} />
      </SimpleForm>
    </Edit>
  );

export const RideCreate = () => (
  <Create>
    <SimpleForm>
    <ReferenceInput source="drive_id" reference="drives" />
        <DateInput source="start_time" />
        <TextInput source="start" />
        <DateInput source="end_time" />
        <TextInput source="end" />
        <BooleanInput source="cancelled" />
        <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Create>
)