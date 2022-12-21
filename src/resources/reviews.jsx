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
const reviewFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const ReviewList = () => (
  <List filters={reviewFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="writer_id" reference="profiles" />
      <ReferenceField source="receiver_id" reference="profiles" />
      <NumberField source="rating" min={1} max={5}/>
    </Datagrid>
  </List>
);

export const ReviewEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="created_at" disabled />
        <ReferenceInput source="writer_id" reference="profiles" />
        <ReferenceInput source="receiver_id" reference="profiles" />
        <NumberInput source="rating" min={1} max={5}/>
        <NumberInput source="comfort_rating" min={1} max={5}/>
        <NumberInput source="safety_rating" min={1} max={5}/>
        <NumberInput source="reliability_rating" min={1} max={5}/>
        <NumberInput source="hospitality_rating" min={1} max={5}/>
      </SimpleForm>
    </Edit>
  );

export const ReviewCreate = () => (
  <Create>
    <SimpleForm>
    <ReferenceInput source="writer_id" reference="profiles" />
        <ReferenceInput source="receiver_id" reference="profiles" />
        <NumberInput source="rating" min={1} max={5}/>
        <NumberInput source="comfort_rating" min={1} max={5}/>
        <NumberInput source="safety_rating" min={1} max={5}/>
        <NumberInput source="reliability_rating" min={1} max={5}/>
        <NumberInput source="hospitality_rating" min={1} max={5}/>
    </SimpleForm>
  </Create>
)
