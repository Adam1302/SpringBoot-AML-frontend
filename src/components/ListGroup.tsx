import { useState, useEffect } from "react";
import api from '../api/axiosConfig'
import AddBookBtn from "./AddBookBtn";
import DeleteBookBtn from "./DeleteBookBtn";

function ListGroup() {
    

    interface Book {
        id: string,
        work_name: string,
        primary_author: string,
        year_published: Int32Array,
        word_count: Int32Array
    }

  const [books, setBooks] = useState<Book[]>([]);
  const getBooks = async () => {
    try {
      const response = await api.get("/api/v1/book");
    // handles HTTP get request to return movie data
    // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
      console.log(response.data);
      setBooks(response.data);
    } catch(err) {
      console.log(err);
    }
  }

    useEffect(() => {
        getBooks();
    }, [])

    const getNoItemsMsg = () => {
        return books.length === 0 && <p>You have no books</p>
    } // Th logical AND ensures statement 2 only runs if statement 1 is TRUE

    return (
        <>
            <h1>Book List</h1>
            {getNoItemsMsg()}
            <ul className="list-group">
            {books.map(item => <li key={item.id} className="list-group-item"> <>{item.work_name} by {item.primary_author} <DeleteBookBtn id={item.id} reloadBookList={getBooks} /> </> </li>  )}
            <li> <AddBookBtn reloadBookList={getBooks} /> </li>
            </ul>
        </>
    );
}

export default ListGroup;
