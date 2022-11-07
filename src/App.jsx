import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource } from 'react-admin';
import { dataProvider } from './supabase/dataProvider';
import { authProvider } from './supabase/authProvider';
import { LoginPage } from './LoginPage';
import './App.css';
import { Route } from 'react-router-dom';
import { SetPasswordPage } from './SetPasswordPage';
import MyLayout from './MyLayout';
import { i18nProvider } from './supabase/i18nProvider';

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
    <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
}

export default App;
