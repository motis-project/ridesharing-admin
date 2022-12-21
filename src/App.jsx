import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource } from 'react-admin';
import { dataProvider } from './supabase/dataProvider';
import { authProvider } from './supabase/authProvider';
import { LoginPage } from './auth/LoginPage';
import './App.css';
import { Route } from 'react-router-dom';
import { SetPasswordPage } from './auth/SetPasswordPage';
import MyLayout from './MyLayout';
import { i18nProvider } from './supabase/i18nProvider';
import { ProfileList, ProfileEdit } from './resources/profiles';

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
    <Resource name="profiles" list={ProfileList} edit={ProfileEdit}/>
    <Resource name="drives" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="rides" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="profile_features" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="reviews" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="chats" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="messages" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
}

export default App;
