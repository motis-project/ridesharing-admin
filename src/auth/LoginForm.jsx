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

import { useLogin, useNotify, useTranslate } from 'ra-core';
import { Field, Form } from 'react-final-form';
import { Button, CardActions, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Input } from './Input';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const classes = useStyles();
    const login = useLogin();
    const notify = useNotify();
    const translate = useTranslate();
    const navigate = useNavigate();

    const validate = (values) => {  
        const errors = { email: undefined, password: undefined };

        if (!values.email) {
            errors.email = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };

    const submit = async (values) => {
        try {
            await login(values);
            navigate('/');
        } catch (error) {
            notify(
                typeof error === 'string'
                    ? error
                    : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                'warning',
                {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                }
            );
        }
    };

    return (
        <Form
            onSubmit={submit}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className={classes.form}>
                        <div className={classes.input}>
                            <Field
                                autoFocus
                                id="email"
                                name="email"
                                type="email"
                                component={Input}
                                label={translate('ra-supabase.auth.email', {
                                    _: 'Email',
                                })}
                                disabled={submitting}
                            />
                        </div>
                        <div>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                component={Input}
                                label={translate('ra.auth.password')}
                                disabled={submitting}
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <CardActions>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={submitting}
                            className={classes.button}
                        >
                            {submitting && (
                                <CircularProgress
                                    className={classes.icon}
                                    size={18}
                                    thickness={2}
                                />
                            )}
                            {translate('ra.auth.sign_in')}
                        </Button>
                    </CardActions>
                </form>
            )}
        />
    );
};

const useStyles = makeStyles(
  theme => ({
      form: {
          padding: '0 1em 1em 1em',
      },
      input: {
          marginTop: '1em',
      },
      button: {
          width: '100%',
      },
      icon: {
          marginRight: theme.spacing(1),
      },
  }),
  {
      name: 'RaSupabaseLoginForm',
  }
);
