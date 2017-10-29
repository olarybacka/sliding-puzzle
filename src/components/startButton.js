import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
transition: 200ms ease;
background: tomato;
color: #fff;
border: 1px solid #fff;
z-index: 100;
margin-left: 500px;
padding: 10px 30px;
cursor: pointer;
text-align: center;
&:disabled{
    background: #ffa798;
}
`

export default ({ gameInProgress, startGame }) => (


    <StyledButton
        disabled={gameInProgress}
        onClick={startGame.bind(null)}
    >
        Start
    </StyledButton>
)
