import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { BackendDomain } from '../common/domain'

const Verify = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  // console.log(success,orderId)
  const navigate = useNavigate()
  
  const verifyPayment = async()=>{
    const response = await axios.post(`${BackendDomain}/api/order/verify`,{success,orderId})
    if(response.data.success){
      navigate("/myorders")
    }else{
      navigate("/")
    }
  }

  useEffect(()=>{
    verifyPayment()
  },[])

  return (
    <section>
      <div className='min-h-[60vh] grid'>
        <div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'></div>
      </div>
    </section>

  )
}

export default Verify