import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBook = () => {

  const Location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(Location.state.id);
  const [author, setAuthor] = useState(Location.state.author);
  const [title, setTitle] = useState(Location.state.title);

  const handelSubmite = (e) => {
    e.preventDefault();
    
    dispatch(updateBook({id, title, author}));
    navigate("/show-books", {replace: true})
  }


  return (
    <div>
        <h2>Edit Books</h2>

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
          <button className='submit'>Update Book</button>
        </div>
      </form>
    </div>
  )
}

export default EditBook