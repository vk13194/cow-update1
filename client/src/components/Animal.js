import React from 'react'
import AnimalDisplay from './AnimalDisplay'
import SimpleReactLightbox from 'simple-react-lightbox'

const Animal = ({animal}) => {
    console.log('animal',animal)
    return (
        <div >
        <h6>you search animal 40km</h6>
        {animal.post.map(item=>
        <SimpleReactLightbox>
         <AnimalDisplay  animalPost={item} location={animal.location}
           key={item.id} />
           </SimpleReactLightbox>
            )}
            
        </div>
    )
}

export default Animal
