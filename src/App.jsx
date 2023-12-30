
import Usedata from './Api/Data'
import CharacterCard from './Components/CharacterCard'
import './App.css'


function App() {
 const{ characters } = Usedata()

  return (
    <>
 <CharacterCard characters={characters}/>
    </>
  )
}

export default App
