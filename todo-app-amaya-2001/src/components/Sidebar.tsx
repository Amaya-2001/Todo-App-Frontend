import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Button, useMediaQuery } from '@mui/material';
import DashboardImg from "../Assets/Assets/Dashboard.svg"

//styled
const SideCard = styled(Card)(({ theme }) => ({
    display: 'flex-1',
    width: '100%',
    height: '1048px',
    alignItems: 'flex-start',
    backgroundColor: '#33074F',
    color: '#FFFFFF',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },

}));

const AcmySolutionsStyle = {
    backgroundColor: '#EBE6ED1A',
    padding: '16px',
    marginBottom: '16px',
};

const DashBtnStyle = {
    backgroundColor: '#EBE6ED1A',
    padding: '16px',
    marginBottom: '16px',
    width: '240px',
    height: '40px',
    marginTop: '20px',
    borderRadius: '24px',
    textTransform: 'capitalize',
    gap: '15px',
    color: '#FFFFFF'
};
const card = (
    <React.Fragment>
        <SideCard>
            <Box sx={AcmySolutionsStyle}>
                <Typography sx={{ fontSize: 24, fontWeight: "bold" }} color="#FFFFFF" gutterBottom>
                    Acmy Solutions
                </Typography>
            </Box>
            <Box>
                <Button sx={DashBtnStyle}>
                    <img src={DashboardImg} />Dashboard</Button>
            </Box>
        </SideCard>
    </React.Fragment>
);

export const Sidebar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default Sidebar;