import { ReactNode } from 'react';
import api from '../api/axiosConfig'

interface DeleteBookBtnProps {
    id : string;
    reloadBookList: () => void;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}

interface Book {
    id: string,
    work_title: string,
    primary_author: string,
    year_published: Int32Array,
    word_count: Int32Array
}

function DeleteBookBtn({ id, reloadBookList, alertSetter }: DeleteBookBtnProps) {
    const deleteBook = async () => {
        try {
          const bookName = (await api.get("/api/v1/book")).data.find((book: Book) => book.id == id);
          const deletePath = "/api/v1/book/" + id;
          const response = await api.delete(deletePath);
        // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
          console.log(response.data);
          reloadBookList();
          alertSetter({ success: true, children: bookName.work_title + " Deleted"} );
        } catch(err) {
          console.log(err);
        }
      }

    return <button onClick={deleteBook}>Delete</button>
}

export default DeleteBookBtn;
