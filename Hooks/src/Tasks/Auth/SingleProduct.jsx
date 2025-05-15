import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductsApiData } from '../../Services/api';

const SingleProduct = () => {
    //useNavigate()
    const [data, setData] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getProductsApiData().then(data => {
            const matchedObj = data.find(obj => obj.id == id)
            setData(matchedObj)
        })
    }, [])
    return (
        <div>
            <button onClick={() => navigate("/login")}>Go back</button>
            {data && (
                <>
                    <h3>{data.name}</h3>
                    <h3>{data.description}</h3>
                    <h3>{data.price}</h3>
                </>
            )}
        </div>
    )
}

export default SingleProduct