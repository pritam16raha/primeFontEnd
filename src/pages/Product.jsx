import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd'
import ProductMd from '../components/ProductMd'
import ProductDescription from '../components/ProductDescription'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/actions/productAction'

const Product = () => {

  const { loading, error, products, productCount } = useSelector((state) => state.products)

    //fetching product help of redux getProductDetails function
    const dispatch = useDispatch();

  // const { all_products } = useContext(ShopContext)
  const {productId} = useParams()
  // console.log("productId: ", products)

  // const product = products.find((e)=>e._id===productId);
  // if(!product){
  //    return <div className='h1 pt-28'>Product not Found</div>
  //    // or redirect the user to a 404 page 
  // }

  // console.log("Product is -", product)
  const { product } = useSelector((state) => state.productDetails);
  
  // console.log("Current product is", description)

  useEffect(() => {
    dispatch(getProductDetails(productId))
  },[dispatch, product._id])

  return (
    <section className='max-padd-container py-20'>
      <div>
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescription product={product}/>
      </div>
    </section>
  )
}

export default Product