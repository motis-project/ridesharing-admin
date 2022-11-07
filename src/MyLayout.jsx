import { ExitToApp } from '@mui/icons-material';
import { AppBar, Layout, Logout, UserMenu } from 'react-admin';
import { MyChangePasswordButton } from './MyChangePasswordButton';

const MyLogoutButton = props => <Logout {...props} icon={<ExitToApp/>} />;

const MyUserMenu = () => <UserMenu>
        <MyChangePasswordButton/>
        <MyLogoutButton />
    </UserMenu>;

const MyAppBar = () => <AppBar userMenu={<MyUserMenu />} />;

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;