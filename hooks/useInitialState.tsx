
import React, { useState } from 'react';
import initialState from '../initialState';

function useInitialState()  { 

const [state, setState] = useState(initialState);


const addToCart = (product: any, quantity?) => {

    quantity = quantity ? quantity : 1;
    if (state.cart.find(prod => prod.id === product.id)) {
        setState({
            ...state,
            cart: state.cart.map(prod => prod.id === product.id ? { ...prod, quantity: prod.quantity + quantity } : prod)
        });
    }else{
        setState({
            ...state,
            cart: [...state.cart, { ...product, quantity: quantity }]
        });
    }

}

const removeFromCart = (product: any) => {
    setState({
        ...state,
        cart: state.cart.filter(p => p.id !== product.id)
    })
}


return {
    state,
    addToCart,
    removeFromCart

}
}
export default useInitialState;