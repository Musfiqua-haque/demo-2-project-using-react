import React from 'react'
import Heading from '../../common/Heading'
import FeaturedCard from '../featured/FeaturedCard'

export default function Featured() {
  return (
    <div>
      <div className="featured background">
        <div className="container">
            <Heading title='Featured Property Types' subtitle='Find All Types of Property' />
            <FeaturedCard />
        </div>
      </div>
    </div>
  )
}
