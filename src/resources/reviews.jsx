import { 
    List, 
    ReferenceField,
    TextField, 
    Datagrid,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateField,
    DateTimeInput,
    Create,
    NumberField,
    NumberInput,
    Show,
    SimpleShowLayout
} from "react-admin";
import { TruncatedTextField } from "./util/truncatedTextField";

const reviewFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const ReviewList = () => (
  <List filters={reviewFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="writer_id" reference="profiles" link="show" />
      <ReferenceField source="receiver_id" reference="profiles" link="show" />
      <NumberField source="rating" min={1} max={5}/>
      <TruncatedTextField source="text" />
    </Datagrid>
  </List>
);

export const ReviewShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="writer_id" reference="profiles" link="show" />
      <ReferenceField source="receiver_id" reference="profiles" link="show" />
      <NumberField source="rating" min={1} max={5}/>
      <NumberField source="comfort_rating" min={1} max={5}/>
      <NumberField source="safety_rating" min={1} max={5}/>
      <NumberField source="reliability_rating" min={1} max={5}/>
      <NumberField source="hospitality_rating" min={1} max={5}/>
      <TextField source="text" />
    </SimpleShowLayout>
  </Show>
);



export const ReviewEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="writer_id" reference="profiles" />
      <ReferenceInput source="receiver_id" reference="profiles" />
      <NumberInput source="rating" min={1} max={5}/>
      <NumberInput source="comfort_rating" min={1} max={5}/>
      <NumberInput source="safety_rating" min={1} max={5}/>
      <NumberInput source="reliability_rating" min={1} max={5}/>
      <NumberInput source="hospitality_rating" min={1} max={5}/>
      <TextInput source="text" />
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
      <TextInput source="text" />
    </SimpleForm>
  </Create>
);
