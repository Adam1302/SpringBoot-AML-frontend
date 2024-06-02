import BookListSetterType from '@interfaces/types/bookListSetterType';
import api from '@api/axiosConfig'

const getBooks = async ( 
  setBooks : BookListSetterType, 
  sortingColumn : string, 
  sortByOrderIsASC : boolean, 
  titleSearch : string = "", 
  authorSearch : string = "" ) => {
    try {
      const response = await api.get("/api/v1/book", {
        params: {
          sort_by: sortingColumn,
          sorting_order: sortByOrderIsASC ? 'ASC' : 'DESC',
          work_title: titleSearch,
          primary_author: authorSearch
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
