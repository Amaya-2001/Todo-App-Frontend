import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tasks from './Tasks';
import ActivityFeed from './ActivityFeed';
import TasksPriorities from './TasksPriorities';

export const Board = () => {

    return (
        <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={6}>
                <Box>
                    <Tasks />
                </Box>
            </Grid>
            {/* Second Column */}
            <Grid item xs={6}>
                <Box>
                    <ActivityFeed />
                </Box>
                <Box>
                    <TasksPriorities />
                </Box>

            </Grid>
        </Grid>
    )

}



export default Board;