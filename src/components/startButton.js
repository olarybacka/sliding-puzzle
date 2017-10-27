import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.section`
transition: 200ms ease;
background: tomato;
color: #fff;
border: 1px solid #fff;
z-index: 100;
margin-left: 500px;
padding: 10px 30px;
float: right;
cursor: pointer;
text-align: center;
`

class StartButton extends Component {
    render() {

        return (
            <StyledButton  
                onClick={this.props.startGame.bind(null)}>
                Start
            </StyledButton>
        )
    }
}

export default StartButton