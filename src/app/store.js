import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "../components/Display/displaySlice";

export default configureStore({
    reducer: {
        displayText: displaySlice
    }
})