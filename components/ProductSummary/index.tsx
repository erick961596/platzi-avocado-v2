import Image from "next/image";
import { useContext, useState } from "react";

import { AppContext } from "context/AppContext";
function ProductSummary({product}) {

    const {name, price, image, attributes} = product.data;
    const { addToCart, removeFromCart, state } = useContext<any | null>(AppContext);
    const [quantity, setQuantity] = useState<any | null>(1);

    const handdledAddToCart = (product, quantity) =>()=> {
        const parseQuantity = parseInt(quantity);
        addToCart(product, parseQuantity);
        
    }



  return (
    <div className='container py-5 w-lg-75 mx-auto'>
    <div className="row">
        <h1 className='text-center'>Product Summary</h1>
            <div className="col-lg-6 col-12">
                <Image src={image} alt={name} width={300} height={300} quality={85} />
            </div>
            <div className="col-lg-6 col-12 d-flex  align-items-center">
                <div className='card text-center p-3 my-3 w-100'>
                    <h3>{name}</h3>
                    <span className='badge bg-secondary'>{price}</span>
                    
                        <input type="number" name="quantity" id="quantity" value={quantity} onChange={ event=> setQuantity(event.target.value)} />
                        <button className='btn btn-primary' onClick={ handdledAddToCart(product.data, quantity) } >Add to Cart</button>
                   
                </div>
            </div>
    </div>
    <div className="row">
        <div className="col-12">
            <h4>About this avocado</h4>
            <p>{attributes.description}</p>
        </div>
        <hr />
    </div>
    <div className="row">
        <div className="col-12">
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Shape</td>
                        <td>{attributes.shape}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{attributes.hardiness}</td>
                    </tr>
                    <tr>
                        <td>Taste</td>
                        <td>{attributes.taste}</td>
                    </tr>

                    </tbody>
                
            </table>
        </div>
    </div>
   
</div>
  )
}

export default ProductSummary;