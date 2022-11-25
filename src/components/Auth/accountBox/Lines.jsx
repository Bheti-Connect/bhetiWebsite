import React from 'react'
import styled from "styled-components";
import { useTheme } from '../../../context/themeContext';


const Lines = () => {
    const theme = useTheme()
    return (
        <LinesStyled theme={theme}>
            <div class="line-1"></div>
                <di className='text'>
                    <h4 className='linkedin-or-email'></h4>
                </di>
            <div class="line-2"></div>
        </LinesStyled>
    )
}

const LinesStyled = styled.div`
.line-1 {
    display: inline-flex;
    width: 20px;
    height: 1.5px;
    margin-top: 30px;
    background: ${props => props.theme.colorBlack};
}

.line-2 {
    margin-bottom: 2px;
    border-top: 2px solid ${props => props.theme.colorBlack};
    width: 20px;
}

.text{
    display: contents;
    margin-bottom: 69px;
}
.linkedin-or-email {
    margin-left: 70px;
}

`

export default Lines