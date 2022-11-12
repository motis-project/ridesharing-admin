import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { supabase } from './supabase';

/**
 * This hook redirects the user to the set password path on login if they don't have a password set.
 *
 **/
export const useRedirectToSetPassword = () => {
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('onAuthStateChange', event, session);
            const firstLogin = event === 'SIGNED_IN' && !session.user.user_metadata.has_set_password;
            const passwordRecovery = event === 'PASSWORD_RECOVERY';

            if(firstLogin || passwordRecovery) {
                navigate('/set-password');
            }
        });
    }, [navigate]);
};