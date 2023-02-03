import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../fetaures/books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: BooksReducer
    }
});

export default store;