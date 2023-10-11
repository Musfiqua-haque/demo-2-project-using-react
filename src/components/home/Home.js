import React from 'react';
import Hero from './hero/Hero';
import Featured from '../../components/home/featured/Featured'
import Recent from './recent/Recent';
import Award from './awards/Award';
import Location from './location/Location';
import Team from './team/Team'
import Price from './price/Price';

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Recent />
      <Award />
      <Location />
      <Team />
      <Price />
    </div>
  )
}
