import React, {useContext} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UserContext from '../../context/userContext'
import {useHistory} from 'react-router-dom'
const Header = () => {
 const { userData, setUserData } = useContext(UserContext);
  const history = useHistory()
  
  const logout = () => {
    setUserData({
        token: undefined,
        user: undefined
    })
    localStorage.setItem("x-auth-token","");
    history.push('/phone')
};
    return (
    <div>
      {userData.user ? (<> 
    <Navbar bg="light" expand="sm">
    <Link to="/">
  <Navbar.Brand >Animalls</Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/post" className="nav-link">
      Shell Animal</Link>
      <Link to="/" className="nav-link">
      Home</Link>
      <Link to="/question" className="nav-link">
      Question
      </Link> 
      <Link to="/profile" className="nav-link" >
      your Profile</Link>
    </Nav>
 {userData.user.name}{' '} <button className="btn btn-outline-dark mr-2" onClick={logout}>Logout</button>

  </Navbar.Collapse>
</Navbar>
</>):(<><Navbar bg="light" expand="sm">
<Navbar.Brand >Animalls</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <nav className="ml-auto">
      <Link to="/phone" className="nav-link" >
      Login</Link>
  </nav>    
</Navbar.Collapse>
  </Navbar> </>)}
        </div>
    )
}

export default Header
