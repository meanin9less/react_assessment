import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

export default function MainLayout(){
    const title = "Shopping";
    const menuList = [
        {name: "상품보기", path:"/shop", key:1},
        {name: "장바구니", path:"/shoppingcart", key:2},
        {name: "결재금액보기", path:"/payment", key:3},
    ];
    return(
        <>
            <Header title={title}></Header>
            <Nav menuList={menuList}></Nav>
            <Outlet></Outlet>
        </>
    );
}