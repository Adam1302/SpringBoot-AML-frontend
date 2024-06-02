import axios from "axios";
import { ReactNode } from "react";
import BookListSetterType from "@interfaces/types/bookListSetterType";


const addBook = async (
    {
        alertSetter,
        work_title, 
        primary_author, 
        year_published, 
        word_count } : 
    {
        alertSetter: ({ success, children }: { success: boolean, children: ReactNode }) => void, 
        work_title : string, 
        primary_author : string, 
        year_published : number, 
        word_count : number }) => {

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
        alertSetter({ success: true, children: work_title + " Added"} );
    })
    .catch((error) => {
        console.log(error);
    });
  }

export default addBook;
