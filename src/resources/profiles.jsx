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
    useShowContext,
    useRefresh,
    ReferenceManyField,
    ReferenceField,
} from "react-admin";
import { supabase } from '../supabase/supabase';
import { features } from './profileFeatures';
import { reasons as report_reasons } from './reports';

const profileFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  
];
const BlockUserButton = () => {
  const { isLoading, record } = useShowContext();
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  if (isLoading) return null;
  const userIsBlocked = record['is_blocked'];
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);
  const handleConfirm = async () => {
  const {error} = await supabase.rpc(userIsBlocked === true ? 'unblock_user' : 'block_user', { userid: record['auth_id'] })
   if (error) console.log(error);
    refresh();
    setOpen(false);
  };

  return (
      <>
          <Button label= {userIsBlocked === true ? 'Unblock User' : 'Block User'} onClick={handleClick} />
          <Confirm
              isOpen={open}
              title={userIsBlocked === true ? 'Unblock User' : 'Block User'}
              content= {userIsBlocked === true ? 'Are you sure you want to unblock this user?' : 'Are you sure you want to block this user?'}
              onConfirm={handleConfirm}
              onClose={handleDialogClose}
          />
      </>
  );
};

const ProfileShowActions = () => (
  <TopToolbar>
      <EditButton />
      <BlockUserButton />
  </TopToolbar>
);

const gender = [
  { id: 0, name: "male" },
  { id: 1, name: "female" },
  { id: 2, name: "diverse" },
  { id: null, name: "not specified" },
];

export const ProfileList = () => (
  <List filters={profileFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <FunctionField label="blocked" render={record => record.is_blocked ? 'true' : 'false' } />
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
      <FunctionField label="Name" render={record => `${record.first_name} ${record.last_name}`} />;
      <SelectField source="gender" choices={gender} />
      <TextField source="description" />
      <ReferenceManyField label="Profile features" reference="profile_features" target="profile_id">
        <Datagrid bulkActionButtons={false} >
          <SelectField source="feature" choices={features} />
        </Datagrid>
      </ReferenceManyField>
      <FunctionField label="blocked" render={record => record.is_blocked ? 'true' : 'false' } />
      <ReferenceManyField label="Reports received" reference="reports" target="offender_id">
        <Datagrid rowClick="show">
          <TextField source="text" />
          <SelectField source="reason" choices={report_reasons} />
          <ReferenceField source="reporter_id" reference="profiles" link="show" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export const ProfileEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="auth_id" disabled />
      <DateTimeInput source="created_at" disabled />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
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
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <RadioButtonGroupInput source="gender" choices={gender} />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
