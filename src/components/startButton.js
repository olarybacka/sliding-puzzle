import React, { Component } from 'react'
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

class StartButton extends Component {
    render() {

        return (
            <StyledButton
                disabled={this.props.gameInProgress}
                onClick={this.props.startGame.bind(null, this.state)}
            >
                Start
            </StyledButton>
        )
    }
}

export default StartButton