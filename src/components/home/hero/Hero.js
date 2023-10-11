import React from 'react';
import './hero.css';
import Heading from '../../common/Heading';

export default function Hero() {
  return (
    <div>
        <div className="hero">
            <div className="container">
                <Heading title='SEARCH YOUR DREAM HOME' subtitle='Find New Home and Best Interior Design For Your Future Plan' />
                <form action="" className='flex'>
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder='Location' />
                    </div>
                    <div className="box">
                        <span>Property Type</span>
                        <input type="text" placeholder='property type' />
                    </div>
                    <div className="box">
                        <span>Price range</span>
                        <input type="text" placeholder='Price range' />
                    </div>
                    <div className="box">
                        <h4>Filter</h4>
                    </div>
                    <button>
                        <i className='fa fa-search'></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
