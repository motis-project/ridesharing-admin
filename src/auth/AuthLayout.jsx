// The MIT License (MIT)

// Copyright (c) 2016-present, Francois Zaninotto, Marmelab

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
