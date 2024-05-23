import BookListSetterType from "../types/bookListSetterType";

type BookListSortingOptionsProps = {
    setBooks: BookListSetterType;
    sortByColumn: string;
    setSortByColumn: React.Dispatch<React.SetStateAction<string>>;
    sortByOrderIsASC: boolean;
    setSortByOrderIsASC: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
export default BookListSortingOptionsProps;