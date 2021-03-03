import React,{useEffect, useState} from 'react'
import {
  BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Header from './components/Layout/Header'
import Home from './components/Home'
import Cow from './components/Cow'
import Buffalo from './components/Buffalo';
import './App.css'
import Post from './components/Post';
import Question from './components/question/Question';
import Phone from './components/Layout/Phone';
import Otp from './components/Layout/Otp';
import Address from './components/Layout/Address';
import Profile from './components/Layout/Profile';
import UserContext from './context/userContext'
import axios from 'axios'
const App = () => {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  useEffect(()=>{
 const fetchData = async ()=>{
   let token = localStorage.getItem('x-auth-token')
   console.log(token)
   const res = await axios.get('http://localhost:5000/api',{
    headers: { "x-auth-token": token },
   })
   setUserData({
     token,
     user:res.data
   })
   //console.log(res.data)
 }
 fetchData()
  },[])
  console.log(userData)
  return (
    <Router>
    <UserContext.Provider value={{ userData, setUserData }} >
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cow" component={Cow} exact/>
        <Route path="/buffalo" component={Buffalo} exact />
        <Route path="/post"  component={Post}  exact />
        <Route path="/question"  component={Question} exact />
        <Route path="/phone" component={Phone} exact />
        <Route path="/otp" component={Otp} exact />
        <Route path="/address" component={Address} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App
