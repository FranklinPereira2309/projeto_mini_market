import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:12px;
    span{
        font-size:12px;
        color:#004d61;
    }

`

export const ProgressBar = styled.div`
    height:14px;
    width: ${props => props.percentage ? props.percentage : 0}%;
    border-radius:3px;
    background-color:${props => props.color ? props.color : '#004d61'};
    transition: 0.5s ease;

`
export const ProgressBar2 = styled.div`
    height: 15px;
    width:${props=> props.percentage? props.percentage : 0}%;
    border-radius:7px;
    background-color:${props=> props.color? props.color : '#004D61'};
    transition: 0.5s ease; 
`
