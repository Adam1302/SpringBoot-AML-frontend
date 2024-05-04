import api from '../api/axiosConfig'
import axios from 'axios';
import { Book, BookListSetterType } from '../interfaces/book';
import { AddBookBtnProps } from '../interfaces/props/AddBookBtnProps';
import { DeleteBookBtnProps } from '../interfaces/props/DeleteBookBtnProps';

export const getBooks = async ( setBooks : BookListSetterType) => {
    try {
      const response = await api.get("/api/v1/book");
    // handles HTTP get request to return movie data
    // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
      console.log(response.data);
      setBooks(response.data);
    } catch(err) {
      console.log(err);
    }
  }

export const deleteBook = async ({ id, bookListSetter, alertSetter }: DeleteBookBtnProps) => {
    try {
      const bookName = (await api.get("/api/v1/book")).data.find((book: Book) => book.id == id);
      const deletePath = "/api/v1/book/" + id;
      const response = await api.delete(deletePath);
    // AWAIT: ensures UI thread is not blocked when long-running API calls are processed -- once task is completed, below code is executed
      console.log(response.data);
      getBooks(bookListSetter);
      alertSetter({ success: true, children: bookName.work_title + " Deleted"} );
    } catch(err) {
      console.log(err);
    }
  }

export const addBook = async ({ bookListSetter, alertSetter }: AddBookBtnProps) => {
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
        getBooks(bookListSetter);
        alertSetter({ success: true, children: work_title + " Added"} );
    })
    .catch((error) => {
        console.log(error);
    });
  }
