import User from '../models/User';
import imagesView from './ImagesView';
import SellsView from './SellsView';

export default {
  render(user: User) {
    return {
      id: user.user_id,
      name: user.user_name,
      username: user.user_username,
      email: user.user_email,
      password: user.user_password,
      images: imagesView.renderMany(user.images),
      sell: SellsView.renderMany(user.sell),
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};