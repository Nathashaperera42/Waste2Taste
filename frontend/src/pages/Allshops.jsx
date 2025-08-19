import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Productcard from '../componets/Productcard'

const Allshops = () => {
    const { products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (!products) return // Exit if products not loaded
        
        if (searchQuery.length > 0) {
            setFilteredProducts(
                products.filter(product => 
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.city && product.city.toLowerCase().includes(searchQuery.toLowerCase()))
            ))
        } else {
            setFilteredProducts(products)
        }
    }, [products, searchQuery])

    // Loading state
    if (!products) {
        return <div>Loading shops...</div>
    }

    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Shops</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
                {filteredProducts
                    .filter(product => product.inStock)
                    .map((product, index) => (
                        <Productcard key={index} product={product} />
                    ))
                }
            </div>
            
            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No shops found matching your search</p>
            )}
        </div>
    )
}

export default Allshops