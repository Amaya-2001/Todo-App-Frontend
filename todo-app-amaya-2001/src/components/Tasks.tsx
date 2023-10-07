import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ITask } from '../../types/tasks';

//styled component
const TasksCard = styled(Card)({
    width: "656px",
    height: "632px",
    marginTop: "54px",
    display: 'flex',
    marginLeft: '54px',
    alignItems: 'flext-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
});

export const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [tablePage, settablePage] = useState(1);
    const tasksPerTablePage = 8;

    //get tasks from the backend
    React.useEffect(() => {
        fetch(`https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do`).then(response => response.json()).then(data => {
            setTasks(data);
            console.log('Received the updated tasks:', data);
        })
            .catch(error => {
                console.log('Error fetching tasks list:', error)
            })

    }, [])

    //handle the page 
    const handlePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        settablePage(newPage);
    };

    //logic - to display number of tasks per-page
    const startIndex = (tablePage - 1) * tasksPerTablePage;
    const endIndex = startIndex + tasksPerTablePage;
    const displayedTasks = tasks.slice(startIndex, endIndex);

    return (
        <TasksCard>
            <Box sx={{ minWidth: 275, flexGrow: 1 }}>
                <Card sx={{ width: '100%', height: '100%' }} variant="outlined">
                    <Box>
                        <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><Typography sx={{ fontWeight: 'bold' }}>Tasks</Typography> </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedTasks.map((task) => (
                                        <TableRow
                                            key={task.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '10px', }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontSize: '10px' }}>

                                                {task.priority}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: '10px' }}>{task.todo}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: '10px' }}>{task.completed ? 'Done' : 'In-Progress'}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: '10px' }}>{new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(task.createdAt))}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/* pagination */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <Stack spacing={2}>
                            <Pagination count={3} page={tablePage} onChange={handlePage} variant="outlined" shape="rounded" />

                        </Stack>
                    </Box>
                </Card>
            </Box>
        </TasksCard>

    )

}

export default Tasks;