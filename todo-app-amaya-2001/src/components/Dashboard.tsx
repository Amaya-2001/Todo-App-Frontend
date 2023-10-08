import React from 'react';
import Navigation from './Navigation';
import Welcome from './Welcome';
import Sidebar from './Sidebar';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Board from './Board';
import { useState } from 'react';

//styled
const DashStyle = styled(Card)({
  display: 'flex',
  width: '100%',
});

const SidebarStyle = styled(Box)({
  flex: '0 0 auto',
  width: '272px',
});

const ContentStyle = styled(Box)({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  padding: '2px',
});

export const Dashboard = () => {
  let isSideBarOpen = true;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  isSmallScreen ? isSideBarOpen = false : isSideBarOpen = true;

  return (
    <DashStyle>
      {isSideBarOpen ?
        <SidebarStyle>
          <Sidebar />
        </SidebarStyle>
        : ''
      }
      <ContentStyle>
        <Navigation />
        <Welcome />
        <Board />
      </ContentStyle>
    </DashStyle>
  );
}

export default Dashboard;
