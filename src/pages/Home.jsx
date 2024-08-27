import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import ProductDisplay from '../components/ProductDisplay';
import Offer from '../components/Offer';
import { fetchProductList } from '../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';


const Home = () => {
  
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector((state) => state.products)
  // console.log("Product list", products)

  useEffect(() => {
    dispatch(fetchProductList())
  }, [dispatch])
 
  const [category, setCategory] = useState('All')
  return (
    <>
    <Hero />
    <Features />
    <Categories category={category} setCategory={setCategory}/>
    <ProductDisplay category={products}/>
    <Offer />
    </>
  )
}

export default Home