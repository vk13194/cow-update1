import React, {useContext,useState,useEffect} from 'react'
import UserContext from '../../context/userContext'
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {CgProfile } from "react-icons/cg";
import axios from 'axios'
const Profile = () => {
// eslint-disable-next-line
const { userData, setUserData } = useContext(UserContext);
const[userProfile,setUserProfile]=useState([])
var token =userData.token
useEffect(()=>{
    const fetchData = async () =>{
        const config = {
            headers: {
                "x-auth-token": token
            }
        };
 const res= await axios.get('http://localhost:5000/api',config)
//console.log('profile',res.data)
setUserProfile(res.data)
    }
    fetchData()
},[token])
console.log('userProfile',userProfile)
    return (
        <div className="text-center mt-4">
        
        <h2 className="font-weight-bold " style={{fontSize:"150px"}}><CgProfile /></h2> 
        <h4><BsFillPersonFill/>Your Name: {userProfile.name}</h4>
        <h5> <AiFillPhone /> PhoneNumber : {userProfile.phonenumber}</h5>
        <p>{userProfile.store?(<><GoLocation /> {userProfile.store[0].location.county},
            {userProfile.store[0].location.city}, {userProfile.store[0].location.state},
            {userProfile.store[0].location.country}
        </>):''}</p>
        </div>
    )
}

export default Profile
