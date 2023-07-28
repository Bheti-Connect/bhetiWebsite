import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  /* You can add your styles here */
    margin: 10px 0;
    padding: 10px;
    width: 350px;
    border-radius: 18px;
    @media all and (max-width: 440px){
        width: 300px;
    }
`;

function CustomInput({ onChange, ...props }) {
    const [value, setValue] = useState("");
  
    // format number with commas
    const formatNumber = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
    const handleInputChange = (e) => {
      e.preventDefault();
      // remove all non digit characters
      const val = e.target.value.replace(/[^0-9]/g, "");
      setValue(formatNumber(val));
    };
  
    // When the internal value changes, we notify parent component
    useEffect(() => {
      if (onChange) {
        // remove commas and convert to number before sending
        const numericValue = Number(value.replace(/,/g, ""));
        onChange(numericValue);
      }
    }, [value, onChange]);
  
    return <StyledInput type="text" value={value} onChange={handleInputChange} {...props} />;
  }
  
  export default CustomInput;