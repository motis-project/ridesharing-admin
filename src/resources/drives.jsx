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
    NumberInput
} from "react-admin";
const driveFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const DriveList = () => (
  <List filters={driveFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="driver_id" reference="profiles" />
      <DateField source="start_time" />
      <TextField source="start" />
      <DateField source="end_time" />
      <TextField source="end" />
      <BooleanField source="cancelled" />
    </Datagrid>
  </List>
);

export const DriveEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="created_at" disabled />
        <ReferenceInput source="driver_id" reference="profiles" />
        <DateInput source="start_time" />
        <TextInput source="start" />
        <DateInput source="end_time" />
        <TextInput source="end" />
        <BooleanInput source="cancelled" />
        <NumberInput source="seats" min={1} max={10} />
      </SimpleForm>
    </Edit>
  );