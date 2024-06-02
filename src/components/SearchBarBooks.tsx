import BookListSetterType from "@/interfaces/types/bookListSetterType";
import getBooksBySearch from "@/utils/apiCalls/book/getBooksBySearch";
import { useState } from "react";



function SearchBarBooks({bookListSetter} : {bookListSetter : BookListSetterType}) {
    const [titleSearch, setTitleSearch] = useState('')
    const [authorSearch, setAuthorSearch] = useState('')

    return <>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                aria-label="Title-Input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Title"
                value={titleSearch}
                onChange={evt => setTitleSearch(evt.target.value)} />
            <input
                type="text"
                className="form-control"
                aria-label="Title-Input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Author"
                value={authorSearch}
                onChange={evt => setAuthorSearch(evt.target.value)} />
            <button
                onClick={e => getBooksBySearch(bookListSetter, titleSearch, authorSearch)}>
                Search
            </button>
        </div>
    </>
}

export default SearchBarBooks;