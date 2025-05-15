import React, { useEffect, useState } from 'react'
import { getProductsApiData } from '../../Services/api'
import { Link } from 'react-router-dom'

const Table = () => {
    //Link to = "/patientDetails/2"
    const [data, setData] = useState([])
    useEffect(() => {
        getProductsApiData().then(data => setData(data))
    }, [])
    return (
        <>
            <table border={2} cellSpacing={1}>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? (
                            <>
                                {data.map((row, index) => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.description}</td>
                                        <td>{row.price}</td>
                                        <td>
                                            <Link to={`/products/${row.description}`}><button>View</button></Link>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <>
                                No records found
                            </>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table