import { 
    List, 
    TextField, 
    DateField,
    Datagrid,
    TextInput,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    ReferenceField,
    ReferenceOneField
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
      <ReferenceOneField label="Ride" reference="rides" target="chat_id" link="show">
          <TextField source="id" />
      </ReferenceOneField>
      <ReferenceManyField label="Messages" reference="messages" target="chat_id">
        <Datagrid rowClick="show">
          <TextField source="content" />
          <ReferenceField source="sender_id" reference="profiles" link="show" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

// Since the chat is created automatically, we don't need to the possibility to create or edit a chat.