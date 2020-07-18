import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
import './homeScreen.css'
import { listProducts } from '../actions/productAction';

export default function HomeScreen(props) {

    const [refresh, setRefresh] = useState(false)

    const refreshState = useSelector(state => state.refreshPage)

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    // component did mount
    useEffect(() => {
        // dispatch an action to fetch all products
        dispatch(listProducts(props.match.params.id));
    }, [refreshState])


    const renderAllProducts = () => (
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


    return (
        loading ? <div>Loading ...</div> : error ? <div>{error}</div> : <div>{renderAllProducts()}</div>
    )
}
