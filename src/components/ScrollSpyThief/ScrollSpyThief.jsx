import React from 'react'
import Scrollspy from 'react-scrollspy'

import './ScrollSpyThief.scss'

// TODO: Fix nice buttons somehow to fit on desktop / mobile! :)
const ScrollSpyThief = ({ sectionData }) => {
  return (
    <Scrollspy
      className='scroll-spy-thief' 
      items={sectionData.map(({ item }) => item)}
      currentClassName='isCurrent'
    >
      {sectionData.map((row) =>
        <li key={row.href}>
          <a href={row.href}>
            <div className='dot' />
            <div className='dot-text'>{row.title}</div>
          </a>
        </li>)}
    </Scrollspy>
  )
};

export default ScrollSpyThief;
