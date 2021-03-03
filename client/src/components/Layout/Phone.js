import React, {useState} from 'react'
import { Container,Card } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Phone = () => {
  const history = useHistory();
  const [post, setPost] = useState({
   name:"",
   phonenumber:""
  })
  const {name, phonenumber}= post
  const notify = () => toast.success("your otp send");
  const onChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
    }
    console.log(post)
  const onSubmit = async(e)=>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login',post)
    console.log('success')
    history.push('/otp')
    } catch (err) {
      console.log(err)
    }
   
  }
    return (
        <Container className="mt-5 shadow-lg p-3 mb-5 bg-white rounded ">
        <Card className="shadow-lg p-3  bg-white rounded">
  <Card.Header as="h5">Enter your detail</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <BsFillPersonFill /> <label htmlFor="name">Enter your name</label>
    <input type="text" className="form-control"
     id="name"  placeholder="enter your name"
     name='name' value={name} onChange={onChange}
      required/>
  </div>
  <div className="form-group">
  <AiFillPhone />  <label htmlFor="phonenumber">Enter your phonenumber</label>
    <input type="text" className="form-control"
     id="phonenumber"  placeholder="enter your phonenumber" 
     name='phonenumber' value={phonenumber} onChange={onChange}
     required/>
  </div>
  <div className="form-group">  
      <input type="submit" className="form-control bg-primary text-white" onClick={notify} />
        </div>
        <ToastContainer />
  </form>
    </Card.Text>
  </Card.Body>
</Card>

        </Container>
    )
}

export default Phone
