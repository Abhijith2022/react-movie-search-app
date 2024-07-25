import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Actions , Orginals} from './urls'



function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost url = {Orginals} titles = 'Movies'/>
     <RowPost url = {Actions} titles = 'Action Movie' isSmall/>

    </div>
  )
}

export default App
