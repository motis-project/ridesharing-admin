import { useState } from 'react';
import { 
    List, 
    TextField, 
    EmailField,
    DateField,
    Datagrid,
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    RadioButtonGroupInput,
    SelectField,
    FunctionField,
    Create,
    Show,
    SimpleShowLayout,
    Button,
    TopToolbar,
    EditButton,
    Confirm,
    useShowContext
} from "react-admin";
import { supabase } from '../supabase/supabase';

const profileFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  
];
const CustomUpdatePostsButton = () => {
  const {record } = useShowContext();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);
  const handleConfirm = async () => {
    const {data} = await supabase.rpc('get_my_claims');
    console.log(data)
    await supabase.rpc('block_user', { auth_id: record['auth_id'] })
    setOpen(false);
  };

  return (
      <>
          <Button label="Block User" onClick={handleClick} />
          <Confirm
              isOpen={open}
              title="Block User"
              content="Are you sure you want to block this User?"
              onConfirm={handleConfirm}
              onClose={handleDialogClose}
          />
      </>
  );
};

const ProfileShowActions = () => (
  <TopToolbar>
      <EditButton />
      <CustomUpdatePostsButton />
  </TopToolbar>
);

const gender = [
  { id: 0, name: "male" },
  { id: 1, name: "female" },
  { id: 2, name: "divers" },
  { id: null, name: "not specified" },
];

export const ProfileList = () => (
  <List filters={profileFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const ProfileShow = () => (
  <Show actions={<ProfileShowActions />}>
    <SimpleShowLayout>
      <TextField source="id"  />
      <TextField source="auth_id"  />
      <DateField source="created_at" showTime />
      <TextField source="username" />
      <TextField source="email" />
      <FunctionField label="Name" render={record => `${record.surname} ${record.name}`} />;
      <SelectField source="gender" choices={gender} />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const ProfileEdit = () => (
  <Edit>
    <Button> </Button>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="auth_id" disabled />
      <DateTimeInput source="created_at" disabled />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <RadioButtonGroupInput source="gender" choices={gender} />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const ProfileCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="auth_id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="surname" />
      <TextInput source="name" />
      <RadioButtonGroupInput source="gender" choices={gender} />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
