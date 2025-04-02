import { useDispatch, useSelector } from "react-redux"
import { changeAmount, removeCart } from "./ShopSlice";

export default function ShopingCart() {
    const dispatch = useDispatch(); //selector안에서 filter, map쓰면 작동은 안되는데 오류메세지가 나와서 불편해서 분리
    const products = useSelector(state => state.shop.products);
    const addedproduct = products.filter(p => p.added);
    const productsList = addedproduct.map(p =>
        <li key={p.id}>{p.name} - {p.price}원 X {p.amount}<button onClick={(e) => {
            e.preventDefault();
            dispatch(removeCart(p.id));
        }}>Remove</button>
            <input type="number" min={0} value={p.amount} onChange={(e) => {
                const newAmount = Number(e.target.value);
                dispatch(changeAmount({ id: p.id, amount: newAmount }));
            }}></input>
        </li>);

    return (
        <>
            <ul>
                {productsList}
            </ul>
        </>
    )
}