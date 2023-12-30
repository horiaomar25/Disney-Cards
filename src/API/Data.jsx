
import { useState, useEffect } from 'react';

const Usedata = () =>  {
  // state to hold the data
  const[characters, setCharacters] = useState([]);

  const getAllCharacters = async () => {
    try {
      const response = await fetch ("https://api.disneyapi.dev/character/")
      if(!response.ok){
        throw new Error ('Failed to fetch data')
      }
      const data = await response.json()
      setCharacters(data.data); // Set characters state with the character data array
     
    } catch (error) {
      console.log('Error fetching tasks', error)
    } 
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return {
    characters
  }
}

export default Usedata