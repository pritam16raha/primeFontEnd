import React from 'react'

const ProductDescription = (props) => {

  const { product } = props

  // console.log("Description", props)


  return (
    <div className='max-padd-container mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>{product.description}</p>
            <p className='text-sm'></p>
        </div>
    </div>
  )
}

export default ProductDescription