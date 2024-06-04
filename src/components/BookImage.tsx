import { useState, useEffect } from "react";
import "@src/styles.css";
import getImage from '@utils/apiCalls/image/getImage';

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