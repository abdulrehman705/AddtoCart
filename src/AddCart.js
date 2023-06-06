import { useEffect } from 'react';
import './App.css';
import { Data } from './Products';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

function AddCart() {
    useEffect(() => {
        Data.fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        // TODO: Implement addToCart function
    };

    return (
        <div className="App">
            <h2>Add to Cart</h2>
            {Data.items.map((product) => (
                <div className='products' >
                    <div>
                        <img className='SingleImage' src={product.image} alt={product.title} width="70px" />
                    </div>
                    <div className='description'>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>$:{product.price}</p>
                        <Link to={"/"} >
                            <Button type='dashed' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default observer(AddCart);
