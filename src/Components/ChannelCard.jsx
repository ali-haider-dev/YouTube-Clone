import React from 'react'
import { Typography,Box, CardMedia, CardContent } from "@mui/material";
import { demoProfilePicture } from '../utils/constant';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({detail,marginTop}) => {
    console.log("channelCard",detail)
  return (
   <Box
   sx={{boxShadow:'none',borderRadius:'20px', display:'flex',justifyContent:'center',alignItems:'center',width:{sx:"356px",md:"350px"},height:'326px',margin:"auto",marginTop}}
   >
    <Link to={`/channel/${detail?.id?.channelId}`}>
    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
<CardMedia 
image={detail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
alt={detail?.snippet?.title}
sx={{borderRadius:"50%" ,height:'180px',width:"180px" ,mb:2,border:"1px solid #e3e3e3"}}
/>
<Typography variant="h6">
    {detail?.snippet?.title}
<CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
</Typography>
{detail?.statistics?.subscriberCount&&(
    <Typography>
        {parseInt(detail?.statistics?.subscriberCount).toLocaleString()} Subscribers
    </Typography>
)}
    </CardContent>
    </Link>
   </Box>
  )
}

export default ChannelCard