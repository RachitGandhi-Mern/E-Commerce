
import React, { useEffect } from 'react'
import { asyncgetusers } from './Store/Actions/UserActions'


const App = () => {


useEffect(()=>{
asyncgetusers()
},[])
  return (
    <div>

      
    </div>
  )
}

export default App
