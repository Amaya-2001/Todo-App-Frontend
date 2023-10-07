import React from 'react';
import Navigation from './Navigation';
import Welcome from './Welcome';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Board from './Board';

export const Dashboard = () => {
  const DashStyle = styled(Card)({
    display: 'flex',
    width: '100%',
  });

  const SidebarStyle = styled(Box)({
    flex: '0 0 auto', // Set Sidebar to not grow or shrink
    width: '272px', // Set Sidebar width
  });

  const ContentStyle = styled(Box)({
    flex: '1', // Allow content to grow
    padding: '16px', // Add some padding
    width: '1168px',
  });

  return (
    <DashStyle>
      <SidebarStyle>
        <Sidebar />
      </SidebarStyle>

      <ContentStyle>
        <Navigation />
        <Welcome />
        <Board />
      </ContentStyle>
    </DashStyle>
  );
}

export default Dashboard;
