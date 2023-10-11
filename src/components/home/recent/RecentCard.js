import React from 'react'
import {recent} from '../../data/Data'

export default function RecentCard() {
  return (
    <div>
      <div className="content grid3 mtop">
        {recent.map((value,index)=>{
            const {cover, category, location, name,price,type} = value;
            return(
                <div className="box shadow" shadow key={index}>
                    <div className="img">
                        <img src={cover} alt="" />
                    </div>
                    <div className='text'>
                        <div className="category flex">
                        <span>{category}</span>
                        <i className='fa fa-heart'></i>
                        </div>
                    <h4>{name}</h4>
                    <p>
                        <i className='fa fa-location-dot'></i>{location}
                    </p>
                </div>
                <div className="button flex">
                    <div>
                        <button className='btn2'>{price}</button>
                        <label htmlFor="">/sqft</label>
                    </div>
                    <span>{type}</span>
                </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}
