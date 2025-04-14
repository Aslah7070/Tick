import bgImage from "../assets/bgimage.jpg"

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate=useNavigate()

  return (
    <div 
    className="h-screen w-full opacity-90  bg-center flex items-center justify-center"
    style={{backgroundImage:`url(${bgImage})`}}
    >

  <div className="flex ">
  <Button onClick={()=>navigate("/game")} variant="outlined"sx={{color:"white",width:"24rem"}} >start match</Button>

  </div>
  

    </div>
  )
}

export default Home
