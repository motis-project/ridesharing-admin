import { useTranslate } from 'ra-core';
import { Field, Form } from 'react-final-form';
import { useSetPassword } from './supabase/useSetPassword';
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
