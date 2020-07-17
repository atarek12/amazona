import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
import './homeScreen.css'
import axios from 'axios'


export default function HomeScreen() {

    const [products, setProducts] = useState([]);

    // component did mount
    useEffect(() => {
        fetchData();
    }, [])

    // fetch data from server
    const fetchData = async () => {
        const { data } = await axios.get('/api/products')
        setProducts(data.products)
    }


    return (
        <ul className="products">
            {
                products.map((product) => (
                    <li key={product._id}>
                        <div className="product">
                            <Link to={'/product/' + product._id}>
                                <img
                                    className="product-image"
                                    src={require(`../${product.image}`)}
                                    alt="product"
                                />
                            </Link>
                            <div className="product-name">
                                <Link to={'/product/' + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">
                                <Rating
                                    value={product.rating}
                                    text={product.numReviews + ' reviews'}
                                />
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
