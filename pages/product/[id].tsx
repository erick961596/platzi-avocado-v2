import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';

import ProductSummary from '@components/ProductSummary';

export const getStaticPaths: GetStaticPaths = async () => {
    const vercelapilink ="https://platzi-avocado-v2.vercel.app/";
    const localhost = "http://localhost:3002/";

    const response = await fetch(`${localhost}/api/avo/`)
    const { data }: any = await response.json()
    const paths = data.map( ({ id }) => ( { params: { id } } ) )
  
    return {
      // Statically generate all paths
      paths,
      // Display 404 for everything else
      fallback: false,
    }
  }


// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({params}) => {
  //console.log(params.id);
  const vercelapilink ="https://platzi-avocado-v2.vercel.app/";
    const localhost = "http://localhost:3002/";

        const res = await fetch(`${localhost}api/avo/${params?.id}`);
        const product = await res.json();
        
          // Pass post data to the page via props
        return { props: { product } }

}

function ProductItem({ product }: { product: any; }) {

  return (
    <div>
      {product == null ? null : <ProductSummary product={product} />}
    </div>
  );
}

export default ProductItem;