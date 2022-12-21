import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource } from 'react-admin';
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
import { Person } from '@mui/icons-material';
import { RideCreate, RideList } from './resources/rides';
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
    <Resource name="profiles" list={ProfileList} edit={ProfileEdit} create={ProfileCreate} icon={Person} />
    <Resource name="drives" list={DriveList} edit={DriveEdit} create={DriveCreate} />
    <Resource name="rides" list={RideList} edit={RideCreate} create={RideCreate} />
    <Resource name="profile_features" list={ProfileFeatureList} edit={ProfileFeatureEdit} create={ProfileFeatureCreate} />
    <Resource name="reviews" list={ReviewList} edit={ReviewEdit} create={ReviewCreate} />
    <Resource name="chats" list={ChatList} edit={ChatEdit} create={ChatCreate} />
    <Resource name="messages" list={MessageList} edit={MessageEdit} create={MessageCreate} />
  </Admin>
}

export default App;
