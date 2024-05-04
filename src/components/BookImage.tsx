import { useState, useEffect } from "react";
import "../styles.css";
import { getImage } from '../utils/imageApiCalls';

interface Props {
    id : string;
}

function BookImage({ id }: Readonly<Props>) {
    const [imgBlob, setImgBlob] = useState('');

    useEffect(() => {
        getImage(id, setImgBlob);
    }, [])

    return <img className="listImage" src={imgBlob} width={175} height={250} alt="Image Not Available"/>
}

export default BookImage