import React from 'react'
import {Jumbotron, Container } from 'react-bootstrap';
const Question = () => {
    return (
        <div>
<Jumbotron className="text-center  mt-3" fluid>
  <Container >
    <h3>Ask Question</h3>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
<Container>
<form>
<div className="form-group">
    <label for="question">Ask Question</label>
    <textarea className="form-control" id="question" rows="3"></textarea>
  </div>
  <div className="form-group">  
      <input type="submit" className="form-control"  />
        </div>
</form> 
</Container>
<Container>
 <h3 >Your Answer</h3>   
</Container>
        </div>
    )
}

export default Question
