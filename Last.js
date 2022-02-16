import React from 'react';
import './Last.css';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import team3 from './img/team3.jpg';
import team5 from './img/team5.jpg';
import team6 from './img/team6.jpg';
import team7 from './img/team7.jpg';
function Last() {
  return (
      <>
          <div className='bg11' style={{backgroundRepeat:"no-repeat",position:"absolute",overflow:"hidden", backgroundSize:"100%"}}>
          <div>
            <div><Typography variant="h3" style={{display:"flex",justifyContent:"center",color:"white",fontSize:"300%",color:"white",marginTop:"10%"}}>Meet our team</Typography>
            </div>
            <div><Typography variant="h3" style={{display:"flex",justifyContent:"center",color:"white",fontSize:"95%",color:"white",marginTop:"1.5%"}}>PLUGINS YOUR THEMES WITH EVEN MORE FEATURES</Typography>
            </div>
            <Stack direction="row" spacing={20} style={{marginLeft:"10%",marginTop:"5%"}}>
                <Avatar alt="Remy Sharp" src={team7} style={{height:"13%",width:"13%"}}/>
                <Avatar alt="Travis Howard" src={team3} style={{height:"13%",width:"13%"}} />
                <Avatar alt="Cindy Baker" src={team5} style={{height:"13%",width:"13%"}}/>
                <Avatar alt="Cindy Baker" src={team6} style={{height:"13%",width:"13%"}}/>
            </Stack>
            <Stack direction="row" spacing={32} style={{marginLeft:"14%",marginTop:"1%"}}>
                <Typography style={{fontWeight:"700"}}> Belinda </Typography>
                <Typography style={{fontWeight:"700"}}> Christian</Typography>
                <Typography style={{fontWeight:"700"}}> Robert</Typography>
                <Typography style={{fontWeight:"700"}}> Tony Teo</Typography>
            </Stack>
            <Stack direction="row" spacing={25} style={{marginLeft:"13%",marginTop:".5%",color:"grey",size:"20%"}}>
            <Typography style={{fontSize:"80%"}} >JS DEVELOPER</Typography>
            <Typography style={{fontSize:"80%"}}> CREATIVE DIRECTOR</Typography>
            <Typography style={{fontSize:"80%"}}> OFFICE MANAGER</Typography>
            <Typography style={{fontSize:"80%"}}> SUPPORT MANAGER</Typography>
            </Stack>
             <div className="joinour" style={{fontSize:"120%",fontWeight:"600",marginLeft:"42%",marginTop:"9%"}}><center> <div style={{marginTop:"6%"}}>+ Join our teams</div></center></div>
            </div>
          </div>
      </>
  )
}

export default Last;
