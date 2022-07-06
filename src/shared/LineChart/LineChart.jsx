import React from "react";
import {Wrapper, ProgressBar2 } from "./LineChart.styles";

function LineChart({ title, percentage, color }) {
    return <Wrapper>
        
        <span>
            {title}:
        </span>
        <ProgressBar2 color={color} percentage={percentage} />
    </Wrapper>

}

export default LineChart;