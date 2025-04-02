import { useDispatch, useSelector } from "react-redux"
import { calculatePrice } from "./ShopSlice"

export default function Payment(){
    const dispatch = useDispatch()
    dispatch(calculatePrice())
    const totalPrice = useSelector(state=>state.shop.totalPrice);
    return(
        <>
            <h1>Total</h1>
            <span>{totalPrice}원</span>
        </>
    )
}