import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
`;

const ProductName = styled.h2`
    font-size: 1.5em;
`;

const BuyButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductCard = ({ name }) => {
    return (
        <ProductContainer>
            <ProductName>{name}</ProductName>
            <BuyButton>Comprar</BuyButton>
        </ProductContainer>
    );
};

export default ProductCard;
