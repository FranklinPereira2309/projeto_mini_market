import styled from 'styled-components';
import bg from '../../assets/bg.svg'

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100vh;
    background-color: #F8F5EC;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`

export const Container = styled.div`
    
    width: 734px;
    height: 574px;

    background-color: #ffff;
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;

`

export const Button = styled.button`
    height: 30px;
    width: 120px;
    border-radius: 5px;
    border:none;
    background-color: lightgray;
    color:#000;
    cursor:pointer;
    margin-top:50px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    &:hover{
        transform:scale(1.1)
    }
        
`