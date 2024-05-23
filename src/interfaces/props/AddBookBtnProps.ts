import BookListSetterType from "@interfaces/types/bookListSetterType";
import { ReactNode } from "react";

interface AddBookBtnProps {
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
    sortingColumn: string;
    sortByOrderIsASC: boolean;
}

export default AddBookBtnProps;
