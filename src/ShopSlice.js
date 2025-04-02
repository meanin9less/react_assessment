import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
    name:"shop",
    initialState:{
        products:[
            {id: 1, name:"product A", price: 100, amount: 0, added: false},
            {id: 2, name:"product B", price: 200, amount: 0, added: false},
            {id: 3, name:"product C", price: 300, amount: 0, added: false}
        ],
        totalPrice: 0,
        nextId: 0
    },
    reducers:{
        addProduct:(state, actions)=>{
            state.products.push({id: state.nextId, amount:0, ...actions.payload});
        },
        removeProduct:(state, actions)=>{
            state.products = state.products.filter(p=>p.id===actions.payload);
        },
        ///////////////////////////아래부터 사용/////////////////////////////////////
        addToCart:(state, actions)=>{
            const addedProduct = state.products.find(p=>p.id===actions.payload);
            addedProduct.added = true;
            addedProduct.amount++;
            state.products[actions.payload-1] = addedProduct;
        },
        removeCart:(state, actions)=>{
            const removedProduct = state.products.find(p=>p.id===actions.payload);
            removedProduct.added = false;
            removedProduct.amount = 0;
            state.products[actions.payload-1] = removedProduct;
        },
        changeAmount:(state, actions)=>{
            const { id, amount } = actions.payload; //여기 네줄은  gpt썼음 너무 어려움........... useSelector로 가져온걸 onChange랑 연동시키기......... 
            const product = state.products.find((p) => p.id === id); //보니까 이해됨......
            if (product) {
                product.amount = amount >= 0 ? amount : 0;
            };
        },
        calculatePrice:(state)=>{
            state.totalPrice = 0;
            const amounts = state.products.map(p=>p.price*p.amount);
            for(let a of amounts){
                state.totalPrice = state.totalPrice + a;
            };
        }
    }
});

export const { addProduct, removeProduct, addToCart, removeCart, changeAmount, calculatePrice} = ShopSlice.actions;
export default ShopSlice;