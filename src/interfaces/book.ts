
export interface Book {
    id: string,
    work_title: string,
    primary_author: string,
    year_published: Int32Array,
    word_count: Int32Array
}

export type BookListSetterType = React.Dispatch<React.SetStateAction<Book[]>>;

export interface BooksSetter {
    setBooks: BookListSetterType;
}

