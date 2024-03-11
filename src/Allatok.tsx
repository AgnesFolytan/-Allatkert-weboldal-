import { useEffect, useState } from 'react'
import { Animal, Animals } from './animals';

function Allatok(){

  const [ animals, setAnimals ] = useState([] as Animal[])
  const [ searchTerm, setSearchTerm ] = useState('')

  useEffect(() => {
    console.log('animals fetch effect')
    async function load() {
      const response = await fetch('/animals.json')
      const animals = await response.json() as Animals;
      setAnimals(animals.animals);
    }
    load()
  }, [])

  useEffect( ()=>{
    console.log("Változás történt a animals tömbben..." + animals.length);

  }, [animals] )


  const kivalogatott = animals.filter( animal => animal.category.includes(searchTerm) );

  return <div>
    <h3>Keresés:</h3>
    
    <input type="text" placeholder="Add meg a keresendő Részleget!" 
      onInput={ e => {  
        setSearchTerm(e.currentTarget.value)
        console.log(e.currentTarget.value)
        }
      }
    ></input>
    
    <h3>Állataink:</h3>
    <table>
      <thead>
        <tr>
          <th>Állat</th>
          <th>Részleg</th>
        </tr>
      </thead>
      <tbody>
        {
          kivalogatott.map(animal => <tr>
          <td>{animal.name}</td>
          <td>{animal.category}</td>
        </tr>
        )}
      </tbody>
    </table>
  </div>
}

export default Allatok;