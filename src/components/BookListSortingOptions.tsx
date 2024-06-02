import getBooks from "@utils/apiCalls/book/getBooks";
import BookFieldConstants from "@utils/constants/BookFieldConstants";
import { Checkbox, Form } from 'semantic-ui-react';
import BookListSetterType from "@interfaces/types/bookListSetterType";

interface BookListSortingOptionsProps {
    bookListGetter : () => Promise<void>;
    sortByColumn: string;
    setSortByColumn: React.Dispatch<React.SetStateAction<string>>;
    sortByOrderIsASC: boolean;
    setSortByOrderIsASC: React.Dispatch<React.SetStateAction<boolean>>;
  };

function BookListSortingOptions( { bookListGetter, sortByColumn, setSortByColumn, sortByOrderIsASC, setSortByOrderIsASC } : Readonly<BookListSortingOptionsProps> ) {
    return <>
    <Form.Group className='d-flex'>
                <label>Sort list by: </label>
                {Array.from(BookFieldConstants.fieldMap.entries()).map(
                    field =>
                        <Form.Radio 
                            label={field[1]}
                            checked={sortByColumn === field[0]}
                            value={field[0]}
                            onClick={ () => {
                                setSortByColumn(field[0]);
                                bookListGetter(); }
                              }
                            className='inline-radio-list' />
                )}
            </Form.Group>

            <Checkbox
                className="toggle-btn"
                toggle
                defaultChecked={true}
                label={sortByOrderIsASC ? "ASC" : "DESC"} onClick={(evt, data) => { setSortByOrderIsASC(!sortByOrderIsASC); bookListGetter(); } } />
    </>
}

export default BookListSortingOptions;