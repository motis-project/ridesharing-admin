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
    Create,
    DateTimeInput,
    SelectField,
    SelectInput,
    Show,
    SimpleShowLayout
} from "react-admin";

const categorys = [
    { id: 0, name: "didNotShowUp" },
    { id: 1, name: "didNotPay" },
    { id: 2, name: "didNotFollowRules" },
    { id: 3, name: "wasAggressive" },
    { id: 4, name: "usedBadLanguage" },
    { id: 5, name: "other" },
  ];

const reportFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const ReportList = () => (
  <List filters={reportFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="offender_id" reference="profiles" link="show" />
      <ReferenceField source="reporter_id" reference="profiles" link="show" />
      <SelectField source="category" choices={categorys} />
      <TextField source="text" />
    </Datagrid>
  </List>
);

export const ReportShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
      <ReferenceField source="offender_id" reference="profiles" link="show" />
      <ReferenceField source="reporter_id" reference="profiles" link="show" />
      <SelectField source="category" choices={categorys} />
      <TextField source="text" />
    </SimpleShowLayout>
  </Show>
);

export const ReportEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="created_at" disabled />
      <ReferenceInput source="offender_id" reference="profiles" />
      <ReferenceInput source="reporter_id" reference="profiles" />
      <SelectInput source="category" choices={categorys} />
      <TextInput source="text" />
    </SimpleForm>
  </Edit>
);

export const ReportCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="offender_id" reference="profiles" />
      <ReferenceInput source="reporter_id" reference="profiles" />
      <SelectInput source="category" choices={categorys} />
      <TextInput source="text" />
    </SimpleForm>
  </Create>
);