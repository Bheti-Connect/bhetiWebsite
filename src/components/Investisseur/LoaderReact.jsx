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
          viewBox="0 150 539 800"
          backgroundColor="#d6d6d6"
          foregroundColor="#ffffff">

        <rect x="31" y="295" rx="15" ry="15" width="462" height="370" /> 
        <rect x="38" y="680" rx="0" ry="0" width="446" height="27" /> 
        <rect x="38" y="719" rx="0" ry="0" width="446" height="27" /> 
        <rect x="40" y="760" rx="0" ry="0" width="446" height="27" />

        </ContentLoader>

    </Container>
  ))
}

// CSS Style

const Container = styled.div`

`

export default LoaderReact;