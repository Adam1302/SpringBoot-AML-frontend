import api from '../api/axiosConfig'

interface DeleteBookBtnProps {
    id : string;
    reloadBookList: () => void;
}

function DeleteBookBtn({ id, reloadBookList }: DeleteBookBtnProps) {
    const deleteBook = async () => {
        try {
          const deletePath = "/api/v1/book/" + id;
          const response = await api.delete(deletePath);
        // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
          console.log(response.data);
          reloadBookList();
        } catch(err) {
          console.log(err);
        }
      }

    return <button onClick={deleteBook}>Delete</button>
}

export default DeleteBookBtn;
