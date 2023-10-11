import React from 'react'
import './location.css';
import Heading from '../../common/Heading';
import {location} from '../../data/Data';



export default function Location() {
  return (
    <div>
      <section className='location padding'>
        <div className="container">
            <Heading title='Find Your Location' subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />

            <div className="content grid3">
              {location.map((item,index)=>{
                return(
                  <div className='box' key={index}>
                    
                      <img src={item.cover} alt="" />
                    <div className='overlay'>
                      <h5>{item.name}</h5>
                      <p>
                        <label>{item.Apartments}</label>
                        <label>{item.Offices}</label>
                        <label>{item.villas}</label>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </section>
    </div>
  )
}
