import BookListSetterType from '@interfaces/types/bookListSetterType';
import { ReactNode } from 'react';

interface DeleteBookBtnProps {
    id : string;
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}

export default DeleteBookBtnProps;
