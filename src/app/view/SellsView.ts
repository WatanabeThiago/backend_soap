import Sell from '../models/Sell';
import SellPhotosViews from '../view/SellPhotosViews'


export default {
    render(sell: Sell) {
        return {
            sell_id: sell.sell_id,
            sell_name: sell.sell_name,
            sell_price: sell.sell_price,
            sell_amount: sell.sell_amount,
            sell_AmountAvailable: sell.sell_AmountAvailable,
            sell_amountSold: sell.sell_amountSold,
            sell_state: sell.sell_state,
            sell_userId: sell.sell_userId,
            sell_photo: SellPhotosViews.renderMany(sell.sell_photos),
            
        };
    },

    renderMany(sells: Sell[]) {
        return sells.map((sell) => this.render(sell));
    },
};