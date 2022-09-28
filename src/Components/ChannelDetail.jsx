import React,{useState,useEffect} from 'react'
import  {Box} from "@mui/material"
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'


function ChannelDetail() {
const {id} = useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const[videos,setVideos]=useState([])
  console.log('channelDetail>>>>>>',videos,id);
  useEffect(() => {
   fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
   fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  }, [id])
  
  return (
   <Box minHeight={'95vh'}>
    <Box/>
    <Box>
      <div style={{background:'linear-gradient(90deg,rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%',zIndex:10,height:'300px'}}/>
    <ChannelCard detail={channelDetail} marginTop="-110px"/>
    </Box>
    <Box display={'flex'} p='2px'>
      <Box sx={{mr:{sm:'100px'},ml:{md:'50px'}}}/>
      <Videos videos={videos}/>
      
    </Box>
   </Box>
  )
}

export default ChannelDetail