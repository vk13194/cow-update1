import React, {useContext} from 'react'
import { Container } from 'react-bootstrap';
import AnimalList from './AnimalList';
//import HeaderImage from './HeaderImage';
import InputSerach from './search/InputSerach';
import UserContext from '../context/userContext'
import Phone from './Layout/Phone'
const Home = () => {
    const { userData } = useContext(UserContext);
      var token = userData.token;
    return (
        <div>
        {token ? (<>
            <Container>
        <div className="search_bar shadow-lg p-3 mb-5 bg-white rounded mt-2">
        <InputSerach />
       
        </div>
        <div className="animal_list">
        <AnimalList /> 
        </div>
        </Container>
             </>): <Phone /> }
     </div>   
    )
}

export default Home
