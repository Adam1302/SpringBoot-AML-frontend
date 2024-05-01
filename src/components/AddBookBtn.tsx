import api from '../api/axiosConfig'
import axios from 'axios';

function AddBookBtn() {
    const addBook = async () => {
        let data = JSON.stringify({
            "work_name": "The Symposium 2",
            "primary_author": "Plato 2",
            "year_published": -365,
            "word_count": 20000
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
        })
        .catch((error) => {
            console.log(error);
        });
      }

    return <button onClick={() => addBook()}>Add Book</button>
}

export default AddBookBtn;
