import BookListSetterType from '@interfaces/types/bookListSetterType';
import api from '@api/axiosConfig'

const getBooks = async ( setBooks : BookListSetterType, sortingColumn : string ) => {
    try {
      const response = await api.get("/api/v1/book", {
        params: {
          sort_by: sortingColumn,
          sorting_order: 'ASC'
        }
      });
    // handles HTTP get request to return movie data
    // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
      console.log(response.data);
      setBooks(response.data);
    } catch(err) {
      console.log(err);
    }
  }

export default getBooks;
