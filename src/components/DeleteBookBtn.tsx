import { DeleteBookBtnProps } from '@interfaces/props/DeleteBookBtnProps';
import deleteBook from '@utils/apiCalls/book/deleteBooks';

function DeleteBookBtn({ id, bookListSetter, alertSetter }: Readonly<DeleteBookBtnProps>) {
  const handleDelete = async () => {
    await deleteBook({ id, bookListSetter, alertSetter });
  };

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteBookBtn;
