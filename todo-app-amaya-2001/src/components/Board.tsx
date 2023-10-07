import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tasks from './Tasks';
import ActivityFeed from './ActivityFeed';
import TasksPriorities from './TasksPriorities';
import { ITask } from '../../types/tasks';

export const Board = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    console.log('tasks :', tasks);

    return (
        <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={6}>
                <Box>
                    <Tasks setTasks={setTasks} tasks={tasks} />
                </Box>
            </Grid>
            {/* Second Column */}
            <Grid item xs={6}>
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