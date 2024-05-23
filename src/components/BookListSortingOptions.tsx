import getBooks from "@utils/apiCalls/book/getBooks";
import BookFieldConstants from "@/utils/constants/bookFieldConstants";
import { Checkbox, Form } from 'semantic-ui-react';
import BookListSetterType from "@/interfaces/types/bookListSetterType";

function BookListSortingOptions( { setBooks, sortByColumn, setSortByColumn, sortByOrderIsASC, setSortByOrderIsASC } : { setBooks : BookListSetterType, sortByColumn : string, setSortByColumn : React.Dispatch<React.SetStateAction<string>>, sortByOrderIsASC : boolean, setSortByOrderIsASC : React.Dispatch<React.SetStateAction<boolean>> } ) {
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