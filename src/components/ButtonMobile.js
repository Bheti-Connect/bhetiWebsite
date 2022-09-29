import styled from 'styled-components'

const STYLES =[
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const ButtonMobile = ({
    children,
    type,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
                >
            {children}
        </button>
    )
}

const buttonStyle = styled.button`
    :root {
        ---primary: ${props => props.theme.colorAccent};
    }

    .btn{
        padding: 8px 20px;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .btn:hover {
        padding: 8px 20px;
        transition: all 0.3s ease-out;
        background: ${props => props.theme.colorWhite};
        color: ${props => props.theme.colorBheti};
    }
    .btn--primary {
        background-color: var(---primary);
    }

    .btn-primary {
        background-color: transparent;
        color: ${props => props.theme.colorWhite};
        padding: 8px 20px;
        border-radius: 4px;
        border: 1px solid var(---primary);
        transition: all 0.3s ease-out;
    }

    .btn--medium {
        padding: 8px 20px;
        border-radius: 4px;
        font-size: 18px;
        color: ${props => props.theme.colorWhite};
    }
    .btn-large {
        padding: 12px 26px;
        border-radius: 4px;
        font-size: 20px;
        color: ${props => props.theme.colorWhite};
    }
`;