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

import { useTranslate } from 'ra-core';
import { Field, Form } from 'react-final-form';
import { useSetPassword } from './useSetPassword';
import { Input } from './Input';
import { makeStyles } from '@mui/styles';
import { Button, CardActions, CircularProgress } from '@mui/material';

export const SetPasswordForm = (props) => {
    const classes = useStyles(props);
    const translate = useTranslate();
    const { onSuccess, onFailure } = props;
    const setPassword = useSetPassword({ onSuccess, onFailure });

    const validate = (values) => {
        const errors = { email: undefined, password: undefined };

        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        if (
            !values.confirm_password ||
            values.confirm_password !== values.password
        ) {
            errors.password = 'Passwords do not match';
        }
        return errors;
    };

    const submit = async (values) => {
        setPassword({
            password: values.password,
        });
    };

    return (
        <Form
            onSubmit={submit}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
                <>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={classes.form}>
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
                            <div>
                                <Field
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    component={Input}
                                    label={translate(
                                        'ra-supabase.auth.confirm_password',
                                        { _: 'Confirm password' }
                                    )}
                                    disabled={submitting}
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
                                {translate('ra-supabase.auth.confirm')}
                            </Button>
                        </CardActions>
                    </form>
                </>
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
        name: 'RaSupabaseSetPasswordForm',
    }
);
