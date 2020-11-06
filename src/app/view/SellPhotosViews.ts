import sellPhoto from '../models/SellPhoto';

export default {
  render(sell_photo: sellPhoto) {
    return {
      id: sell_photo.id,
      url: `http://192.168.100.24:3000/uploads/${sell_photo.path}`,
    };
  },

  renderMany(sell_photos: sellPhoto[]) {
    return sell_photos.map((sell_photo) => this.render(sell_photo));
  },
};