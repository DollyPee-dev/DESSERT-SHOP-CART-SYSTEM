import noItem from '/assets/images/illustration-empty-cart.svg'


const EmptyCart = () => {
    return (
        <div className='w-full flex items-center flex-col'>
            <img className='mb-4' src={noItem} alt="" />
            <p className='text-roseC-500'>Your added items will appear here</p>
        </div>
    )
}

export default EmptyCart