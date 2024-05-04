import { DeleteBookBtnProps } from '../interfaces/props/DeleteBookBtnProps';
import { deleteBook } from '../utils/bookApiCalls';

function DeleteBookBtn({ id, bookListSetter, alertSetter }: DeleteBookBtnProps) {
  const handleDelete = async () => {
    await deleteBook({ id, bookListSetter, alertSetter });
  };

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteBookBtn;
