import { useEffect } from 'react';
import './App.css';
import { Data } from './Products';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

function ItemList() {

    useEffect(() => {
        Data.fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        // addToCart(product);
    };

    return (
        <div className="App">
            <h2>Your Shopping Cart</h2>
            {Data.items.map((product) => (
                <Link to={"/AddCart"} key={product.id}>
                    <div className='Container' >
                        <img className='Image' src={product.image} key={product.id} alt={product.title} width="70px" />
                        <h3>{product.title}</h3>
                        <p>$:{product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default observer(ItemList)
