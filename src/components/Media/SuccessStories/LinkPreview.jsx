import React, { useEffect } from 'react'
import puppeteer from 'puppeteer';

const LinkPreview = ({url}) => {


  // puppeteer
  async function getDataFromLink(link) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
  
    await page.goto(link);
    const html = await page.content();
  
    await browser.close();
  
    return html;
  }

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