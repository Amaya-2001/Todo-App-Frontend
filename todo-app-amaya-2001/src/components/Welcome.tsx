import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Vector from "../Assets/Assets/Vector.svg";
import Close from "../Assets/Assets/Close.svg";

const StyledCard = styled(Card)({
    width: "1145px",
    height: "150px",
    marginTop: "24px",
    padding: "25px",
    display: 'flex',
    marginLeft: '24px',
    marginRight: '24px',
    alignItems: 'flext-start',
    justifyContent: 'space-between',
    position: 'relative'
});
const CloseBtnContainer = styled('div')({
    position: 'absolute',
    top: '5px',
    right: '5px',
});

export const Welcome = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <StyledCard variant="outlined">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', height: '100%' }}>
                    <Box sx={{ alignItems: 'center', marginLeft: '2px', marginTop: "5px" }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }} gutterBottom >
                            Welcome Back, John Doe
                        </Typography>
                        <Typography variant="caption" display="block" color="#757575" sx={{ textAlign: 'left' }} gutterBottom >
                            The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ textAlign: 'left' }} gutterBottom>
                            <Link href="#" color="#BC006D">
                                Look here for more information
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
                        <Box sx={{ marginLeft: '5px', marginBottom: '5px' }}>
                            <img src={Vector} style={{ width: '100%', height: '150px' }} alt="Vector" />
                        </Box>
                        <CloseBtnContainer>
                            <IconButton><img src={Close} alt="Close" /></IconButton>
                        </CloseBtnContainer>
                    </Box>
                </Box>
            </StyledCard>
        </Box>
    );
}

export default Welcome;
