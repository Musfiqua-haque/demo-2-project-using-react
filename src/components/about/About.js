import React from 'react'
import './about.css';
import Back from '../common/Back';
import Heading from '../common/Heading';
import about from '../../logoImage/about_banner.jpg'
import about_image from '../../logoImage/about_image.jpg'



export default function () {
  return (
    <div>
      <section className='about'>
        <Back name="About Us" tittle="About - use Who we are?" cover={about} />
        <div className="container flex mt">
            <div className="left row">
                <Heading title="Our Agency Story" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing "/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                </p>
                <button className='btn2'>More About Us</button>
            </div>
             <div className="right row">
                <img src={about_image} alt="" />
             </div>
        </div>
      </section>
    </div>
  )
}
