import {
  createElement,
  useRef,
  useMemo,
} from 'react';
import classnames from 'classnames';
import { defaultTheme, Notification } from 'ra-ui-materialui';
import { Avatar, Card, createTheme, ThemeProvider } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

/**
* A standalone login page, to serve as authentication gate to the admin
*
* Expects the user to enter a login and a password, which will be checked
* by the `authProvider.login()` method. Redirects to the root page (/)
* upon success, otherwise displays an authentication error message.
*
* Copy and adapt this component to implement your own login logic
* (e.g. to authenticate via email or facebook or anything else).
*
* @example
*     import MyLoginPage from './MyLoginPage';
*     const App = () => (
*         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
*             ...
*        </Admin>
*     );
*/
export const AuthLayout = props => {
  const {
      theme,
      title,
      classes: classesOverride,
      className,
      children,
      notification,
      staticContext,
      ...rest
  } = props;
  const containerRef = useRef(null);
  const classes = useStyles(props);
  const muiTheme = useMemo(() => createTheme(theme), [theme]);

  return (
      <ThemeProvider theme={muiTheme}>
          <div
              className={classnames(classes.main, className)}
              {...rest}
              ref={containerRef}
          >
              <Card className={classes.card}>
                  <div className={classes.avatar}>
                      <Avatar className={classes.icon}>
                          <Lock />
                      </Avatar>
                  </div>
                  {children}
              </Card>
              {notification ? createElement(notification) : null}
          </div>
      </ThemeProvider>
  );
};

AuthLayout.defaultProps = {
  theme: defaultTheme,
  notification: Notification,
};
const useStyles = makeStyles(theme => ({
  main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '1px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage:
          'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
  },
  card: {
      minWidth: 300,
      marginTop: '6em',
  },
  avatar: {
      margin: '1em',
      display: 'flex',
      justifyContent: 'center',
  },
  icon: {
      backgroundColor: theme.palette.grey[500],
  },
}));
