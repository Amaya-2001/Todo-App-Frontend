import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ITask } from '../../types/tasks';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
    tasks: ITask[];
}
const TasksPrioritiesStyled = styled(Card)({
    width: "440px",
    height: "353px",
    marginTop: "10px",
    display: 'flex',
    marginLeft: '120px',
    alignItems: 'flext-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
});

export const TasksPriorities: React.FC<ChartProps> = ({ tasks }) => {
    console.log('tasks :', tasks);
    const count = tasks.reduce((acc, task) => {
        acc[task.priority] = (acc[task.priority] || 0) + 1;
        return acc;
    }, {} as Record<string, number>)
    //data for the chart

    const data = {
        labels: Object.keys(count),
        datasets: [
            {
                label: 'My test data',
                data: Object.values(count),
                backgroundColor: ['#FFA07A', '#87CEFA', '#FFD700'], // Colors for LOW, MEDIUM, HIGH
            },
        ],
    };

    return (
        <TasksPrioritiesStyled>
            <Box sx={{ minWidth: 275 }}>
                <Card sx={{ width: "440px", height: "2533px" }} variant="outlined">
                    <Typography sx={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        Tasks Priorities
                    </Typography>
                    <Divider />
                    {/* donut chart for Task Priorities*/}

                    <div style={{ marginLeft: '30px' }}>
                        <div style={{ alignContent: 'center', width: '300px', height: '300px', paddingLeft: '80px', paddingBottom: '604px' }}>
                            <Doughnut data={data} options={{ plugins: { legend: { position: 'right' } } }} height={900} width={800} />
                        </div>
                    </div>

                </Card>
            </Box>
        </TasksPrioritiesStyled >
    )

}



export default TasksPriorities;