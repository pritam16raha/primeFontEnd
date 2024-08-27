import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd'
import ProductMd from '../components/ProductMd'
import ProductDescription from '../components/ProductDescription'
import { useSelector } from 'react-redux'

const Product = () => {

  const { loading, error, products, productCount } = useSelector((state) => state.products)

  // const { all_products } = useContext(ShopContext)
  const {productId} = useParams()
  // console.log("productId: ", productId)

  const product = products.find((e)=>e._id===productId);
  if(!product){
     return <div className='h1 pt-28'>Product not Found</div>
     // or redirect the user to a 404 page 
  }


  return (
    <section className='max-padd-container py-20'>
      <div>
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescription/>
      </div>
    </section>
  )
}

export default Product