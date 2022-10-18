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
          viewBox="0 0 539 600"
          backgroundColor="#d6d6d6"
          foregroundColor="#ffffff">

          <rect x="147" y="132" rx="7" ry="7" width="280" height="240" />
          <rect x="148" y="384" rx="6" ry="6" width="267" height="27" />
          <rect x="148" y="421" rx="6" ry="6" width="267" height="27" />
          <rect x="147" y="456" rx="6" ry="6" width="267" height="27" />
        </ContentLoader>

    </Container>
  ))
}

// CSS Style

const Container = styled.div`

`

export default LoaderReact;