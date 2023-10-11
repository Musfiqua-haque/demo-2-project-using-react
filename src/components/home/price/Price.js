import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from '../../home/price/PriceCard'
import './price.css'

export default function Price() {
  return (
    <div>
      <section className='price padding'>
        <div className="container">
            <Heading title='Buy Your Package' subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />
            <PriceCard />
        </div>
      </section>
    </div>
  )
}
