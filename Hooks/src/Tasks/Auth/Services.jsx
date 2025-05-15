import React, { useEffect } from 'react'
import { getProductsApiData } from '../../Services/api'
import Table from './Table'

const Services = () => {

    const [data, setData] = React.useState([])

    useEffect(() => {
        getProductsApiData().then(data => setData(data))
    }, [])

    return (
        <>
            <div>
                {data.length > 0 ? (
                    <>
                        <div>
                            {data.map((product, index) => {
                                return (
                                    <div key={product.id}>
                                        <h3>Name : {product.name}</h3>
                                        <p>Description : {product.description}</p>
                                        <p>Price : <em>{product.price}</em></p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <>No data found</>
                )}
            </div>
            <div>
                <Table />
            </div>
        </>
    )
}

export default Services