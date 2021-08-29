import { createSlice } from "@reduxjs/toolkit";

const initState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState: initState,
    reducers: {
        // Check if product is in cart, if in cart, add 1 to quantity, else, push object to cart
        add_to_cart: (state, action) => {
            let indexOfProduct = state.findIndex((product) => product.product.id === action.payload.product.id);
            if (indexOfProduct !== -1)
                state[indexOfProduct].quantity += 1;
            else
                state.push(action.payload);
        },
        // Product is ALWAYS in cart since if not in cart, we are not even rendering the item in the cart
        // If product quantity > 1, decrement by 1, if product quantity is 1, remove item from cart array
        remove_from_cart: (state, action) => {
            let indexOfProduct = state.findIndex((product) => product.product.id === action.payload);
            let quantity = state[indexOfProduct].quantity;

            quantity > 1
                ? state[indexOfProduct].quantity -= 1
                : state.splice(indexOfProduct, 1)
        }
    }
});

export const { add_to_cart, remove_from_cart } = cartSlice.actions;

export default cartSlice.reducer;