import api from '../api/axiosConfig'

function DeleteBookBtn({ id }: { id: string }) {
    const deleteBook = async () => {
        try {
          const deletePath = "/api/v1/book/" + id;
          const response = await api.delete(deletePath);
        // handles HTTP get request to return movie data
        // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
          console.log(response.data);
        } catch(err) {
          console.log(err);
        }
      }

    return <button onClick={deleteBook}>Delete</button>
}

export default DeleteBookBtn;
