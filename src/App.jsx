import { Admin, CustomRoutes, Resource } from 'react-admin';
import { dataProvider } from './supabase/dataProvider';
import { authProvider } from './supabase/authProvider';
import { LoginPage } from './auth/LoginPage';
import './App.css';
import { Route } from 'react-router-dom';
import { SetPasswordPage } from './auth/SetPasswordPage';
import MyLayout from './MyLayout';
import { i18nProvider } from './supabase/i18nProvider';
import { ProfileList, ProfileEdit, ProfileCreate } from './resources/profiles';
import { DriveEdit, DriveList, DriveCreate } from './resources/drives';
import { Chair, Chat, DirectionsCar, Group, Message, Reviews } from '@mui/icons-material';
import { RideCreate, RideEdit, RideList } from './resources/rides';
import { ProfileFeatureCreate, ProfileFeatureEdit, ProfileFeatureList } from './resources/profile_features';
import { ReviewCreate, ReviewEdit, ReviewList } from './resources/reviews';
import { ChatCreate, ChatEdit, ChatList } from './resources/chats';
import { MessageCreate, MessageEdit, MessageList } from './resources/messages';

function App() {
  return <Admin
    layout={MyLayout}
    loginPage={LoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <CustomRoutes noLayout>
      <Route path="/set-password" element={<SetPasswordPage/>} />
    </CustomRoutes>
    <Resource name="profiles" list={ProfileList} edit={ProfileEdit} create={ProfileCreate} icon={Group} />
    <Resource name="drives" list={DriveList} edit={DriveEdit} create={DriveCreate} icon={DirectionsCar} />
    <Resource name="rides" list={RideList} edit={RideEdit} create={RideCreate} icon={Chair} />
    <Resource name="profile_features" list={ProfileFeatureList} edit={ProfileFeatureEdit} create={ProfileFeatureCreate} />
    <Resource name="reviews" list={ReviewList} edit={ReviewEdit} create={ReviewCreate} icon={Reviews} />
    <Resource name="chats" list={ChatList} edit={ChatEdit} create={ChatCreate} icon={Chat} />
    <Resource name="messages" list={MessageList} edit={MessageEdit} create={MessageCreate} icon={Message} />
  </Admin>
}

export default App;
