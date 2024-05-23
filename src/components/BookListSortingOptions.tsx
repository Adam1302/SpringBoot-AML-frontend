import getBooks from "@utils/apiCalls/book/getBooks";
import BookFieldConstants from "@utils/constants/BookFieldConstants";
import { Checkbox, Form } from 'semantic-ui-react';
import BookListSortingOptionsProps from "@interfaces/props/BookListSortingOptionsProps";

function BookListSortingOptions( { setBooks, sortByColumn, setSortByColumn, sortByOrderIsASC, setSortByOrderIsASC } : Readonly<BookListSortingOptionsProps> ) {
    return <>
    <Form.Group className='d-flex'>
                <label>Sort list by: </label>
                {Array.from(BookFieldConstants.fieldMap.entries()).map(
                    field =>
                        <Form.Radio label={field[1]} checked={sortByColumn === field[0]} value={field[0]} onClick={() => { getBooks( setBooks, field[0], sortByOrderIsASC ); setSortByColumn(field[0]); }} className='inline-radio-list' />
                )}
            </Form.Group>

            <Checkbox className="toggle-btn" toggle defaultChecked={true} label={sortByOrderIsASC ? "ASC" : "DESC"} onClick={(evt, data) => { setSortByOrderIsASC(!sortByOrderIsASC); getBooks( setBooks, sortByColumn, !sortByOrderIsASC); } } />
    </>
}

export default BookListSortingOptions;