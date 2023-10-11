import React from 'react'
import Heading from '../../common/Heading'
import './award.css';
import {awards} from '../../data/Data'

export default function Award() {
  return (
    <div>
      <section className='award padding'>
        <div className="container">
            <Heading title="Over 1,20,000 Happy Clint With us" subtitle="Our Achievement" />

            <div className="content grid4">
              {awards.map((value,index)=>{
                const {icon,num,name} = value;
                return(
                  <div className='box' key={index}>
                  <div className='icon'>
                    <span>{icon}</span>
                  </div>
                  <h1>{num}</h1>
                  <p>{name}</p>
                </div>
                )        
              })}
            </div>
        </div>
      </section>
    </div>
  )
}
