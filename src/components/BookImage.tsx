import api from '../api/axiosConfig'
import { useState, useEffect } from "react";
import "../styles.css";

interface Props {
    id : string;
}

interface Image {
    id: string,
    picture: Blob
}

function BookImage({ id }: Readonly<Props>) {
    const [imgBlob, setImgBlob] = useState('');

    const getImage = async () => {
        try {
          const getPath = "/api/v1/book/image/" + id;
          const imageFromDB = await api.get(getPath);

          setImgBlob('data:image/png;base64,' + imageFromDB.data.picture);
          console.log(imageFromDB.data.id);
          console.log(imageFromDB.data.picture);
          
        } catch(err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getImage();
    }, [])

    return <img className="listImage" src={imgBlob} width={175} height={250} alt="Image Not Available"/>
}

export default BookImage