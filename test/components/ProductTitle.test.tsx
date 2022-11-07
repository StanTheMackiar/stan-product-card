import React from "react";
import ProductCard, { ProductTitle } from "../../src/components";
import renderer from 'react-test-renderer';
import { product1, product2 } from "./data/products";
;



describe('ProductTitle', () => {

    test('Debe mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom product"/>
        )

        expect( wrapper.toJSON()).toMatchSnapshot()
    })


    test('debe de mostrar el componente con el nombre del producto 1', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>

            
        )

        expect( wrapper.toJSON()).toMatchSnapshot()

    })


    test('debe de mostrar el componente con el nombre del producto 2', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>

            
        )

        expect( wrapper.toJSON()).toMatchSnapshot()

    })
})