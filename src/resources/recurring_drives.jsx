import { 
    List, 
    ReferenceField,
    TextField, 
    NumberField,
    Datagrid,
    Edit,
    SimpleForm,
    DateField,
    ReferenceInput,
    TextInput,
    NumberInput,
    Create,
    DateTimeInput,
    Show,
    SimpleShowLayout,
    ReferenceManyField
} from "react-admin";
import { DriveDataGrid } from "./drives";

const recurringDriveFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const RecurringDriveList = () => (
  <List filters={recurringDriveFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="driver_id" reference="profiles" link="show" />
      <TextField source="start" />
      <TextField source="start_time" />
      <TextField source="destination" />
      <TextField source="destination_time" />
      <TextField source="recurrence_rule" />
      <DateField source="stopped_at" showTime />
    </Datagrid>
  </List>
);

export const RecurringDriveShow = () => (
  <Show title={'Recurring Drive'}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="driver_id" reference="profiles" link="show" />
      <TextField source="start" />
      <NumberField source="start_lat" />
      <NumberField source="start_lng" />
      <TextField source="start_time" showTime />
      <TextField source="destination" />
      <NumberField source="destination_lat" />
      <NumberField source="destination_lng" />
      <TextField source="destination_time" showTime />
      <NumberField source="seats" />
      <ReferenceManyField label="Drives" reference="drives" target="recurring_drive_id" >
        <DriveDataGrid empty="No drives"/>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export const RecurringDriveEdit = () => (
  <Edit title={'Recurring Drive'}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="driver_id" reference="profiles" />
      <TextInput source='start' />
      <NumberInput source='start_lat' step={0.01} />
      <NumberInput source='start_lng' step={0.01} />
      <TextInput source='start_time' />
      <TextInput source='destination' />
      <NumberInput source='destination_lat' step={0.01} />
      <NumberInput source='destination_lng' step={0.01} />
      <TextInput source='destination_time' />
      <TextInput source="recurrence_rule" multiline={true} />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Edit>
);

export const RecurringDriveCreate = () => (
  <Create title={'Drive'}>
    <SimpleForm>
      <ReferenceInput source="driver_id" reference="profiles" />
      <TextInput source='start' />
      <NumberInput source='start_lat' step={0.01} />
      <NumberInput source='start_lng' step={0.01} />
      <TextInput source='start_time' />
      <TextInput source='destination' />
      <NumberInput source='destination_lat' step={0.01} />
      <NumberInput source='destination_lng' step={0.01} />
      <TextInput source='destination_time' />
      <TextInput source="recurrence_rule" multiline={true} />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Create>
);