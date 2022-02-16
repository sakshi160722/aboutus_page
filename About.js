import React from 'react';
import { Button, Typography } from '@mui/material';
import { Paper,Card } from '@mui/material';
import './Aboutt.css';
import image1 from './img/story-bg-about-us.png';
function About() {
  return (
      <>
      <div className='bg' style={{backgroundRepeat:"no-repeat",position:"absolute",overflow:"hidden", backgroundSize:"100%"}}>
      <div>
      <div><Typography variant="h3" style={{display:"flex",justifyContent:"center",color:"white",fontSize:"300%",color:"white",marginTop:"6%"}}>About Us</Typography>
      </div>
      <div style={{display:"flex"}}>
      <Paper elevation="7" style={{height:"51vh",width:"30%",backgroundColor:"white",marginLeft:"2.5%",marginTop:"7%"}}>
      <div className="paperr" style={{color:"white",fontSize:"250%",fontWeight:"600"}}><center>O1</center></div>
      <div style={{marginTop:"28%",marginLeft:"8%"}}>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}> Best Industry </Typography>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}>Leaders</Typography>
      <Typography  style={{color:"grey",fontSize:"90%",marginTop:"2%"}}>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magne aliqua anim ad minim veniam.
      </Typography>
      <Button style={{color:"grey",fontSize:"95%",fontWeight:"600",marginTop:"2%"}} >VIEW MORE</Button>
      </div>
      </Paper>
      <Paper elevation="7" style={{height:"51vh",width:"30%",backgroundColor:"white",marginLeft:"2%",marginTop:"7%"}}>
      <div className="paperr" style={{background:"#f7c211",color:"white",fontSize:"250%",fontWeight:"600"}}><center>O2</center></div>
      <div style={{marginTop:"28%",marginLeft:"8%"}}>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}> Learn Course </Typography>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}>Online</Typography>
      <Typography  style={{color:"grey",fontSize:"90%",marginTop:"2%"}}>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magne aliqua anim ad minim veniam.
      </Typography>
      <Button style={{color:"grey",fontSize:"95%",fontWeight:"600",marginTop:"2%"}} >VIEW MORE</Button>
      </div>
      </Paper>
      <Paper elevation="7" style={{ height:"51vh",width:"30%",backgroundColor:"white",marginLeft:"2%",marginTop:"7%"}}>
      <div className="paperr" style={{background:"#54524b",color:"white",fontSize:"250%",fontWeight:"600"}}><center>O3</center></div>
      <div style={{marginTop:"28%",marginLeft:"8%"}}>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}>Book Library &</Typography>
      <Typography  style={{fontSize:"150%",fontWeight:"700"}}>Store</Typography>
      <Typography  style={{color:"grey",fontSize:"90%",marginTop:"2%"}}>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magne aliqua anim ad minim veniam.
      </Typography>
      <Button style={{color:"grey",fontSize:"95%",fontWeight:"600",marginTop:"2%"}} >VIEW MORE</Button>
      </div>
      </Paper>
      </div>
      </div>
      {/* KRISHIKA */}
      <div><Typography variant="h3" style={{display:"flex",justifyContent:"center",fontSize:"300%",marginTop:"6%"}}><b>Our Story</b></Typography>
      </div>
      <Typography  style={{textAlign:"Center", top:"6px", color:"grey",fontSize:"90%",marginTop:"2%"}}>
        IT IS A LONG ESTABLISHED FACT THAT A READE.
      </Typography>
      <div style={{marginTop:'50px'}}>
      <div className="row">
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'><img src={image1} ></img></div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
        <div class="card" style={{borderRadius:'15px',width:'250px',height:'270px'}}>
  <div class="card-body">
    <h1 class="text-center" style={{color:'lightblue',marginTop:'70px'}}>55262</h1>
    <p class="text-center" style={{color:'#CECECE',marginBottom:'50px'}}>Foreign Followers</p>
  </div>
</div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
        <div class="card" style={{borderRadius:'15px',width:'250px',marginTop:'50px',marginLeft:'-80px',height:'270px'}}>
  <div class="card-body">
    <h1 class="text-center" style={{color:'#92A3E6',marginTop:'70px'}}>364</h1>
    <p class="text-center" style={{color:'#CECECE',marginBottom:'50px'}}>Certified Teachers</p>
  </div>
</div>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
        <div class="card" style={{borderRadius:'15px',width:'250px',marginTop:'-30px',height:'270px'}}>
  <div class="card-body">
    <h1 class="text-center" style={{color:'orange',marginTop:'70px'}}>2240</h1>
    <p class="text-center" style={{color:'#CECECE',marginBottom:'50px'}}>Student Enroll</p>
  </div>
</div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
        <div class="card" style={{borderRadius:'15px',width:'250px',marginTop:'20px',marginLeft:'-80px',height:'270px'}}>
  <div class="card-body">
    <h1 class="text-center" style={{color:'lightgreen',marginTop:'70px'}}>275</h1>
    <p class="text-center" style={{color:'#CECECE',marginBottom:'50px'}}>Complete Courses</p>
  </div>
</div>
        </div>
        </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
      <div style={{height:'150px',borderRight:'4px solid #95CCF5'}}></div>
      </div>
      <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
        <div className='card' style={{width:'32rem',border:'None',marginLeft:'-30px',color:'#6F6F6F'}}>
        <div class="card-body">
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magne aliqua. Quis ipsum suspendisse ultrices gravida
  </div>
        </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-3 col-3'></div>
      </div>
      </div>
      </div>
      </>
   
  );
}



export default About;