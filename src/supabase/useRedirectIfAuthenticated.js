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

import { useCheckAuth } from 'ra-core';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

/**
 * This hook redirect the user to the provided path (/ by default) if they are authenticated.
 *
 * @example
 * import { useRedirectIfAuthenticated } from 'react-admin';
 * const MyLoginPage = () => {
 *     useRedirectIfAuthenticated();
 *     // UI and logic for authentication
 * }
 **/
export const useRedirectIfAuthenticated = () => {
    const navigate = useNavigate();
    const checkAuth = useCheckAuth();

    useEffect(() => {
        checkAuth()
            .then(() => {
                // already authenticated, redirect to the home page
                navigate('/');
            })
            .catch(() => {
                // not authenticated, stay on the login page
            });
    }, [checkAuth, navigate]);
};