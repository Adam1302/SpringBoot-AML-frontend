import BookListSetterType from '@interfaces/types/bookListSetterType';
import { ReactNode } from 'react';

interface DeleteBookBtnProps {
    id : string;
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
    sortingColumn : string;
}

export default DeleteBookBtnProps;
