import './Jegyvasarlas.css'
import { useEffect, useState } from 'react'
import { User, Users } from './user'

function Jegyvasarlas(){
  const [ users, setUsers ] = useState([] as User[])
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchTermPass, setSearchTermPass ] = useState('')

  // 1. eset:
  useEffect(() => {
    console.log('Users fetch effect')
    async function load() {
      const response = await fetch('/users.json')
      const users = await response.json() as Users;
      setUsers(users.users);
    }
    load()
  }, [])

  // 2. eset:
  useEffect( ()=>{
    console.log("Változás történt a USERS tömbben..." + users.length);
    
  }, [users] )

  const kivalogatott = users;
    return (
        <div>
          <h1>Jegyvásárlás</h1>
          <hr></hr>
          <h3>Bejelentkezés:</h3>
          <input type="text" placeholder="Add meg a felhasználó nevét" onChange={
      e => { 
        setSearchTerm( e.currentTarget.value ) 
        console.log( e.currentTarget.value )
      }
    } />
    <br></br>
    <input type="password" placeholder="Add meg a jelszót!" onChange={
      e => { 
        setSearchTermPass( e.currentTarget.value ) 
        console.log( e.currentTarget.value )
      }
    } /><br></br>
    <button onClick={()=>{
      
      
      kivalogatott.map(animal=>
        {
          
          if (animal.username==searchTerm && animal.password== searchTermPass){
          console.log("Sikeres bejelentkezés!")
      }
    })}}>Bejelentkezés</button>
        </div>    
      )
}

export default Jegyvasarlas;