import { Indicator, Wrapper } from './CheckBox.styles';

function CheckBox({ value, titlle, onClick }) {

    return <Wrapper onClick={onClick}>

        <Indicator

            value={value}

        />
        {titlle}


    </Wrapper>
}

export default CheckBox;