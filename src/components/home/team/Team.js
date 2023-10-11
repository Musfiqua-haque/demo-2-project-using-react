import React from 'react'
import Heading from '../../common/Heading'
import {team} from '../../data/Data'
import './team.css';

export default function Team() {
  return (
    <div>
      <section className='team background'>
        <div className="container">
            <Heading title='Our Valuable Agent' subtitle='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying' />

            <div className="content grid3">
                {team.map((item,index)=>{
                    return(
                        <div className='box' key={index}>
                            <button className='btn3'>{item.list} listing</button>
                            <div className='details'>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                    <i className='fa fa-circle-check'></i>
                                </div>
                                <i className='fa fa-location-dot'></i>
                                <label htmlFor="">{item.address}</label>
                                <h4>{item.name}</h4>
                                <ul>
                                    {item.icon.map((icon,index)=>(
                                        <li key={index}>{icon}</li>
                                    ))}
                                </ul>
                                <div className="button flex">
                                    <button>
                                        <i className='fa fa-envelope'></i>Message
                                    </button>
                                    <button className='btn4'>
                                        <i className='fa fa-phone-alt'></i>
                                    </button>
                                </div>
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
