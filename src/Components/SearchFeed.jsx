import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import SideBar from "./SideBar";
const SearchFeed = () => {

const { searchTerm } = useParams()
const [selectedCategory, setSelectedCategory] = useState(searchTerm)

const [videos,setVideos]=useState([])
  useEffect(() => {
   fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  
  }, [searchTerm])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "2px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
     <SideBar  
     selectedCategory = {selectedCategory}
     setSelectedCategory = {setSelectedCategory}
     />
      <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
        Copyright 2022 Ali haider
      </Typography>
    </Box>
   <Box p={2} sx={{overflowY:'auto', height:'90vh',flex:1,ml:18}}>
      <Typography variant="h4" fontWeight={'bold'} mb={2} sx={{color:'white'}}>
    Search results for: <span style={{color:'#fc1503'}}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos}/>
     </Box>
     </Stack>
  );
};

export default SearchFeed;
