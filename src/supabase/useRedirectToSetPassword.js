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
            if (event === 'SIGNED_IN') {
                const hasSetPassword = session.user.user_metadata.has_set_password;
                if (!hasSetPassword) {
                    navigate('/set-password');
                }
            }
        });
    }, [navigate]);
};