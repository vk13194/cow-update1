import React, {useState, useContext} from 'react'
import { Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import UserContext from '../../context/userContext'
import Phone from './Phone'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Address = () => {
  const history = useHistory(); 
  const { userData} = useContext(UserContext);
  const [myaddress, setMyaddress]= useState({ 
    address:''
  })

  const notify = () => toast.success("your addresss submit");
const {address} = myaddress;
const onChange=(e)=>{
  setMyaddress({...myaddress,[e.target.name]:e.target.value})
  }
  var token =userData.token
  console.log('address', userData)
const onSubmit =  async (e)=>{
  e.preventDefault();
  
try {
  const config = {
    headers: {
        "x-auth-token": token
    }
};
  const res=  await axios.post('http://localhost:5000/api/store', myaddress,config)
  console.log('success')
  console.log(res)
  history.push('/')
} catch (err) {
  console.log(err)
}

}
    return (
      <div>
        {token ?(<>
          <Container className="mt-3  shadow-lg p-3 mb-5 bg-white rounded">
        <Card className="mt-5 shadow-lg p-3 bg-white rounded">
  <Card.Header as="h5">Enter your Address</Card.Header>
  <Card.Body>
    <Card.Text>
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label htmlFor="state">Enter your state</label>
    <input type="text" className="form-control"
     id="state"  placeholder="enter your state"
      />
  </div>
  <div className="form-group">
    <label htmlFor="distic">Enter your distic</label>
    <input type="text" className="form-control"
     id="distic"  placeholder="enter your distic" 
     />
  </div>
  <div className="form-group">
    <label htmlFor="tashil">Enter your tashil</label>
    <input type="text" className="form-control"
     id="tashil"  placeholder="enter your tashil"
     />
  </div>
  <h3 className="text-center">OR </h3>
  <div className="form-group">
    <label htmlFor="pincode">Enter your pincode</label>
    <input type="text" className="form-control"
     id="pincode"  placeholder="enter your pincode" 
     name='address' value={address} onChange={onChange}
     />
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
         </>):<Phone /> }
      </div>
        
    )
}

export default Address
