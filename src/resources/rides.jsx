import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    DateField,
    NumberField,
    ReferenceInput,
    TextInput,
    DateTimeInput,
    NumberInput,
    Create,
    SelectField,
    SelectInput,
    Show,
    SimpleShowLayout
} from "react-admin";

const rideFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const states = [
  { id: 0, name: 'preview' },
  { id: 1, name: 'pending' },
  { id: 2, name: 'approved' },
  { id: 3, name: 'rejected' },
  { id: 4, name: 'cancelledByDriver' },
  { id: 5, name: 'cancelledByRider' },
  { id: 6, name: 'withdrawnByRider' },
];

export const RideList = () => (
  <List filters={rideFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="rider_id" reference="profiles" />
      <ReferenceField source="drive_id" reference="drives" />
      <DateField source="start_time" showTime />
      <TextField source="start" />
      <DateField source="end_time" showTime />
      <TextField source="end" />
      <SelectField source="status" choices={states} />
    </Datagrid>
  </List>
);
export const RideShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="rider_id" reference="profiles" />
      <ReferenceField source="drive_id" reference="drives" />
      <DateField source="start_time" showTime />
      <TextField source="start" />
      <DateField source="end_time" showTime />
      <TextField source="end" />
      <SelectField source="status" choices={states} />
      <NumberField source="seats" min={1} max={10} />
    </SimpleShowLayout>
  </Show>
);

export const RideEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="rider_id" reference="profiles" />
      <ReferenceInput source="drive_id" reference="drives" />
      <DateTimeInput source="start_time" />
      <TextInput source="start" />
      <DateTimeInput source="end_time" />
      <TextInput source="end" />
      <SelectInput source="status" choices={states} />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Edit>
);

export const RideCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="rider_id" reference="profiles" />
      <ReferenceInput source="drive_id" reference="drives" />
      <DateTimeInput source="start_time" />
      <TextInput source="start" />
      <DateTimeInput source="end_time" />
      <TextInput source="end" />
      <SelectInput source="status" choices={states} />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Create>
);