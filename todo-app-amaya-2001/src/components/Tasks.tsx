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
import { Button, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ITask } from '../../types/tasks';
import PriorityHigh from "../Assets/Assets/Priority-High.svg"
import PriorityMedium from "../Assets/Assets/Priority-Medium.svg"
import PriorityLow from '../Assets/Assets/Priority-Low.svg'

//styled component
const TasksCard = styled(Card)({
    width: "656px",
    height: "726px",
    marginTop: "24px",
    display: 'flex',
    marginLeft: '24px',
    marginRight: '24px',
    alignItems: 'flext-start',
    justifyContent: 'space-between',
});
const MarkAsDoneBtnStyle = {
    width: '100px',
    height: '15px',
    marginTop: '0',
    borderRadius: '15px',
    textTransform: 'capitalize',
    color: '#BC006D',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'


};

export const Tasks = ({ setTasks, tasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>>, tasks: ITask[] }) => {

    const [tablePage, settablePage] = useState(1);
    const tasksPerTablePage = 8;

    //get tasks from the backend
    React.useEffect(() => {
        fetch(`https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do`).then(response => response.json()).then(data => {
            setTasks(data);

        })
            .catch(error => {
                console.log('Error fetching tasks list:', error)
            })

    }, [])

    //handle the page 
    const handlePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        settablePage(newPage);
    };

    //handle Mark as done tasks
    const handleDoneTasks = (taskId: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: true } : task
        );
        setTasks(updatedTasks);
    }

    //logic - to display number of tasks per-page
    const startIndex = (tablePage - 1) * tasksPerTablePage;
    const endIndex = startIndex + tasksPerTablePage;
    const displayedTasks = tasks.slice(startIndex, endIndex);

    return (
        <TasksCard>
            <Box sx={{ minWidth: 275, flexGrow: 1 }}>
                <Card sx={{ width: '656px', height: '726px', display: 'flex', flexDirection: 'column' }} variant="outlined">
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <TableContainer sx={{ flex: 1, width: '656px', height: '726px' }}>
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
                                                {task.priority == "HIGH" && <img src={PriorityHigh} alt="PriorityHigh" />}
                                                {task.priority == "MEDIUM" && <img src={PriorityMedium} alt="PriorityMedium" />}
                                                {task.priority == "LOW" && <img src={PriorityLow} alt="LowForBlue" />}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: '10px', textAlign: 'left' }}>{task.todo}
                                                {task.completed ? (
                                                    ''
                                                ) : (
                                                    <Button sx={MarkAsDoneBtnStyle} onClick={() => handleDoneTasks(task.id)} >Mark as done</Button>
                                                )}
                                            </TableCell>
                                            <TableCell align="center">
                                                <div style={{
                                                    fontSize: '10px', color: task.completed ? '#219653' : '#F2C94C',
                                                    backgroundColor: task.completed ? '#E8F5E9' : '#F2C94C1A',
                                                    borderRadius: '16px',
                                                    paddingTop: task.completed ? '2px' : '0',
                                                }}>
                                                    {task.completed ? 'Done' : 'In-Progress'}
                                                </div>
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: '10px' }}>
                                                {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(task.createdAt))}
                                            </TableCell>
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
                        marginTop: '16px',
                        marginBottom: '16px',
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