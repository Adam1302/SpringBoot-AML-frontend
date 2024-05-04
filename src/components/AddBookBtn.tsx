import { addBook } from '../utils/bookApiCalls';
import { AddBookBtnProps } from '../interfaces/props/AddBookBtnProps';

function AddBookBtn({ bookListSetter, alertSetter }: AddBookBtnProps) {
    const handleClick = async () => {
        await addBook({ bookListSetter, alertSetter });
    }

    return <button onClick={handleClick}>Add Book</button>
}

export default AddBookBtn;
