import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handelDeletebook = (id) => {
    dispatch(deleteBook(id));
  }
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            {/* <td>ID</td> */}
            <td>Title</td>
            <td>Author</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book)=> {
            const {id, title,author} = book;

            return <tr>
              {/* <td>{id}</td> */}
              <td>{title}</td>
              <td>{author}</td>
              <td>
                <Link to="/edit-book" state={{id, title, author}}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => {handelDeletebook(id)}}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BooksView