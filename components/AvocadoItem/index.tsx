import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

import { AppContext } from 'context/AppContext';
function AvocadoItem  ({productList}){


    const { state, addToCart } = useContext<any | null>(AppContext);

    const handdledAddToCart = (product) =>()=> {
        addToCart(product);
        //console.log(state);
    }

    return (
        <div className="row">
        {
            productList.map((product) => (

                <div className="col-md-4 cursor-pointer my-3" key={product.id}>
                      
        <div className='card text-center'>
        <Link key={product.id} href="/product/[id]" as={`/product/${product.id}`}>
            <Image src={product.image} alt={product.name} width={200} height={200} quality={85} />
            </Link>
            <div className='card-body'>
            <h3>{product.name}</h3>
            <p className='muted'>{product.price}</p>
            <p className='text-truncate'>{product['attributes'].description}</p>
            </div>
            <div className="card-footer">
                <button className='btn' onClick={ handdledAddToCart(product) }>
                    <img src="https://erickperez.dev/wp-content/uploads/2022/03/basket.png" alt="" />
                </button>
            </div>
           
        </div>
        
        
    </div>
            ))
        }

        </div>
    )

}

export default AvocadoItem;