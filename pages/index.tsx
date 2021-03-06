import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch'
import AvocadoItem from '@components/AvocadoItem';

import config from "../config";

function home(){
    const [productList, setproductList] = useState<any[]>([]);

    useEffect(() => {

    const api = config();
        async function fetchData() {
          
            const response = await fetch(`${api}api/avo`);
            const {data} = await response.json();
            setproductList(data);
            
        }
        
        fetchData();
        // window.fetch('/api/avo')
        //     .then(res => res.json())
        //     .then(({ data, length }) => {
        //         setproductList(data);
        //         console.log(data);
        //     });
    }, []);
   
    return (
        <div className='p-lg-5 p-3'>
        <h1 className='text-center'>Bienvenido(a) a los aguacates</h1>
        <div className="container">
            <div className="row">
                <div className="col-12">

                    <AvocadoItem productList={productList} />
                </div>
            </div>
        </div>


    </div>
    )
}

export default home;