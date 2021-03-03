import React from 'react'
import { Container } from 'react-bootstrap';
const InputSerach = () => {
    return (
        <Container>
    <div className="form-group">
  <label className="col-form-label col-form-label-lg"
   htmlFor="inputLarge">Search</label>
  <input className="form-control form-control-lg" type="text"
   placeholder="input your pincode" id="inputLarge" />
</div>
        </Container>
    )
}

export default InputSerach
