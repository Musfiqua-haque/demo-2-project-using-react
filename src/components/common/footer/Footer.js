import React from 'react'
import './footer.css'
// import {logo} from '../logoImage/logo.jpg'
import {footer} from '../../data/Data.js'

export default function Footer() {
  return (
    <div>
      <section>
        <div className="footercontact">
            <div className="container">
            <div className="send flex">
                <div className="text">
                    <h2>Do you have any question??</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
                <button className='btn5'>Contact Us</button>
            </div>
            </div>
        </div>
      </section>

      <div className="footer">
        <div className="container">
            <div className="box">
                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                    <h2>Do you need any help for anything?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>

                    <div>
                      <div className="input flex">
                        <input type="text" placeholder='Email Address' />
                        <button>Subscribe</button>
                      </div>
                    </div>
                </div>
            </div>
            {footer.map((value)=>(
        <div className="box">
          <h3>{value.title}</h3>
          <ul>{value.text.map((items)=>(
            <li>{items.list}</li>
          ))}</ul>
        </div>
      ))}
        </div>
      </div>
      <div className="legal">
        <p>2023@Created by Musfiqua</p>
      </div>
    </div>
  )
}
