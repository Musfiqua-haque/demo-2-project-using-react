import React from 'react'
import './featured.css'
import {featured} from '../../data/Data';


export default function FeaturedCard() {
  return (
    <div>
      <div className="content grid5">
        {featured.map((items, index)=>(
                <div className="box" key={index}>
                    <img src={items.cover} alt="" />
                    <h4>{items.name}</h4>
                    <label>{items.total}</label>
                </div>
            ))
        }
      </div>
    </div>
  )
}
