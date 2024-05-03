import api from '../api/axiosConfig'
import { useState, useEffect } from "react";

interface Props {
    id : string;
}

interface Image {
    id: string,
    picture: Blob
}

function BookImage({ id }: Props) {
    const [imgBlob, setImgBlob] = useState<string>();

    const getImage = async () => {
        try {
          const getPath = "/api/v1/book/image/" + id;
          const imageFromDB = await api.get(getPath);

          setImgBlob(imageFromDB.data.picture);
          console.log(imageFromDB.data.id);
          console.log(imageFromDB.data.picture);
        } catch(err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getImage();
    }, [])

    return <img className="blob-to-image" src={"data:image/jpg;base64," + imgBlob} alt="No Image Available" />
}

export default BookImage