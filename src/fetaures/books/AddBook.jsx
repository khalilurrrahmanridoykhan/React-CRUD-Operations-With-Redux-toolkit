import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';
import {v4 as uudidv4} from 'uuid';
const AddBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberofBooks = useSelector((state)=>state.booksReducer.books.length);


  const handelSubmite = (e) => {
    e.preventDefault();
    const book = { id:uudidv4() ,title, author };
    dispatch(addBook(book));
    navigate("/show-books", {replace: true})
  }
  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handelSubmite}>
        <div className="form-field">
          <label htmlFor="title">Title:    </label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} required />
        </div>

        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input type="text" id="author" name="author" value={author} onChange={(e) => {
            setAuthor(e.target.value)
          }} required />
        </div>
        <div>
          <button className='submit'>Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook