import React from 'react';
import ContentLoader from "react-content-loader";
import styled from 'styled-components';

function LoaderReact({count}) {


  return Array(count).fill(0).map((_, index) => (
    <Container  key={index}>

         <ContentLoader
          speed={2}
          width={280}
          height={300}
          viewBox="-60 100 539 600"
          backgroundColor="#d6d6d6"
          foregroundColor="#ffffff">

        <rect x="60" y="103" rx="15" ry="15" width="261" height="209" /> 
        <rect x="65" y="321" rx="0" ry="0" width="252" height="15" /> 
        <rect x="65" y="343" rx="0" ry="0" width="252" height="15" /> 
        <rect x="66" y="366" rx="0" ry="0" width="252" height="15" />
        </ContentLoader>

    </Container>
  ))
}

// CSS Style

const Container = styled.div`

`

export default LoaderReact;