/* eslint-disable react/prop-types */
import '../App.css'

const CharacterCard = ({characters}) => {
   console.log(typeof characters)
  return (
    <>
    <div >
       
       
       <ul >
        <div className='characters_card'>
        {characters.map((character) => 
         <li  className='indi_card' key={character._id}>
            <h3>{character.name}</h3>
            <h3>{character.films} </h3>
            < img src={character.imageUrl} />
        
        </li>
       
        )}
        </div>


        
       </ul>
    
    </div>
    
    
    </>
  )
}

export default CharacterCard