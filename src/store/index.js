import { configureStore } from "@reduxjs/toolkit";
import usersSlice from '../reducers/Users'

const store = configureStore({
    reducer:{
        users : usersSlice 
    }
})


export default store