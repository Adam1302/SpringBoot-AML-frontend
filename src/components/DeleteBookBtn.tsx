import BookListSetterType from '@interfaces/types/bookListSetterType';
import deleteBook from '@utils/apiCalls/book/deleteBooks';
import { ReactNode } from 'react';

interface DeleteBookBtnProps {
  id : string;
  alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}

function DeleteBookBtn({ id, alertSetter }: Readonly<DeleteBookBtnProps>) {
  const handleDelete = async () => {
    await deleteBook({ id, alertSetter });
  };

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteBookBtn;
