import BookListSetterType from '@interfaces/types/bookListSetterType';
import api from '@api/axiosConfig'


const getBooksBySearch = async ( setBooks : BookListSetterType, titleValue : string = "" , authorValue : string = "" ) => {
    try {
      const response = await api.get("/api/v1/book/search", {
        params: {
          work_title : titleValue,
          primary_author: authorValue
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

export default getBooksBySearch;
