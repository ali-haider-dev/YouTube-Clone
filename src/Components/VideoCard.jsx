import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, Avatar } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  
  return (
    <Card
      sx={{
        width:{xs:'100%',sm:'358px',md:'320px'} ,
    
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width:{ xs:"100%",sm:"358px",md:"320px"}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            color={"#FFF"}
            fontWeight="bold"
            fontSize={"12px"}
          >
            {snippet?.title.slice(0, 80) || demoVideoTitle.slice(0, 80)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography
            variant="subtitle2"
            color={"#FFF"}
            fontWeight="bold"
            fontSize={"11px"}
            marginTop="5px"
            mx={'3px'}
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
          >
             {/* <Avatar alt="Remy Sharp" src={details?.snippet?.thumbnails?.high?.url} sx={{display:'flex' ,marginRight:'6px'}} /> */}
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
