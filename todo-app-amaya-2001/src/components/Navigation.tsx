import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dropdown from "../Assets/Assets/Chevron-down.svg"
import Card from '@mui/material/Card';
import profile from "../Assets/Assets/Profile.svg";
import Notifications from "../Assets/Assets/Notifications.svg";
import { ThemeProvider, useMediaQuery } from '@mui/material';

const StyledNavbar = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "80px",
  top: '0',
  display: 'flex',
  alignItems: 'flext-start',
  justifyContent: 'space-between',
  padding: 0,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));



export const Navigation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    //Navigationbar
    <ThemeProvider theme={theme}>
      <StyledNavbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <Card variant="outlined" sx={{
            width: '100%', height: "80px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isSmallScreen ? 'column' : 'row',
          }}>
            <Box sx={{ justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '24px', }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: isSmallScreen ? 0 : 1, display: { sm: 'block' } }}
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
      </StyledNavbar >
    </ThemeProvider >

  );
}

export default Navigation;
