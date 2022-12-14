import React from 'react'
import {Stack,Box} from "@mui/material"
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos,direction}) => {
if(!videos.length) return '....Loding'
 return(
   <Stack direction={direction||"row"} gap={2} justifyContent="start" flexWrap={"wrap"}>
{
   videos.map((item,idx)=>(
      <Box key={idx}>
{(item.id.videoId  && <VideoCard video={item}/>)}
{item.id.channelId&&<ChannelCard detail={item}/>}
      </Box>
   ))
}

   </Stack>
 )
}

export default Videos