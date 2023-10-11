import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import './recent.css';

export default function Recent() {
  return (
    <div>
      <section className='recent padding'>
        <div className="container">
            <Heading title ='Resent Property List' subtitle ="Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley" />
            <RecentCard />
        </div>
      </section>
    </div>
  )
}
