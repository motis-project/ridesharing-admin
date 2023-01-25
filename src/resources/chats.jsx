import { 
    List, 
    TextField, 
    DateField,
    Datagrid,
    TextInput,
    Show,
    SimpleShowLayout
} from "react-admin";

const chatFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const ChatList = () => (
  <List filters={chatFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
);

export const ChatShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="created_at" showTime />
    </SimpleShowLayout>
  </Show>
);

//since the chat is created automatically, we don't need to the possibility to create or edit a chat.