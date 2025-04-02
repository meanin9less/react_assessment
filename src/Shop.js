import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./ShopSlice";
export default function Shop() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.shop.products)
    const productsList = products.map(p => <li key={p.id}>{p.name} - {p.price}원<button onClick={(e) => {
        e.preventDefault();
        dispatch(addToCart(p.id));
    }}>add To Cart</button></li>);
    
    return (
        <>
            <ul>
                {productsList}
            </ul>
        </>
    )
}