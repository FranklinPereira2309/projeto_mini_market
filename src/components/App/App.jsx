import React, { useState, useEffect } from 'react';
import { Container, Wrapper } from '../../components/App/App.styles';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import productMock from '../../mocks/products.json'
import ShoppingList from '../ShoppingList';
import LineChart from '../../shared/LineChart'
import extractPercentage from '../../utils/extractPercentage'





function App() {
    const colors = ['#62cbc6', '#00abad', '#00858c', '#006073', '#004d61']
    const [products, setProducts] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setProducts(productMock.products)
    }, [])

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked
            )

        setSelectedProducts(newSelectedProducts)

    }, [products])

    useEffect(() => {
        const total = selectedProducts.map(product => product.price)
            .reduce((a, b) => a + b, 0)

        setTotalPrice(total)

    }, [selectedProducts])

    function handleToggle(id, checked) {
        const newProducts = products.map(product =>
            product.id === id
                ? { ...product, checked: !product.checked }
                : product

        )

        setProducts(newProducts)
    }


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div>
                    <ShoppingList
                        products={products}
                        title='produtos'
                        onToggle={handleToggle}
                    />
                </div>}


                middle={<div>
                    <ShoppingList
                        products={selectedProducts}
                        title='compras'
                        onToggle={handleToggle}
                    />

                </div>}
                title='estatística'
                right={<div>
                    <LineChart
                        color={colors[0]}
                        title='saudável'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('healthy'))
                                .length
                        )}

                    />

                    <LineChart
                        color={colors[1]}
                        title='não tão saudável'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('junk'))
                                .length
                        )}
                    />

                    <LineChart
                        color={colors[2]}
                        title='limpeza'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('cleaning')).length
                        )}

                    />

                    <LineChart
                        color={colors[3]}
                        title='outros'
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('others'))
                                .length
                        )}
                    />
                    <div style={{ marginTop: '12px' }}>
                        <h2 style={{ fontWeight: 400, fontSize: '12px', color: '#00364A' }}>
                            Previsão de Gastos:
                        </h2>
                        <div style={{ fontSize: '24px' }}>
                            {totalPrice.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'

                            })}
                        </div>
                    </div>


                </div>}
            />

        </Container>
    </Wrapper>


}

export default App;