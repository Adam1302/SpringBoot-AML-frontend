import { ReactNode } from "react";
import { BookListSetterType } from "../book";

export interface AddBookBtnProps {
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}
