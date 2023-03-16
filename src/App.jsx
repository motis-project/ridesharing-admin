import { Admin, CustomRoutes, Resource } from 'react-admin';
import { dataProvider } from './supabase/dataProvider';
import { authProvider } from './supabase/authProvider';
import { LoginPage } from './auth/LoginPage';
import './App.css';
import { Route } from 'react-router-dom';
import { SetPasswordPage } from './auth/SetPasswordPage';
import MyLayout from './MyLayout';
import { i18nProvider } from './supabase/i18nProvider';
import { ProfileList, ProfileEdit, ProfileCreate, ProfileShow } from './resources/profiles';
import { DriveEdit, DriveList, DriveCreate, DriveShow } from './resources/drives';
import { Chair, DirectionsCar, Group, Message, Reviews, Rule, Flag, Forum, Token, Notifications, Repeat } from '@mui/icons-material';
import { RideCreate, RideEdit, RideList, RideShow } from './resources/rides';
import { ProfileFeatureCreate, ProfileFeatureEdit, ProfileFeatureList, ProfileFeatureShow } from './resources/profileFeatures';
import { ReviewCreate, ReviewEdit, ReviewList, ReviewShow } from './resources/reviews';
import { MessageCreate, MessageEdit, MessageList, MessageShow } from './resources/messages';
import { ReportCreate, ReportEdit, ReportList, ReportShow } from './resources/reports';
import { ChatList, ChatShow } from './resources/chats';
import { NotificationCreate, NotificationEdit, NotificationList, NotificationShow } from './resources/notifications';
import { PushTokenCreate, PushTokenEdit, PushTokenList, PushTokenShow } from './resources/pushTokens';
import { RecurringDriveCreate, RecurringDriveEdit, RecurringDriveList, RecurringDriveShow } from './resources/recurring_drives';


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
    <Resource name="profiles" list={ProfileList} show={ProfileShow} edit={ProfileEdit} create={ProfileCreate} icon={Group} recordRepresentation={(record) => `${record.email}`} />
    <Resource name="drives" list={DriveList} show={DriveShow} edit={DriveEdit} create={DriveCreate} icon={DirectionsCar} />
    <Resource name="recurring_drives" list={RecurringDriveList} show={RecurringDriveShow} edit={RecurringDriveEdit} create={RecurringDriveCreate} icon={Repeat} />
    <Resource name="rides" list={RideList} show={RideShow} edit={RideEdit} create={RideCreate} icon={Chair} />
    <Resource name="profile_features" show={ProfileFeatureShow} list={ProfileFeatureList} edit={ProfileFeatureEdit} create={ProfileFeatureCreate} icon={Rule} />
    <Resource name="reviews" list={ReviewList} show={ReviewShow} edit={ReviewEdit} create={ReviewCreate} icon={Reviews} />
    <Resource name="reports" list={ReportList} show={ReportShow} edit={ReportEdit} create={ReportCreate} icon={Flag} />
    <Resource name="chats" list={ChatList} show={ChatShow} icon={Forum} />
    <Resource name="messages" list={MessageList} show={MessageShow} edit={MessageEdit} create={MessageCreate} icon={Message} />
    <Resource name="notifications" list={NotificationList} show={NotificationShow} edit={NotificationEdit} create={NotificationCreate} icon={Notifications} />
    <Resource name="push_tokens" list={PushTokenList} show={PushTokenShow} edit={PushTokenEdit} create={PushTokenCreate} icon={Token} />
    
  </Admin>
}

export default App;
