import { createSlice } from "@reduxjs/toolkit";

const basketReducer = createSlice({
    name: "basket",
    initialState: {
        basketItems: [],
        totalPrice: 0,
        isLoadingBasketItems: true,
    },
    reducers: {
        addItemBasket(state, action) {
            state.basketItems.push({ basketCount: 1, item: action.payload });
        },
        deleteItemBasket(state, action) {
            state.basketItems = state.basketItems.filter(
                basketItem => basketItem.item.id !== action.payload
            );
        },
        setItemBasket(state, action) {
            state.basketItems = action.payload;
        },
        setSumBasket(state, action) {
            state.totalPrice = action.payload;
        },
        setLoadingBasket(state, action) {
            state.isLoadingBasketItems = action.payload;
        },
        setBasketItemCount(state, action) {
            state.basketItems = state.basketItems.map(basketItem => {
                if (basketItem.item.id === action.payload.id) {
                    basketItem.basketCount = action.payload.value;
                }
                return basketItem;
            });
        },
    },
});

export default basketReducer.reducer;
export const {
    addItemBasket,
    deleteItemBasket,
    setBasketItemCount,
    setItemBasket,
    setLoadingBasket,
    setSumBasket,
} = basketReducer.actions;
