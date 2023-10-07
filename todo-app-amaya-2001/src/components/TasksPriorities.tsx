import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar2 from "../Assets/Assets/Avatar-2.svg"

export const TasksPriorities = () => {
    const TasksPrioritiesStyled = styled(Card)({
        width: "440px",
        height: "253px",
        marginTop: "10px",
        display: 'flex',
        marginLeft: '120px',
        alignItems: 'flext-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
    });

    return (
        <TasksPrioritiesStyled>
            <Box sx={{ minWidth: 275 }}>
                <Card sx={{ width: "440px", height: "2533px" }} variant="outlined"> <Typography sx={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>Tasks Priorities</Typography>
                    <Divider />
                </Card>
            </Box>
        </TasksPrioritiesStyled>
    )

}



export default TasksPriorities;