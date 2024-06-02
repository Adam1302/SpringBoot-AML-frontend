import BookListSetterType from '@interfaces/types/bookListSetterType';
import deleteBook from '@utils/apiCalls/book/deleteBooks';
import { ReactNode } from 'react';

interface DeleteBookBtnProps {
  id : string;
  bookListSetter: BookListSetterType;
  alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
  sortingColumn : string;
  sortByOrderIsASC : boolean;
}

function DeleteBookBtn({ id, bookListSetter, alertSetter, sortingColumn, sortByOrderIsASC }: Readonly<DeleteBookBtnProps>) {
  const handleDelete = async () => {
    await deleteBook({ id, bookListSetter, alertSetter, sortingColumn, sortByOrderIsASC });
  };

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteBookBtn;
