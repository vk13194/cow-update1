import React from 'react'
import {  Card } from 'react-bootstrap';
import './animal.css'
import { SRLWrapper } from "simple-react-lightbox";
import Moment from 'react-moment';
import 'moment-timezone';
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FiPhoneOutgoing } from 'react-icons/fi';


const AnimalDisplay = ({animalPost, location}) => {
    console.log('animalpost',animalPost)
    console.log('locationpost',location)
   var what =animalPost.postedBy.phonenumber
    const whatsApp =() =>{
  alert(what)
    }
    return (
       
        
        <div className="Container">
         <Card  className="card_detail shadow-lg  mb-5 bg-white rounded" >
         <Card.Header>{animalPost.milkPerDay} लीटर दूध 
  , {animalPost.pregnentTimes} ब्यात, ₹ {animalPost.price}  
  {' '}|{' '} <BiTime /> <Moment date={animalPost.date} fromNow/>|
  <GoLocation /> {location.county},{location.city}
  </Card.Header>
  <SRLWrapper>
<a href={animalPost.photo[0]} data-attribute="SRL">
<Card.Img variant="top" src={animalPost.photo[0]} width='150px' height="150px" />
</a>
</SRLWrapper>
<Card.Body>
<Card.Text>ये {animalPost.bride} {animalPost.animal}
 {animalPost.age} साल की है।यह {animalPost.whatTimePregnant} ब्यायी है 
 |इसके साथ में बच्चा {animalPost.whatChild} है|   पिछले बार के हिसाब से दूध कैपेसिटी 
 {animalPost.milkPerDay} लीटर है|अभी दूध केवल {animalPost.milkcapacity} लिटर देती  है| </Card.Text>
 <Card.Text className="d-flex justify-content-between">
 <h6>{animalPost.postedBy.name}</h6>  <h3> <FiPhoneOutgoing  onClick={whatsApp}/> </h3>  
 <h3> <IoLogoWhatsapp  onClick={whatsApp}/> </h3>
 
 </Card.Text>
 
</Card.Body>
             </Card>   
        </div>
       
    )
}

export default AnimalDisplay
