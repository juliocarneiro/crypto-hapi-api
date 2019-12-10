import Boom from "boom";
import api from "binance";

class AccountController {
  constructor(Account) {
    this.Account = Account;
  }

  async getAll(request, h) {
    try {
      const binanceRest = new api.BinanceRest({
        key: h.request.payload.key,
        secret: h.request.payload.secret,
        disableBeautification: false,
        handleDrift: true
      });
      const account = await binanceRest.account();
      return { account };
    } catch (error) {
      return Boom.badRequest("Failed to find account.");
    }
  }
}

export default AccountController;
