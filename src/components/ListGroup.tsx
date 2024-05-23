import { useState, useEffect, ReactNode } from "react";
import AddBookBtn from "@components/AddBookBtn";
import DeleteBookBtn from "@components/DeleteBookBtn";
import Alert from "@components/Alert";
import BookImage from "@components/BookImage";
import getBooks from "@utils/apiCalls/book/getBooks";
import Book from "@interfaces/book";
import BookFieldConstants from "@utils/constants/bookFieldConstants";
import BookListSortingOptions from "./BookListSortingOptions";

function ListGroup() {

    const [books, setBooks] = useState<Book[]>([]);
    const [sortByColumn, setSortByColumn] = useState(BookFieldConstants.workTitleField)
    const [sortByOrderIsASC, setSortByOrderIsASC] = useState(true)

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
        getBooks( setBooks, sortByColumn, sortByOrderIsASC );
    }, [])

    return (
        <>
            <h1>Book List</h1>

            <BookListSortingOptions 
            setBooks={setBooks} sortByColumn={sortByColumn} setSortByColumn={setSortByColumn} sortByOrderIsASC={sortByOrderIsASC} setSortByOrderIsASC={setSortByOrderIsASC} />

            {getNoItemsMsg()}
            <ul className="list-group">
                {books.map(
                    item => 
                    <li key={item.id} 
                        className="list-group-item"> 
                    <BookImage id={item.id} />
                    {item.work_title} {item.primary_author ? "by".concat(' ', item.primary_author) : ""}
                        <DeleteBookBtn 
                            id={item.id} 
                            bookListSetter={setBooks}
                            alertSetter={setAlert}
                            sortingColumn={sortByColumn}
                            sortByOrderIsASC={sortByOrderIsASC} /> </li>  )}
            </ul>

            <AddBookBtn 
                bookListSetter={setBooks}
                alertSetter={setAlert}
                sortingColumn={sortByColumn}
                sortByOrderIsASC={sortByOrderIsASC} />
            {alertVisible && alertMsg}
        </>
    );
}

export default ListGroup;
