import styled from 'styled-components'

const StyledTile = styled.button`
    transition: 200ms ease;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left:  ${props => props.left}px;
    top: ${props => props.top}px;
    background: ${props => (props.id === 0) ? 'none' : 'url("./img/puzzle/1/' + props.id + '.jpg") grey'};
    background-size: cover;
    color: #fff;
    border: 1px solid #fff;
    cursor:pointer;
    &:disabled{
        cursor: no-drop;
    }
`

export default StyledTile