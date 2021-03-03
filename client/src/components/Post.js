import React,{useState, useContext} from 'react'
import {Container, Card} from 'react-bootstrap'
import UserContext from '../context/userContext'
import axios from 'axios'
import Phone from './Layout/Phone'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Post = () => {
   // eslint-disable-next-line
   const { userData, setUserData } = useContext(UserContext);

    const [post, setPost] = useState({
        animal:'',
        bride:'',
        age:'',
        pregnentTimes:'',
        milkPerDay:'',
        milkcapacity:'',
        price:'',
        whatTimePregnant:'',
        isPregnent:'',
        whatChild:'',
        addInfo:'',
        photo:'',
        
    })
  const [myimage, setMyimage] = useState()
  const notify = () => toast.success("your post is submit");
  // eslint-disable-next-line
  const {
   animal,bride,age,pregnentTimes,milkPerDay,milkcapacity,price,whatTimePregnant,
       isPregnent,whatChild,addInfo}=post
const onChange=(e)=>{
setPost({...post,[e.target.name]:e.target.value})
}
const onChange1=(e)=>{
   setMyimage(e.target.files[0])
   }
const onSubmit=(e) =>{
   e.preventDefault();
   const formData = new FormData();
      formData.append('animal',animal);
      formData.append('bride',bride);
      formData.append('age',age);
      formData.append('pregnentTimes',pregnentTimes);
      formData.append('milkPerDay',milkPerDay);
      formData.append('milkcapacity',milkcapacity);
      formData.append('price',price);
      formData.append('whatTimePregnant',whatTimePregnant);
      formData.append('isPregnent',isPregnent);
      formData.append('whatChild',whatChild);
      formData.append('addInfo',addInfo);
      formData.append('photo',myimage);
var token =userData.token
      const config = {
          headers: {
              'content-type': 'multipart/form-data',
              "x-auth-token": token
          }
      };
      axios.post('http://localhost:5000/api/createpost1',formData,config)
      .then((res)=>{
         alert("The file is successfully uploaded");
      })
     
}
console.log('form', post) 
    return (
       <div>
          {userData.token ? (<><Container className="shadow-lg p-3 mb-5 bg-white rounded ">
           <Card style={{marginTop:"20px"}} className="shadow-lg p-3 bg-white rounded ">
           <Card.Header as="h5">Shell Animal </Card.Header>
           <Card.Text>
            <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="form-group">
            <label htmlFor="animal">पशु का नाम दर्ज करें </label>
         <select class="form-control" name='animal' value={animal} onChange={onChange} >
       <option value=" गाय">🐄 गाय</option>
       <option value="भैंस">🐃 भैंस</option>
     <option value="बैल">🐄 बैल</option>
     <option value="भैंसा">🐃 भैंसा</option>
     <option value="अन्य पशु">🐐 अन्य पशु</option>
     </select>
     </div>
           {/* <div className="form-group">
          <label for="animal">Enter Animal Name </label>
         <input type="text" className="form-control" id="animal"
         placeholder="Enter animal name" 
         name='animal' value={animal} onChange={onChange}
         />
    </div>*/}
      <div className="form-group">
            <label htmlFor="animal">पशु नस्ल दर्ज करें  </label>
         <select class="form-control" name='bride' value={bride} onChange={onChange} >
       <option value="नहीं जानता">नहीं जानता</option>
       <option value="गिर">गिर(Gir)</option>
     </select>
     </div>
       {/* <div className="form-group">
         <label for="bride">पशु नस्ल दर्ज करें </label>
      <input type="text" className="form-control" id="bride"
       placeholder="Enter animal bride"
       name='bride' value={bride} onChange={onChange}
        />
  </div> */}

        <div className="form-group">
         <label htmlFor="animal">पशु आयु दर्ज करें</label>
         <select class="form-control" name='age' value={age} onChange={onChange} >
       <option value=" 1">1</option>
       <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
       <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="10">12</option>
     </select>
     </div>
        {/*<div className="form-group">
         <label for="age">Enter Animal age </label>
      <input type="text" className="form-control" id="age"
       placeholder="Enter animal Age"
       name='age' value={age} onChange={onChange}
        />
   </div>*/ }

<div className="form-group">
         <label htmlFor="animal">कितनी बार गर्भवती हुई </label>
         <select class="form-control"  name='pregnentTimes' value={pregnentTimes} onChange={onChange}>
         <option value="शून्य">शून्य(0)</option>
       <option value="पहला">पहला(1)</option>
       <option value="दूसरा">दूसरा(2)</option>
     <option value="तीसरा">तीसरा(3)</option>
     <option value="चौथा">चौथा(4)</option>
     <option value="पांचवां">पांचवां(5)</option>
     <option value="छठा">छठा(6)</option>
       <option value="सातवां">सातवां(7)</option>
     
     </select>
     </div>

       {/* <div className="form-group">
         <label htmlFor="pregnentTimes">Enter Animal pregnentTimes </label>
      <input type="text" className="form-control" id="pregnentTimes"
       placeholder="Enter animal pregnentTimes"
       name='pregnentTimes' value={pregnentTimes} onChange={onChange}
        />
</div>*/}

        <div className="form-group">
         <label htmlFor="milkPerDay">प्रति दिन पशु दूध क्षमता </label>
      <input type="text" className="form-control" id="milkPerDay"
       placeholder="प्रति दिन पशु दूध क्षमता"
       name='milkPerDay' value={milkPerDay} onChange={onChange}
        />
        </div>

        <div className="form-group">
         <label htmlFor="milkcapacity">पशु दूध क्षमता दर्ज करें</label>
      <input type="text" className="form-control" id="milkcapacity"
       placeholder="पशु दूध क्षमता दर्ज करें"
       name='milkcapacity' value={milkcapacity} onChange={onChange}
        />
        </div>

        <div className="form-group"  >
         <label htmlFor="price">पशु मूल्य दर्ज करें </label>
      <input type="text" className="form-control" id="price"
       placeholder="पशु मूल्य दर्ज करें" 
       name='price' value={price} onChange={onChange}
       />
        </div>

        <div className="form-group">
         <label htmlFor="animal">ब्यायी हुई है </label>
         <select class="form-control"   name='whatTimePregnant' value={whatTimePregnant} onChange={onChange}>
         <option value="नहीं">ब्यायी नहीं है </option>
       <option value="इस सप्ताह">इस सप्ताह</option>
       <option value="1 सप्ताह पहले">1 सप्ताह पहले</option>
     <option value="2 सप्ताह पहले">2 सप्ताह पहले</option>
     <option value="3 सप्ताह पहले">3 सप्ताह पहले</option>
     <option value="1 महीने पहले">1 महीने पहले</option>
     <option value="2 महीने पहले">2 महीने पहले</option>
       <option value="3 महीने पहले">3 महीने पहले</option>
       <option value="4 महीने पहले">4 महीने पहले</option>
       <option value="5 महीने पहले">5 महीने पहले</option>
       <option value="6 महीने पहले">6 महीने पहले</option>
       <option value="1 साल पहले">1 साल पहले</option>
       <option value="1.5 साल पहले">1.5 साल पहले</option>
       <option value="2 साल पहले">2 साल पहले</option>
     </select>
     </div> 

      {/*  <div className="form-group">
         <label htmlFor="whatTimePregnant">ब्यायी हुई है  </label>
      <input type="text" className="form-control" id="whatTimePregnant"
       placeholder="Enter animal whatTimePregnant"
       name='whatTimePregnant' value={whatTimePregnant} onChange={onChange}
        />
</div> */}

<div className="form-group">
         <label htmlFor="animal">क्या गर्भवती है</label>
         <select class="form-control"   name='isPregnent' value={isPregnent} onChange={onChange}>
         <option value="नहीं">नहीं</option>
       <option value="1 महीने की गर्भवती"> 1 महीने की गर्भवती</option>
       <option value="2 महीने की गर्भवती">2 महीने की गर्भवती</option>
     <option value="3 महीने की गर्भवती">3 महीने की गर्भवती</option>
     <option value=" 4 महीने की गर्भवती">4 महीने की गर्भवती</option>
     <option value=" 5 महीने की गर्भवती">5 महीने की गर्भवती</option>
     <option value="6 महीने की गर्भवती">6 महीने की गर्भवती</option>
       <option value="7 महीने की गर्भवती">7 महीने की गर्भवती</option>
       <option value="8 महीने की गर्भवती">8 महीने की गर्भवती</option>
       <option value="9 महीने की गर्भवती">9 महीने की गर्भवती</option>
     </select>
     </div>

       {/* <div className="form-group">
         <label htmlFor="isPregnent">Enter Animal isPregnent </label>
      <input type="text" className="form-control" id="isPregnent"
       placeholder="Enter animal isPregnent"
       name='isPregnent' value={isPregnent} onChange={onChange}
        />
</div> */}


<div className="form-group">
         <label htmlFor="animal">बच्चे का नाम क्या है</label>
         <select class="form-control"   name='whatChild' value={whatChild} onChange={onChange}>
         <option value="बछड़ी ">बछड़ी </option>
       <option value="बछारा ">बछारा </option>
       <option value="कोई भी नहीं">कोई भी नहीं</option>
     
     </select>
     </div>

      {/*  <div className="form-group">
         <label htmlFor="whatChild">Enter Animal whatChild </label>
      <input type="text" className="form-control" id="whatChild"
       placeholder="Enter animal whatChild"
       name='whatChild' value={whatChild} onChange={onChange}
        />
</div> */}

        <div className="form-group">
         <label htmlFor="image">फोटो का चयन करें </label>
      <input type="file" className="form-control" id="image"
       name='photo'  onChange={onChange1}
        />
        </div>

        <div className="form-group">  
      <input type="submit" className="form-control bg-primary text-white"  onClick={notify} />
        </div>
        <ToastContainer />
            </form>
           </Card.Text>
            </Card> 
            </Container> </>): <Phone />}
       </div>
        
    )
}

export default Post
