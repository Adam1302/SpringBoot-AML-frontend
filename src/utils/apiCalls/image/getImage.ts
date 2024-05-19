import ImageSetterType from '@interfaces/types/imageSetterType';
import api from '@api/axiosConfig'

const getImage = async (id : string, setImgBlob : ImageSetterType) => {
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

export default getImage;
