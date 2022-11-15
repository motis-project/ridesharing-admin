import { Password } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import classNames from "classnames";
import { useCallback } from "react";
import { useAuthState, useTranslate } from "react-admin";
import { useNavigate } from "react-router-dom";

export const MyChangePasswordButton = (props) => {
  const { className, ...rest } = props;

  const { authenticated } = useAuthState();
  const isXSmall = useMediaQuery((theme) =>
    theme.breakpoints.down('sm')
  );
  const translate = useTranslate();
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/set-password'), [navigate]);

  if (!authenticated) return null;

  return (
    <MenuItem
        className={classNames('password', className)}
        onClick={handleClick}
        // @ts-ignore
        component={isXSmall ? 'span' : 'li'}
        {...rest}
    >
        <ListItemIcon className={'RaPassword-icon'}>
            <Password />
        </ListItemIcon>
        <ListItemText>{translate('ra.auth.password')}</ListItemText>
  </MenuItem>
  );
}