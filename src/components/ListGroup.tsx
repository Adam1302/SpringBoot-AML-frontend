import { useState, useEffect, ReactNode } from "react";
import AddBookBtn from "./AddBookBtn";
import DeleteBookBtn from "./DeleteBookBtn";
import Alert from "./Alert";
import BookImage from "./BookImage";
import { getBooks } from "../utils/bookApiCalls";
import { Book } from "../interfaces/book";

function ListGroup() {

    const [books, setBooks] = useState<Book[]>([]);
    const getNoItemsMsg = () => {
        return books.length === 0 && <p>You have no books</p>
    }
    const [alertMsg, setAlertMsg] = useState(<></>)
    const [alertVisible, setAlertVisible] = useState(false)
    const setAlert = ({ success, children } : { success: boolean, children: ReactNode }) => {
        setAlertVisible(true);
        setAlertMsg(
        <Alert success={success} dismissAlert={dismissAlert}>
            {children}
        </Alert>);
    }
    const dismissAlert = () => setAlertVisible(false)

    useEffect(() => {
        getBooks( setBooks );
    }, [])

    return (
        <>
            <h1>Book List</h1>
            {getNoItemsMsg()}
            <ul className="list-group">
                {books.map(
                    item => 
                    <li key={item.id} 
                        className="list-group-item"> 
                    <BookImage id={item.id} />
                    {item.work_title} by {item.primary_author} 
                        <DeleteBookBtn 
                            id={item.id} 
                            bookListSetter={setBooks}
                            alertSetter={setAlert} /> </li>  )}
                <li> <AddBookBtn 
                        bookListSetter={setBooks}
                        alertSetter={setAlert} /> </li>
            </ul>
            {alertVisible && alertMsg}
        </>
    );
}

export default ListGroup;
