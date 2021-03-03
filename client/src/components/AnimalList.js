import React, {useState, useEffect,useContext} from 'react'
import axios from 'axios'
import Animal from './Animal'
import UserContext from '../context/userContext'

const AnimalList =  () => {
    // eslint-disable-next-line
    const { userData, setUserData } = useContext(UserContext);
    const [animals, setAnimals]= useState([])
    var token =userData.token
 console.log('list', token)
    useEffect(()=>{
        const fetchData = async () =>{
            const config = {
                headers: {
                    "x-auth-token": token
                }
            };
          const res= await axios.get('http://localhost:5000/api/data',config)
   console.log('res',res.data)
   setAnimals(res.data)
        }
        fetchData()
    },[token])
    console.log(animals)
    return (
        <div>
          {animals.map((item)=>
        
           <Animal  animal={item} key={item._id} />
        )} 
        </div>
    )
}

export default AnimalList
