import React from 'react'
import {Stack} from "@mui/material"
import { Link } from 'react-router-dom'
import { logo } from '../utils/constant'
import SearchBar from './SearchBar'

const  Navbar=()=> (
  <Stack direction="row" alignItems="center" p={2} sx={{background:"#000", position:"sticky",top:"0",justifyContent:"space-between" }}>
 <Link to="/" style={{display:"flex",alignItems:"center"}}>
<img src={logo} alt="logo" height={45}/>
<p style={{marginLeft:"5px", fontSize:"20px",fontWeight:'bolder'}}> <span style={{color:"#FC1503"}}>Apna</span> <span style={{color:'#FFF'}}>Tube</span></p>
 </Link>
 <SearchBar/>
  </Stack>
  )

export default Navbar