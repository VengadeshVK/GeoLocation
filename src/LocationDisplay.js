import React from 'react'
import north from './Img/north.jpg'
import south from './Img/southPole.png'
import './LocationDisplay.css'

const locationConfig={
    North : {
        text :'You are in North region',
        image : north
    },
    South :{
        text :'You are in South region',
        image : south
    }
}


const LocationDisplay =({latitude})=>{
    var region = (latitude>0)? 'North' :'South'
    const {text,image} = locationConfig[region]

    return(
            <div className={region}>
                <h1>{text}</h1>
                <img src={image} alt='pole'></img>
                
            </div>
        )
}

export default LocationDisplay;