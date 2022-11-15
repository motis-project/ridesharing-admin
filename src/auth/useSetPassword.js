import {
  useAuthProvider,
  useNotify,
  useRedirect,
} from 'ra-core';

export const useSetPassword = (options) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const authProvider = useAuthProvider();

  const {
    onSuccess = () => redirect('/'),
    onFailure = error => notify(error.message, 'error'),
  } = options || {};

  return (params) => {
    authProvider
      .setPassword(params)
      .then(() => {
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch(error => {
        if (onFailure) {
          onFailure(error);
        }
      });
  };
};