import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dropdown from "../Assets/Assets/Chevron-down.svg"
import Card from '@mui/material/Card';
import profile from "../Assets/Assets/Profile.svg";
import Notifications from "../Assets/Assets/Notifications.svg";

const StyledNavbar = styled(Card)({
  width: "1250px",
  height: "80px",
  top: '0',
  display: 'flex',
  alignItems: 'flext-start',
  justifyContent: 'space-between',
});

export const Navigation = () => {


  return (
    //Navigationbar
    <StyledNavbar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Card variant="outlined" sx={{ width: "1250px", height: "80px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
    </StyledNavbar>

  );
}

export default Navigation;
