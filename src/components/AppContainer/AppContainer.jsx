import React from "react";
import { Wrapper, Title } from './AppContainer.styles';

function AppContainer({ left, middle, right, title }) {
    return <Wrapper>
            <div>{left}</div>
            <div>{middle}</div>
            <div>
                <Title>
                    {title}:
                </Title>
                {right}
                </div>
        </Wrapper>
    



}

export default AppContainer;

