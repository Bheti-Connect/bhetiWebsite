import React, { useEffect } from 'react'
import puppeteer from 'puppeteer';

const LinkPreview = ({url}) => {


  // puppeteer
  

  useEffect(() => {
    let data = getDataFromLink(url)
    console.log(data)
  }, [])


  return (
     <div>
        <h1>Hello Test !</h1>
    </div>
  )
}

export default LinkPreview