import { createSlice } from "@reduxjs/toolkit";
const count_product = {
    product: [],
}

const count = createSlice({
    name: 'count_products',
    initialState: count_product,
    reducers: {
        add: (state, action) => {
            state.product.push(action.payload.product)
        }
    }

})

export const { add } = count.actions;
export default count.reducer;