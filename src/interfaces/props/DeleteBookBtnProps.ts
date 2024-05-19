import { BookListSetterType } from '@interfaces/book';
import { ReactNode } from 'react';

export interface DeleteBookBtnProps {
    id : string;
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}
