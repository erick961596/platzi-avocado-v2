import React, { useEffect, useState } from 'react';

import AvocadoItem from '@components/AvocadoItem';

function home(){
    const [productList, setproductList] = useState<any[]>([]);

    useEffect(() => {
        
        async function fetchData() {
            const response = await fetch('https://platzi-avocado-v2.vercel.app/api/avo');
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