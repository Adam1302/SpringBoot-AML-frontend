import { ReactNode } from 'react';
import api from '../api/axiosConfig'
import { Book } from '../interfaces/book';
import { getBooks } from '../utils/bookApiCalls';
import { BookListSetterType } from '../interfaces/book';

interface DeleteBookBtnProps {
    id : string;
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}

function DeleteBookBtn({ id, bookListSetter, alertSetter }: DeleteBookBtnProps) {
    const deleteBook = async () => {
        try {
          const bookName = (await api.get("/api/v1/book")).data.find((book: Book) => book.id == id);
          const deletePath = "/api/v1/book/" + id;
          const response = await api.delete(deletePath);
        // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
          console.log(response.data);
          getBooks(bookListSetter);
          alertSetter({ success: true, children: bookName.work_title + " Deleted"} );
        } catch(err) {
          console.log(err);
        }
      }

    return <button onClick={deleteBook}>Delete</button>
}

export default DeleteBookBtn;
