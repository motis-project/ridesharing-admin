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
    SimpleShowLayout
} from "react-admin";
import { PositionInput } from "./util/position";

const driveFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const DriveList = () => (
  <List filters={driveFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="driver_id" reference="profiles" />
      <TextField source="start" />
      <DateField source="start_time" showTime />
      <TextField source="end" />
      <DateField source="end_time" showTime />
      <BooleanField source="cancelled" />
    </Datagrid>
  </List>
);

export const DriveShow = () => (
  <Show title={'Drive'}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="driver_id" reference="profiles" />
      <TextField source="start" />
      <NumberField source="start_lat" />
      <NumberField source="start_lng" />
      <DateField source="start_time" showTime />
      <TextField source="end" />
      <NumberField source="end_lat" />
      <NumberField source="end_lng" />
      <DateField source="end_time" showTime />
      <BooleanField source="cancelled" />
      <NumberField source="seats" min={1} max={10} />
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
      <PositionInput source="end" />
      <BooleanInput source="cancelled" />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Edit>
);

export const DriveCreate = () => (
  <Create title={'Drive'}>
    <SimpleForm>
      <ReferenceInput source="driver_id" reference="profiles" />
      <PositionInput source="start" />
      <PositionInput source="end" />
      <BooleanInput source="cancelled" />
      <NumberInput source="seats" min={1} max={10} />
    </SimpleForm>
  </Create>
);