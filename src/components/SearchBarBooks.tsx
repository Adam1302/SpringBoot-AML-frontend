
interface Props {
    bookListGetter : () => Promise<void>;
    authorSearchSetter: React.Dispatch<React.SetStateAction<string>>;
    titleSearchSetter: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBarBooks(
    {bookListGetter, authorSearchSetter, titleSearchSetter} 
    : Readonly<Props>) {

    return <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                aria-label="Title-Input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Title"
                onChange={evt => titleSearchSetter(evt.target.value)} />
            <input
                type="text"
                className="form-control"
                aria-label="Title-Input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Author"
                onChange={evt => authorSearchSetter(evt.target.value)} />
            <button
                onClick={bookListGetter}>
                Search
            </button>
        </div>
}

export default SearchBarBooks;
