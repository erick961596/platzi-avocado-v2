import { AppContext } from "context/AppContext";
import React, { useContext } from "react";

function Cart(){

    const { addToCart, removeFromCart, state } = useContext<any | null>(AppContext);

    const { cart, quantity } = state;
    return (
        <div className='container'>
            <h1>Cart</h1>

            <div className="row">
                <div className="col-12">
                    <div className="cart">
                        {cart.length > 0 && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td> {product.quantity} </td>
                                            <td>
                                                <button className='btn' onClick={() => removeFromCart(product)}>
                                                    <img src="https://erickperez.dev/wp-content/uploads/2022/03/basket.png" alt="" />
                                                </button>
                                            </td>
                                        </tr>

                                    ))}
                                    <tr>
                                        <td colSpan={3}>Total</td>
                                        <td>{cart.reduce((total, product) => total + product.price * product.quantity, 0)}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;