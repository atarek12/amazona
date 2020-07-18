import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Rating from '../components/Rating'
import './productScreen.css'
import { detailsProduct } from '../actions/productAction';

export default function ProductScreen(props) {

    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    };

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
    }, [])


    const renderThisProduct = () => (
        <div className="details">
            <div className="details-image">
                <img src={require(`../${product.image}`)} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>
                        <a href="#reviews">
                            <Rating
                                value={product.rating}
                                text={product.numReviews + ' reviews'}
                            />
                        </a>
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                            <div>{product.description}</div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>Price: ${product.price}</li>
                    <li>
                        Status:{' '}
                        {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                    </li>
                    <li>
                        Qty:{' '}
                        <select value={qty} onChange={(e) => { setQty(e.target.value); }}>
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li>
                        {product.countInStock > 0 && (
                            <button
                                onClick={handleAddToCart}
                                className="button primary"
                            >
                                Add to Cart
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )

    return (
        loading ? <div>Loading ...</div> : error ? <div>{error}</div> : <div>{renderThisProduct()}</div>
    )
}
