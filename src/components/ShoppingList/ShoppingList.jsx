import React from "react";
import CheckBox from "../../shared/CheckBox/CheckBox";
import { Wrapper, Title, Array } from './ShoppingList.styles'


function ShoppingList({ title, products, onToggle }) {


    return <Wrapper>
        <Title>
            {title}:
        </Title>
        <Array>
            {products.map(product =>
                <CheckBox
                    key={product.id}
                    titlle={product.name}
                    value={product.checked}
                    onClick={() => onToggle(product.id, product.checked)}

                />

            )}

        </Array>
    </Wrapper>
}

export default ShoppingList
