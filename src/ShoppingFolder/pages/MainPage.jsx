
import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents, Ladies } from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {

    const [gentsfashion, setGentsFashion] = useState(Gents)
    const [ladiesfashion, setLadiesFashion] = useState(Ladies)

    console.log(Gents)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsfashion={gentsfashion}/>
        <WomenCollection ladiesfashion= {ladiesfashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage