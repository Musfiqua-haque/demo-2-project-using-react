import React, { useState } from 'react'
import {nav} from '../data/Data'
import { Link } from 'react-router-dom'
import './header.css';
import logo from '../../logoImage/logo.jpg'


export default function Header() {

  const [navbar,setNavbar] = useState(false);

  const handleClick=()=>{
    setNavbar(!navbar);
  }

  return (
    <div>
      <header>
        <div className="container flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='nav'>
                <ul className= {navbar ? "small" : "flex"}>
                {nav.map((list,index)=>(
                    <li key={index}>
                        <Link to={list.path}>{list.text}</Link>
                    </li>
                ))}
                </ul>
                {/* <ul> 
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/price">price</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul> */}

            </div>
            <button className='login'>
                <i className='fa fa-sign-out'></i>SignIn
            </button>
            <div className="toggle">
                <button onClick={handleClick}>
                    {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </div>
        </div>
      </header>
    </div>
  )
}
