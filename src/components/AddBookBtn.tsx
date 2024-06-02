import addBook from '@utils/apiCalls/book/addBook';
import { ReactNode, useState } from 'react';
import BookListSetterType from '@interfaces/types/bookListSetterType';

interface AddBookBtnProps {
    bookListSetter: BookListSetterType;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
    sortingColumn: string;
    sortByOrderIsASC: boolean;
}

function AddBookBtn({ bookListSetter, alertSetter, sortingColumn, sortByOrderIsASC }: Readonly<AddBookBtnProps>) {
    const [workTitle, setWorkTitle] = useState('')
    const [primaryAuthor, setPrimaryAuthor] = useState('')
    const [yearPublished, setYearPublished] = useState('')
    const [wordCount, setWordCount] = useState('')

    const handleClick = async () => {
        if (workTitle.length > 0
            && primaryAuthor.length > 0
            && yearPublished
            && wordCount) {
                const yearPublishedAsInt = parseInt(yearPublished.replace(/,/g, ''), 10)
                const wordCountAsInt = parseInt(wordCount.replace(/,/g, ''), 10)
                if (Number.isNaN(yearPublishedAsInt)) {
                    console.log("ERROR: Enter an integer for Year Published")
                    alertSetter({ success: false, children: "ERROR: Enter valid integer value for Year Published"} );
                } else if (Number.isNaN(wordCountAsInt) || wordCountAsInt < 0) {
                    console.log("ERROR: Enter positive integer for Word Count")
                    alertSetter({ success: false, children: "ERROR: Enter valid integer value for Word Count"} );
                } else {
                    await addBook({ bookListSetter, alertSetter, work_title: workTitle, primary_author: primaryAuthor, year_published: yearPublishedAsInt, word_count: wordCountAsInt, sortingColumn: sortingColumn, sortByOrderIsASC: sortByOrderIsASC });
                }
        } else {
            alertSetter({ success: false, children: "Unable to add book - invalid entries" });
        }
    }

    return <>
    <label>
        Book Title: <input 
            type="text"
            value={workTitle}
            onChange={(e) => setWorkTitle(e.target.value)}
        />
    </label>
    <label>
        Author: <input 
            type="text"
            value={primaryAuthor}
            onChange={(e) => setPrimaryAuthor(e.target.value)}
        />
    </label>
    <label>
        Year Published: <input 
            type="text"
            value={yearPublished}
            onChange={(e) => setYearPublished(e.target.value)}
        />
    </label>
    <label>
        Word Count: <input 
            type="text"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
        />
    </label>
    <button onClick={handleClick}>Add Book</button>
    </>
}

export default AddBookBtn;
