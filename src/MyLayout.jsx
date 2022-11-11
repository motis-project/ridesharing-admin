import { ExitToApp } from '@mui/icons-material';
import { AppBar, Layout, Logout, UserMenu } from 'react-admin';
import { MyChangePasswordButton } from './MyChangePasswordButton';
import { useRedirectToSetPassword } from './supabase/useRedirectToSetPassword';

const MyLogoutButton = props => <Logout {...props} icon={<ExitToApp/>} />;

const MyUserMenu = () => <UserMenu>
        <MyChangePasswordButton/>
        <MyLogoutButton />
    </UserMenu>;

const MyAppBar = () => <AppBar userMenu={<MyUserMenu />} />;

const MyLayout = (props) => {
    useRedirectToSetPassword();
    
    return <Layout {...props} appBar={MyAppBar} />
};

export default MyLayout;