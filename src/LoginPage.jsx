import { AuthLayout } from './AuthLayout';
import { LoginForm } from './LoginForm';
import { useRedirectIfAuthenticated } from './supabase/useRedirectIfAuthenticated';

export const LoginPage = () => {
    useRedirectIfAuthenticated();

    return <AuthLayout>
        <LoginForm />
    </AuthLayout>;
};
