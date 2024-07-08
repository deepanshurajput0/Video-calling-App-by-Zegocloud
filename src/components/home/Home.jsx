import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import HomeImage from "../../Images/home.jpg"
import "../home/Home.css"
const Home = () => {
    const [value,setValue] = useState();
    const navigate = useNavigate()
    const handleClick =()=>{
          navigate(`room/${value}`) 
    }
  return (
    <div className='main'>
        <div className='container'>
        <h1> Vid'X Cloud </h1>
        <img className='himage'  src={HomeImage} alt='home' />
        <input type='text' placeholder='Enter Room id'
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={handleClick} > Join Now </button>
        </div>
    </div>
  )
}

export default Home