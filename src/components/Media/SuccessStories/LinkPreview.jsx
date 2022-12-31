import React from 'react'

const LinkPreview = ({url}) => {



  return (
     <div>
        <iframe src={url} />
    </div>
  )
}

export default LinkPreview