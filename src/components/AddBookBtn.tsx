import { ReactNode } from 'react';
import api from '../api/axiosConfig'
import axios from 'axios';

interface Props {
    reloadBookList: () => void;
    alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void;
}

function AddBookBtn({ reloadBookList, alertSetter }: Props) {
    const addBook = async () => {
        const work_title = "The Symposium 2"
        const primary_author = "Plato 2"
        const year_published = -365
        const word_count = 20000

        let data = JSON.stringify({
            "work_title": work_title,
            "primary_author": primary_author,
            "year_published": year_published,
            "word_count": word_count
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/v1/book',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            reloadBookList();
            alertSetter({ success: true, children: work_title + " Added"} );
        })
        .catch((error) => {
            console.log(error);
        });
      }

    return <button onClick={addBook}>Add Book</button>
}

export default AddBookBtn;
