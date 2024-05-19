import addBook from '../utils/apiCalls/book/addBook';
import { AddBookBtnProps } from '../interfaces/props/AddBookBtnProps';
import { useState } from 'react';

function AddBookBtn({ bookListSetter, alertSetter }: Readonly<AddBookBtnProps>) {
    const [workTitle, setWorkTitle] = useState('')
    const [primaryAuthor, setPrimaryAuthor] = useState('')
    const [yearPublished, setYearPublished] = useState<number>()
    const [wordCount, setWordCount] = useState<number>()

    const handleClick = async () => {
        if (workTitle.length > 0
            && primaryAuthor.length > 0
            && yearPublished
            && wordCount) {
            await addBook({ bookListSetter, alertSetter, work_title: workTitle, primary_author: primaryAuthor, year_published: yearPublished, word_count: wordCount });
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
            onChange={(e) => setYearPublished(+e.target.value)}
        />
    </label>
    <label>
        Word Count: <input 
            type="text"
            value={wordCount}
            onChange={(e) => setWordCount(+e.target.value)}
        />
    </label>
    <button onClick={handleClick}>Add Book</button>
    </>
}

export default AddBookBtn;
