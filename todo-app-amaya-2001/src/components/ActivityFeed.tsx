import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar2 from "../Assets/Assets/Avatar-2.svg"
import Avatar1 from "../Assets/Assets/Avatar-1.svg"


export const ActivityFeed = () => {
    const ActivityCard = styled(Card)({
        width: "440px",
        height: "363px",
        marginTop: "54px",
        display: 'flex',
        marginLeft: '120px',
        alignItems: 'flext-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
    });

    return (
        <ActivityCard>
            <Box sx={{ minWidth: 275 }}>
                <Card sx={{ width: "440px", height: "363px" }} variant="outlined"> <Typography sx={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>Activity Feed</Typography>
                    <Divider />

                    {/* Activity-1 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '10px', marginBottom: '20px' }}>
                        <img src={Avatar1} alt="avatar" style={{ marginRight: '10px' }} />
                        <div>
                            <Typography variant="caption" display="block" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                <span style={{ fontWeight: 'bold', color: '#000000', }}>Kushantha Charuka</span><span style={{ color: '#757575', marginRight: '4px', marginLeft: '4px' }}>created</span>
                                <span style={{ color: "#BC006D", }}>Contract #00124 need John Beige’s signature</span></Typography>
                            <Typography variant="caption" display="block" color="textSecondary" sx={{ textAlign: 'left' }}>Sep 16, 2022, at 11:30 AM</Typography>
                        </div>
                    </Box>

                    <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />

                    {/* Activity-2 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '10px', marginBottom: '20px' }}>
                        <img src={Avatar2} alt="avatar" style={{ marginRight: '10px' }} />
                        <div>
                            <Typography variant="caption" display="block" gutterBottom sx={{ textAlign: 'left' }}>
                                Lorem ipsum<span style={{ fontWeight: 'bold', marginLeft: '4px', marginRight: '4px' }}>dolor sit amet,</span>  consectetur adipiscing elit.<span style={{ fontWeight: 'bold', marginLeft: '4px', marginRight: '4px' }}>Maecenas</span>  pretium neque
                            </Typography>
                            <Typography variant="caption" display="block" color="textSecondary" sx={{ textAlign: 'left' }}>Sep 16, 2022, at 11:45 AM</Typography>
                        </div>
                    </Box>
                    <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />

                    {/* Activity-3 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '10px', marginBottom: '20px' }}>
                        <img src={Avatar2} alt="avatar" style={{ marginRight: '10px' }} />
                        <div>
                            <Typography variant="caption" display="block" gutterBottom sx={{ textAlign: 'left' }}>
                                Lorem ipsum<span style={{ fontWeight: 'bold', marginLeft: '4px', marginRight: '4px' }}>dolor sit amet,</span>  consectetur adipiscing elit.<span style={{ fontWeight: 'bold', marginLeft: '4px', marginRight: '4px' }}>Maecenas</span>  pretium neque
                            </Typography>
                            <Typography variant="caption" display="block" color="textSecondary" sx={{ textAlign: 'left' }}>Sep 16, 2022, at 11:45 AM</Typography>
                        </div>
                    </Box>
                </Card>
            </Box>

        </ActivityCard>
    )

}



export default ActivityFeed;