import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Vector from "../Assets/Assets/Vector.svg";
import Close from "../Assets/Assets/Close.svg";

export const Welcome = () => {
    const StyledCard = styled(Card)({
        width: "1120px",
        height: "120px",
        marginTop: "54px",
        display: 'flex',
        marginLeft: '54px',
        alignItems: 'flext-start',
        justifyContent: 'space-between',
    });

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <StyledCard variant="outlined">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                    <Box sx={{ alignItems: 'center', marginLeft: '24px', marginTop: "5px" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Welcome Back, John Doe
                        </Typography>
                        <Typography variant="caption" display="block" color="#757575" gutterBottom>
                            The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            <Link href="#" color="#BC006D">
                                Look here for more information
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
                        <img src={Vector} alt="Vector" />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '5px', }}>
                            <IconButton size="large" aria-label="display more actions" edge="end"  >
                                <img src={Close} alt="Close" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </StyledCard>
        </Box>
    );
}

export default Welcome;
