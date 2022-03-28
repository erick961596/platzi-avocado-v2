import React from 'react';

function AvocadoItem  ({productList}){


    return (
        <div className="row">
        {
            productList.map((product) => (

                <h3>{product.name}</h3>
            ))
        }

        </div>
    )

}

export default AvocadoItem;