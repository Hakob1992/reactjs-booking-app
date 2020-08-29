import React from 'react'
import './Home.css'
import { Banner } from './Banner'
import { Card } from '@material-ui/core'

export const Home = () => {
   return (
      <div className='home'>
         <Banner />

         <div className="home__section">
            <Card />
         </div>
      </div>
   )
}
