import React from 'react'
import Link from 'next/link'

function HeroBanner() {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img scr="" alt="headphones" className='hero-banner-image' />

        <div>
          <Link href="product/id">
            <button type="button">btn text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner