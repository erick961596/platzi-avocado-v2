import AvocadoItem from "@components/AvocadoItem";
import { useEffect, useState } from "react";

function random(){

    const [productList, setproductList] = useState<any[]>([]);
    const [inputRandomQuantity, setInputRandomQuantity] = useState<any | null>(2);


    useEffect(() => {
        fetch('/api/avo/getCompare?quantity=' + inputRandomQuantity)
            .then(res => res.json())
            .then(({ data, length }) => {
                setproductList([]);
                setproductList(data);

            });
    }, [inputRandomQuantity]);

    return(
        <div className='p-lg-5 p-3'>
        <h1 className='text-center'>Compara los aguacates</h1>
        <small className='text-center'>¿Cuántos aguacates quieres comparar?</small>
        <div className='input-group'>
            <input type="number" className='form-control' value={inputRandomQuantity} min="1" max="3" onChange={event => setInputRandomQuantity(event.target.value)} />

        </div>

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

export default random;