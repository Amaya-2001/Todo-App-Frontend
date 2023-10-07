import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dropdown from "../Assets/Assets/Chevron-down.svg"
import Card from '@mui/material/Card';
import profile from "../Assets/Assets/Profile.svg";
import Notifications from "../Assets/Assets/Notifications.svg";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),

  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export const Navigation = () => {


  return (
    //Navigationbar
    <StyledToolbar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Card variant="outlined" sx={{ width: "1168px", height: "80px", marginLeft: "272px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '24px' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
            >
              <img src={Notifications} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
            >
              <img src={profile} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
            >
              <img src={Dropdown} />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </StyledToolbar>

  );
}

export default Navigation;
