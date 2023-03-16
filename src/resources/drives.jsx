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
    BooleanField,
    BooleanInput,
    NumberInput,
    Create,
    DateTimeInput,
    Show,
    SimpleShowLayout,
    SelectField,
    SelectInput
} from "react-admin";
import { PositionInput } from "./util/position";

const driveFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

const states = [
  { id: 0, name: 'preview' },
  { id: 1, name: 'plannedOrFinished' },
  { id: 2, name: 'cancelledByRider' },
  { id: 3, name: 'cancelledByRecurrenceRule' },
];

export const DriveList = () => (
  <List filters={driveFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="driver_id" reference="profiles" link="show" />
      <TextField source="start" />
      <DateField source="start_date_time" showTime />
      <TextField source="destination" />
      <DateField source="destination_date_time" showTime />
      <SelectField source="status" choices={states} />
      <BooleanField label="Soft delete" source="hide_in_list_view" />
    </Datagrid>
  </List>
);

export const DriveShow = () => (
  <Show title={'Drive'}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="driver_id" reference="profiles" link="show" />
      <TextField source="start" />
      <NumberField source="start_lat" />
      <NumberField source="start_lng" />
      <DateField source="start_date_time" showTime />
      <TextField source="destination" />
      <NumberField source="destination_lat" />
      <NumberField source="destination_lng" />
      <DateField source="destination_date_time" showTime />
      <SelectField source="status" choices={states} />
      <BooleanField label="Soft delete" source="hide_in_list_view" />
      <NumberField source="seats" />
    </SimpleShowLayout>
  </Show>
);

export const DriveEdit = () => (
  <Edit title={'Drive'}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="driver_id" reference="profiles" />
      <PositionInput source="start" />
      <PositionInput source="destination" />
      <SelectInput source="status" choices={states} />
      <BooleanInput label="Soft delete" source="hide_in_list_view" />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Edit>
);

export const DriveCreate = () => (
  <Create title={'Drive'}>
    <SimpleForm>
      <ReferenceInput source="driver_id" reference="profiles" />
      <PositionInput source="start" />
      <PositionInput source="destination" />
      <SelectInput source="status" choices={states} />
      <BooleanInput label="Soft delete" source="hide_in_list_view" />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Create>
);