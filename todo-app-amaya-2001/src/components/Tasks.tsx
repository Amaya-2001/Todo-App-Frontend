import React from 'react';
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


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export const Tasks = () => {
    const TasksCard = styled(Card)({
        width: "656px",
        height: "532px",
        marginTop: "54px",
        display: 'flex',
        marginLeft: '54px',
        alignItems: 'flext-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
    });

    return (
        <TasksCard>
            <Box sx={{ minWidth: 275, flexGrow: 1 }}>
                <Card sx={{ width: '656px', height: '532px' }} variant="outlined">
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
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
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
                        marginTop: '150px',
                        marginBottom: '16px',
                    }}>
                        <Stack spacing={2}>
                            <Pagination count={3} variant="outlined" shape="rounded" />
                        </Stack>
                    </Box>


                </Card>
            </Box>
        </TasksCard>

    )

}



export default Tasks;