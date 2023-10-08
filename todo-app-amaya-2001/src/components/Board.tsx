import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tasks from './Tasks';
import ActivityFeed from './ActivityFeed';
import TasksPriorities from './TasksPriorities';
import { ITask } from '../../types/tasks';

export const Board = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);


    return (
        <Grid container spacing={2}>
            {/* First Column */}
            <Grid item sm={12} md={6}>
                <Box>
                    <Tasks setTasks={setTasks} tasks={tasks} />
                </Box>
            </Grid>
            {/* Second Column */}
            <Grid item xs={12} md={6}>
                <Box>
                    <ActivityFeed />
                </Box>
                <Box>
                    <TasksPriorities tasks={tasks} />
                </Box>

            </Grid>
        </Grid>
    )

}



export default Board;