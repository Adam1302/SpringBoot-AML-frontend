import api from '../../../api/axiosConfig'
import { Book } from "../../../interfaces/book";
import { DeleteBookBtnProps } from "../../../interfaces/props/DeleteBookBtnProps";
import getBooks from "./getBooks";


const deleteBook = async ({ id, bookListSetter, alertSetter }: DeleteBookBtnProps) => {
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

export default deleteBook;
