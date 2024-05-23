import { useState, useEffect, ReactNode } from "react";
import AddBookBtn from "@components/AddBookBtn";
import DeleteBookBtn from "@components/DeleteBookBtn";
import Alert from "@components/Alert";
import BookImage from "@components/BookImage";
import getBooks from "@utils/apiCalls/book/getBooks";
import Book from "@interfaces/book";
import BookFieldConstants from "@/utils/constants/bookFieldConstants";
import { Form } from 'semantic-ui-react';

function ListGroup() {

    const [books, setBooks] = useState<Book[]>([]);
    const [sortByColumn, setSortByColumn] = useState(BookFieldConstants.workTitleField)

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
        getBooks( setBooks, sortByColumn );
    }, [])

    return (
        <>
            <h1>Book List</h1>

            <Form.Group className='d-flex'>
                <label>Sort list by: </label>
                {BookFieldConstants.fieldList.map(
                    field =>
                        <Form.Radio label={field} checked={sortByColumn === field} value={field} onClick={() => { getBooks( setBooks, field ); setSortByColumn(field); }} className='inline-radio-list' />
                )}
            </Form.Group>

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
                            alertSetter={setAlert}
                            sortingColumn={sortByColumn} /> </li>  )}
            </ul>

            <AddBookBtn 
                bookListSetter={setBooks}
                alertSetter={setAlert}
                sortingColumn={sortByColumn} />
            {alertVisible && alertMsg}
        </>
    );
}

export default ListGroup;
